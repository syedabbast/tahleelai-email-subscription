import React, { useState } from "react";
import { colors } from "./theme";

function SubscriptionForm({ agreementColor = colors.charcoal }) {
  const [form, setForm] = useState({
    full_name: "",
    job_title: "",
    email: "",
    team_name: "",
    league: "",
    interests: "",
    newsletter_consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({
          full_name: "",
          job_title: "",
          email: "",
          team_name: "",
          league: "",
          interests: "",
          newsletter_consent: false,
        });
      } else {
        const data = await res.json();
        setStatus(data.error || "Submission failed. Try again.");
      }
    } catch (err) {
      setStatus("Network error. Try again.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "left", color: colors.charcoal }}>
      <label style={{ fontWeight: 600, color: colors.charcoal }}>Full Name</label>
      <input
        name="full_name"
        value={form.full_name}
        onChange={handleChange}
        placeholder="Your name"
        style={inputStyle}
      />
      <label style={{ fontWeight: 600, marginTop: 10, color: colors.charcoal }}>Job Title</label>
      <input
        name="job_title"
        value={form.job_title}
        onChange={handleChange}
        placeholder="e.g. Analyst, Coach"
        style={inputStyle}
      />
      <label style={{ fontWeight: 600, marginTop: 10, color: colors.charcoal }}>Email *</label>
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
        required
        placeholder="you@email.com"
        style={inputStyle}
      />
      <label style={{ fontWeight: 600, marginTop: 10, color: colors.charcoal }}>Team Name</label>
      <input
        name="team_name"
        value={form.team_name}
        onChange={handleChange}
        placeholder="Optional"
        style={inputStyle}
      />
      <label style={{ fontWeight: 600, marginTop: 10, color: colors.charcoal }}>League</label>
      <input
        name="league"
        value={form.league}
        onChange={handleChange}
        placeholder="Optional"
        style={inputStyle}
      />
      <label style={{ fontWeight: 600, marginTop: 10, color: colors.charcoal }}>Interests</label>
      <input
        name="interests"
        value={form.interests}
        onChange={handleChange}
        placeholder="Optional (e.g. Data, Scouting)"
        style={inputStyle}
      />
      <div style={{ marginTop: 12 }}>
        <label style={{ color: agreementColor }}>
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
  color: colors.charcoal, // updated to dark font color
};

export default SubscriptionForm;
