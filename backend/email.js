// Confirmation email logic (stub)
const nodemailer = require("nodemailer");

const BASE_URL = process.env.FRONTEND_URL || "https://tahleelai.netlify.app";

async function sendConfirmationEmail(email, id, full_name) {
  // Generate confirmation link
  const confirmUrl = `${BASE_URL}/confirm?token=${encodeURIComponent(id)}`;

  // Compose email
  const msg = {
    from: process.env.EMAIL_FROM || "noreply@tahleel.ai",
    to: email,
    subject: "Confirm your subscription to Tahleel.AI",
    html: `
      <div style="font-family:Inter,Arial,sans-serif;">
        <h2>Welcome to Tahleel.AI!</h2>
        <p>Hi ${full_name || ""},</p>
        <p>Thanks for subscribing. Please confirm your subscription by clicking the link below:</p>
        <p><a href="${confirmUrl}" style="padding:10px 18px;background:#0F42C3;color:#fff;border-radius:5px;text-decoration:none;">Confirm Subscription</a></p>
        <p>If you didn't request this, just ignore this email.</p>
        <br/>
        <img src="${BASE_URL}/logo.png" alt="Tahleel.AI" style="width:120px;margin-top:20px;" />
      </div>
    `
  };

  // Send with nodemailer (configure SMTP in .env)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail(msg);
}

module.exports = sendConfirmationEmail;
