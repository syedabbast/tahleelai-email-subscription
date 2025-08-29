import React from "react";
import { colors } from "./theme";
import SubscriptionForm from "./SubscriptionForm";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Demo", href: "#demo" },
  { name: "Contact", href: "#contact" },
];

// Trophy SVG icon component
function TrophyIcon({ size = 38, color = colors.oxfordBlue }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none">
      <rect width={size} height={size} rx={9} fill={colors.brightGold} />
      <g>
        <path
          d="M13.5 11a5.5 5.5 0 0 0 11 0h-11zm0 0v2a5.5 5.5 0 0 0 11 0v-2"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19 23v4M15 27h8"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 13c0 4 2.5 6 5.5 6"
          stroke={color}
          strokeWidth="2"
        />
        <path
          d="M30 13c0 4-2.5 6-5.5 6"
          stroke={color}
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

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
          <div style={{ marginRight: 18, display: "flex", alignItems: "center" }}>
            <TrophyIcon size={38} />
          </div>
          <div>
            <span style={{
              fontWeight: 700,
              fontSize: 28,
              color: colors.brightGold,
              letterSpacing: 1,
              verticalAlign: "middle",
            }}>
              TAHLEEL.ai
            </span>
            <span style={{ color: colors.brightGold, fontWeight: 500, fontSize: 17, marginLeft: 12 }}>
              تحليل
            </span>
            <span style={{ color: colors.white, fontWeight: 400, fontSize: 15, marginLeft: 16 }}>
              • by Auwire Technologies
            </span>
          </div>
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
            Built for coaches and technical directors.
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
            Experience the future of football analysis.<br />
            <span style={{ color: colors.aztecGold, fontWeight: 600 }}>
              Exclusive for professional teams.
            </span>
          </p>
          <SubscriptionForm />
        </section>

        {/* Minimal Feature Highlights - three side by side boxes */}
        <section
          id="features"
          style={{
            margin: "0 auto 54px auto",
            maxWidth: 1200,
            display: "flex",
            flexDirection: "row",
            gap: "38px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1 1 320px",
              background: colors.oxfordBlue,
              borderRadius: 14,
              border: `1px solid ${colors.brightGold}`,
              padding: "30px 28px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              textAlign: "left",
              minWidth: 280,
              maxWidth: 360,
              marginBottom: 0,
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
              flex: "1 1 320px",
              background: colors.oxfordBlue,
              borderRadius: 14,
              border: `1px solid ${colors.aztecGold}`,
              padding: "30px 28px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              textAlign: "left",
              minWidth: 280,
              maxWidth: 360,
              marginBottom: 0,
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
          <div
            style={{
              flex: "1 1 320px",
              background: "#e3e6eb", // matches the color in your provided image ![image2](image2)
              borderRadius: 14,
              border: `1px solid ${colors.charcoal}`,
              padding: "30px 28px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              textAlign: "left",
              minWidth: 280,
              maxWidth: 360,
              marginBottom: 0,
              color: colors.charcoal,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <h4 style={{ color: colors.charcoal, fontWeight: 700, fontSize: 20, marginBottom: 12 }}>
                Zero-Effort Intelligence
              </h4>
              <p style={{ color: colors.charcoal, fontSize: 16 }}>
                Automated opponent analysis delivering winning strategies without manual research or data collection
              </p>
            </div>
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
          TAHLEEL.ai &mdash; Auwire Technologies, Riyadh &bull; 2025
        </div>
        <div style={{ marginBottom: 8 }}>
          Contact: <a style={{ color: colors.brightGold }} href="mailto:demo@tahleel.ai">demo@tahleel.ai</a>
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
