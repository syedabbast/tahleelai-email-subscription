const express = require("express");
const cors = require("cors");
const supabase = require("./supabaseClient");
const sendConfirmationEmail = require("./email");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "https://tahleelsubs.netlify.app", // Your Netlify site
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Helper to get IP address (from request headers)
function getIp(req) {
  return req.headers["x-forwarded-for"] || req.connection.remoteAddress || "";
}

// Subscription endpoint
app.post("/api/subscribe", async (req, res) => {
  const {
    full_name,
    job_title,
    email,
    team_name,
    league,
    interests,
    newsletter_consent = true,
    utm_source,
    utm_medium,
    utm_campaign,
    referrer_url,
  } = req.body;

  // Basic validation
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: "Valid email is required." });
  }

  // Compose row
  const row = {
    full_name,
    job_title,
    email,
    team_name,
    league,
    interests,
    newsletter_consent,
    source: "landing_page",
    status: "pending", // Until confirmed
    subscription_date: new Date().toISOString(),
    utm_source,
    utm_medium,
    utm_campaign,
    referrer_url,
    ip_address: getIp(req).split(",")[0].trim(),
    user_agent: req.headers["user-agent"] || "",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  try {
    // Insert to Supabase
    const { data, error } = await supabase
      .from("email_subscribers")
      .insert([row])
      .select("id,email,full_name");

    if (error) {
      // Unique violation (already exists)
      if (
        error.code === "23505" ||
        (error.details && error.details.includes("already exists"))
      ) {
        return res.status(409).json({ error: "Email already subscribed." });
      }
      throw error;
    }

    // Send confirmation email
    await sendConfirmationEmail(data[0].email, data[0].id, data[0].full_name);

    return res.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return res.status(500).json({ error: "Could not subscribe. Please try again." });
  }
});

// Email confirmation endpoint
app.post("/api/confirm", async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ error: "Missing confirmation token." });
  }

  try {
    // Find the subscriber by ID (token)
    const { data, error } = await supabase
      .from("email_subscribers")
      .select("*")
      .eq("id", token)
      .single();

    if (error || !data) {
      return res.status(404).json({ error: "Invalid or expired confirmation link." });
    }
    if (data.status === "confirmed") {
      return res.json({ success: true, message: "Already confirmed." });
    }

    // Update status to confirmed
    const { error: updateError } = await supabase
      .from("email_subscribers")
      .update({ status: "confirmed", updated_at: new Date().toISOString() })
      .eq("id", token);

    if (updateError) {
      throw updateError;
    }

    return res.json({ success: true, message: "Email confirmed successfully." });
  } catch (err) {
    console.error("Confirm error:", err);
    return res.status(500).json({ error: "Could not confirm email. Please try again." });
  }
});

// Health check
app.get("/api/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Tahleel.AI backend running on port ${PORT}`);
});
