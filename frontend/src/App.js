import React from "react";
import { colors } from "./theme";
import logo from "./logo.png";
import SubscriptionForm from "./SubscriptionForm";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Contact", href: "#contact" },
];

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.oxfordBlue,
        color: colors.white,
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "32px 56px 0 56px",
          background: colors.oxfordBlue,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="TAHLEEL.ai Logo" style={{ width: 54, marginRight: 20 }} />
          <span style={{ fontWeight: 700, fontSize: 28, color: colors.brightGold, letterSpacing: 1 }}>
            TAHLEEL.ai
          </span>
        </div>
        <nav>
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: colors.white,
                textDecoration: "none",
                marginLeft: 40,
                fontWeight: 500,
                fontSize: 18,
                transition: "color 0.2s",
              }}
              onMouseOver={e => (e.target.style.color = colors.brightGold)}
              onMouseOut={e => (e.target.style.color = colors.white)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO & FORM */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
        }}
      >
        <section
          style={{
            maxWidth: 600,
            width: "100%",
            margin: "60px 0 0 0",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: 700,
              marginBottom: 16,
              color: colors.white,
              letterSpacing: 1,
              lineHeight: 1.15,
            }}
          >
            AI-Powered Tactical Intelligence<br />
            For Elite Football Teams
          </h1>
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 400,
              marginBottom: 32,
              color: colors.brightGold,
              lineHeight: 1.35,
            }}
          >
            Instantly unlock winning strategies with enterprise-grade AI analysis in just 5 minutes.<br />
          
          </h2>
        </section>

        {/* Subscription Form */}
        <section
          style={{
            width: "100%",
            maxWidth: 440,
            background: colors.white,
            borderRadius: 18,
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            padding: "2.2rem 2rem",
            marginBottom: 56,
            marginTop: 0,
            textAlign: "center",
            border: `2.5px solid ${colors.brightGold}`,
          }}
        >
          <h3 style={{ color: colors.oxfordBlue, marginBottom: 10, fontWeight: 700, fontSize: 24 }}>
            Request Demo & Early Access
          </h3>
          <p style={{ color: colors.charcoal, fontSize: 16, marginBottom: 24 }}>
            Experience the future of sports analysis.<br />
            <span style={{ color: colors.aztecGold, fontWeight: 600 }}>
              Exclusive for professional teams.
            </span>
          </p>
          <SubscriptionForm />
        </section>

        {/* Minimal Feature Highlights */}
        <section
          id="features"
          style={{
            margin: "0 auto 54px auto",
            maxWidth: 620,
            display: "flex",
            flexDirection: "column",
            gap: "38px",
          }}
        >
          <div
            style={{
              background: `${colors.oxfordBlue}`,
              borderRadius: 14,
              border: `1px solid ${colors.brightGold}`,
              padding: "30px 28px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              textAlign: "left",
            }}
          >
            <h4 style={{ color: colors.brightGold, fontWeight: 700, fontSize: 20, marginBottom: 12 }}>
              Instant Tactical Analysis
            </h4>
            <ul style={{ color: colors.white, fontSize: 17, marginLeft: 18, marginBottom: 0 }}>
              <li>5-minute video-to-report workflow</li>
              <li>AI-driven formation and weakness detection</li>
              <li>Actionable insights for every match</li>
            </ul>
          </div>
          <div
            style={{
              background: `${colors.oxfordBlue}`,
              borderRadius: 14,
              border: `1px solid ${colors.aztecGold}`,
              padding: "30px 28px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              textAlign: "left",
            }}
          >
            <h4 style={{ color: colors.aztecGold, fontWeight: 700, fontSize: 20, marginBottom: 12 }}>
              Royal Experience
            </h4>
            <ul style={{ color: colors.white, fontSize: 17, marginLeft: 18, marginBottom: 0 }}>
              <li>Premium, secure platform for elite organizations</li>
              <li>99%+ uptime, global cloud infrastructure</li>
              <li>Dedicated onboarding and support</li>
            </ul>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          background: colors.charcoal,
          color: colors.white,
          textAlign: "center",
          padding: "32px 12px 24px 12px",
          fontSize: 15,
          opacity: 0.97,
          letterSpacing: 0.2,
        }}
      >
        <div style={{ fontWeight: 700, marginBottom: 8 }}>
          TAHLEEL.ai &mdash; Auwire Technologies,&bull; 2025
        </div>
        <div style={{ marginBottom: 8 }}>
          Contact: <a style={{ color: colors.brightGold }} href="mailto:connect@auwiretech.com">connect@auwiretech.com</a>
        </div>
        <div>
          <a style={{ color: colors.brightGold, marginRight: 12 }} href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a style={{ color: colors.brightGold }} href="/terms" target="_blank" rel="noopener noreferrer">Terms</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
