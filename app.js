import React from "react";
import SubscriptionForm from "./SubscriptionForm";
import { colors } from "./theme";
import logo from "./logo.png";

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(135deg, ${colors.oxfordBlue} 70%, ${colors.brightGold} 100%)`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: colors.charcoal,
      fontFamily: "Inter, Arial, sans-serif"
    }}>
      <div style={{
        background: colors.white,
        borderRadius: 16,
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
        padding: "2rem",
        maxWidth: 420,
        width: "100%",
        textAlign: "center",
        border: `2px solid ${colors.aztecGold}`,
      }}>
        <img src={logo} alt="Tahleel.AI" style={{ width: "180px", marginBottom: 18 }} />
        <h2 style={{ color: colors.oxfordBlue, marginBottom: 4 }}>Join Tahleel.AI Updates</h2>
        <p style={{ color: colors.charcoal, fontSize: 15, marginBottom: 22 }}>
          Subscribe for news, demos, and exclusive insights. <br />
          <span style={{ color: colors.aztecGold, fontWeight: 600 }}>Elite analysis, delivered.</span>
        </p>
        <SubscriptionForm />
        <div style={{ marginTop: 18, fontSize: 13, color: colors.charcoal }}>
          By subscribing, you agree to our <a style={{ color: colors.persianBlue }} href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
