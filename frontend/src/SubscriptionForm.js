import React, { useState, useEffect } from "react";
import { colors } from "./theme";

function getUTMParams() {
  const params = {};
  const url = new URL(window.location.href);
  ["utm_source", "utm_medium", "utm_campaign"].forEach(k => {
    if (url.searchParams.get(k)) params[k] = url.searchParams.get(k);
  });
  return params;
}

function SubscriptionForm() {
  const [form, setForm] = useState({
    full_name: "",
    job_title: "",
    email: "",
    team_name: "",
    league: "",
    interests: "",
    newsletter_consent: true,
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [utm, setUtm] = useState({});
  const [referrer, setReferrer] = useState("");

  useEffect(() => {
    setUtm(getUTMParams());
    setReferrer(document.referrer);
  }, []);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const API_BASE =
      process.env.REACT_APP_API_URL ||
      "https://tahleelai-email-subscription.onrender.com";

    try {
      const res = await fetch(`${API_BASE}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          ...utm,
          referrer_url: referrer,
        }),
      });
      const json = await res.json();
      if (res.ok) {
        setStatus("success");
        setForm({
          full_name: "",
          job_title: "",
          email: "",
          team_name: "",
          league: "",
          interests: "",
          newsletter_consent: true,
        });
      } else {
        setStatus(json.error || "Failed to subscribe. Try again.");
      }
    } catch (err) {
      setStatus("Network error. Try again.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
      <label style={{ fontWeight: 600 }}>Full Name</label>
      <input
        name="full_name"
        value={form.full_name}
        onChange={handleChange}
        placeholder="Your name"
        style={inputStyle}
      />
      <label style={{ fontWeight: 600, marginTop: 10 }}>Job Title</label>
      <input
        name="job_title"
        value={form.job_title}
        onChange={handleChange}
        placeholder="e.g. Analyst, Coach"
        style={inputStyle}
      />
      <label style={{ fontWeight: 600, marginTop: 10 }}>Email *</label>
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
        required
        placeholder="you@email.com"
        style={inputStyle}
      />
      <label style={{ fontWeight: 600, marginTop: 10 }}>Team Name</label>
      <input
        name="team_name"
        value={form.team_name}
        onChange={handleChange}
        placeholder="Optional"
        style={inputStyle}
      />
      <label style={{ fontWeight: 600, marginTop: 10 }}>League</label>
      <input
        name="league"
        value={form.league}
        onChange={handleChange}
        placeholder="Optional"
        style={inputStyle}
      />
      <label style={{ fontWeight: 600, marginTop: 10 }}>Interests</label>
      <input
        name="interests"
        value={form.interests}
        onChange={handleChange}
        placeholder="Optional (e.g. Data, Scouting)"
        style={inputStyle}
      />
      <div style={{ marginTop: 12 }}>
        <label style={{ color: colors.oxfordBlue }}>
          <input
            type="checkbox"
            name="newsletter_consent"
            checked={form.newsletter_consent}
            onChange={handleChange}
            style={{ marginRight: 8 }}
          />
          I agree to receive the Tahleel.AI newsletter.
        </label>
      </div>
      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: 18,
          background: colors.persianBlue,
          color: colors.white,
          fontWeight: 600,
          border: "none",
          borderRadius: 6,
          padding: "11px 0",
          width: "100%",
          boxShadow: `0 2px 8px ${colors.oxfordBlue}33`,
          cursor: loading ? "not-allowed" : "pointer"
        }}
      >
        {loading ? "Submitting..." : "Subscribe"}
      </button>
      {status === "success" && (
        <div style={{ marginTop: 14, color: colors.aztecGold, fontWeight: 600 }}>
          Thank you! Please check your email to confirm your subscription.
        </div>
      )}
      {status && status !== "success" && (
        <div style={{ marginTop: 14, color: "#d32f2f" }}>{status}</div>
      )}
    </form>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px 10px",
  margin: "5px 0",
  borderRadius: 5,
  border: `1px solid #ddd`,
  fontSize: 15,
  background: colors.white,
};

export default SubscriptionForm;
