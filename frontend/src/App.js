import React from "react";
import { colors } from "./theme";
import logo from "./logo.png"; // Use your actual logo or a placeholder

// Navigation links config
const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Demo", href: "#demo" },
  { name: "Contact", href: "#contact" },
];

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: colors.oxfordBlue, // Solid blue theme from your palette
      color: colors.white,
      fontFamily: "Inter, Arial, sans-serif"
    }}>
      {/* HEADER */}
      <header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "24px 40px",
        borderBottom: `1.5px solid ${colors.charcoal}22`,
        background: colors.oxfordBlue,
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="TAHLEEL.ai Logo" style={{ width: 48, marginRight: 18 }} />
          <span style={{ fontWeight: 700, fontSize: 22, color: colors.brightGold }}>TAHLEEL.ai</span>
        </div>
        <nav>
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: colors.white,
                textDecoration: "none",
                marginLeft: 32,
                fontWeight: 500,
                fontSize: 16,
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

      {/* HERO SECTION */}
      <section style={{
        padding: "60px 24px 30px 24px",
        textAlign: "left",
        maxWidth: 900,
        margin: "0 auto",
      }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: 700,
          color: colors.white,
          marginBottom: 20,
        }}>
          Revolutionary AI Football Tactical Intelligence
        </h1>
        <h2 style={{
          fontSize: "1.5rem",
          fontWeight: 400,
          color: colors.brightGold,
          marginBottom: 28,
        }}>
          Transform your team's performance with enterprise-grade AI that delivers comprehensive tactical analysis in just 5 minutes. TAHLEEL.ai combines GPT-4 Vision and Tahleel AI Engine to provide tactical intelligence worth $15K-$45K monthly subscriptions.
        </h2>
      </section>

      {/* MAIN CONTENT SECTIONS */}
      <main style={{
        maxWidth: 920,
        margin: "0 auto",
        background: `${colors.oxfordBlue}cc`,
        borderRadius: 18,
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        padding: "36px 28px",
        color: colors.white,
      }}>
        {/* Problem Section */}
        <section>
          <h3 style={{ color: colors.brightGold, fontSize: 26, marginBottom: 6 }}>
            The Problem with Traditional Football Analysis
          </h3>
          <h4 style={{ color: colors.white, fontWeight: 600, marginTop: 16 }}>Current Challenges:</h4>
          <ul style={{ marginBottom: 18, marginLeft: 16 }}>
            <li>2-3 days analysis time - too slow for modern football</li>
            <li>$20K+ monthly costs for traditional analyst teams</li>
            <li>Subjective insights with human bias and limitations</li>
            <li>Missed opportunities to exploit opponent weaknesses</li>
            <li>Limited scalability for multiple match analysis</li>
          </ul>
          <h4 style={{ color: colors.white, fontWeight: 600, marginTop: 16 }}>Business Impact:</h4>
          <ul style={{ marginBottom: 18, marginLeft: 16 }}>
            <li>Teams lose competitive advantages due to slow analysis</li>
            <li>Expensive human resources with inconsistent quality</li>
            <li>Critical tactical decisions made without data-driven insights</li>
            <li>Inability to adapt quickly to opponent strategies</li>
          </ul>
        </section>

        {/* Solution Section */}
        <section style={{ marginTop: 34 }}>
          <h3 style={{ color: colors.brightGold, fontSize: 26, marginBottom: 8 }}>
            TAHLEEL.ai Solution: Enterprise AI Tactical Intelligence
          </h3>
          <h4 style={{ color: colors.white, fontWeight: 600, marginTop: 14 }}>Revolutionary 4-Layer AI Architecture</h4>
          <ol style={{ marginLeft: 26 }}>
            <li>
              <b>Layer 1: GPT-4 Vision API</b>
              <ul>
                <li>Real-time player position detection</li>
                <li>Advanced formation identification (4-4-2, 4-3-3, 3-5-2, etc.)</li>
                <li>Movement pattern analysis and tracking</li>
                <li>90%+ accuracy in tactical situation recognition</li>
              </ul>
            </li>
            <li>
              <b>Layer 2: Pattern Recognition Algorithms</b>
              <ul>
                <li>Formation pattern matching using Graph Neural Networks</li>
                <li>Tactical sequence analysis with Delaunay Triangulation</li>
                <li>Bayesian model selection for strategic patterns</li>
                <li>Advanced clustering for tactical behavior identification</li>
              </ul>
            </li>
            <li>
              <b>Layer 3: Tahleel AI Engine AI Tactical Intelligence</b>
              <ul>
                <li>Strategic weakness analysis and exploitation strategies</li>
                <li>Comprehensive coaching recommendations</li>
                <li>Counter-formation development</li>
                <li>Arab League specialized tactical knowledge</li>
              </ul>
            </li>
            <li>
              <b>Layer 4: Football Domain Knowledge</b>
              <ul>
                <li>Professional football rule integration</li>
                <li>Regional playing style adaptation</li>
                <li>Competition-specific tactical intelligence</li>
                <li>Climate and cultural factor analysis</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Features & Capabilities */}
        <section style={{ marginTop: 34 }}>
          <h3 style={{ color: colors.brightGold, fontSize: 26, marginBottom: 8 }}>Key Features & Capabilities</h3>
          <ul>
            <li><b>Instant Tactical Analysis</b>: 5-minute processing vs 2-3 days traditional analysis...</li>
            <li><b>Arab League Specialization</b>: Regional tactical patterns analysis and adaptation...</li>
            <li><b>Enterprise-Grade Intelligence</b>: Professional coaching instructions, executive summaries...</li>
            <li><b>Advanced AI Technology</b>: Multi-AI orchestration, frame-based video analysis...</li>
          </ul>
        </section>

        {/* Business Value Proposition */}
        <section style={{ marginTop: 34 }}>
          <h3 style={{ color: colors.brightGold, fontSize: 26, marginBottom: 8 }}>Business Value Proposition</h3>
          <ul>
            <li><b>Cost Efficiency</b>: 90% cost reduction compared to traditional analyst teams...</li>
            <li><b>Competitive Advantage</b>: Faster tactical adaptation than competitors...</li>
            <li><b>Professional Quality</b>: Enterprise-grade reliability, professional coaching integration...</li>
          </ul>
        </section>

        {/* Target Market */}
        <section style={{ marginTop: 34 }}>
          <h3 style={{ color: colors.brightGold, fontSize: 26, marginBottom: 8 }}>Target Market: Arab League Professional Teams</h3>
          <p>Primary Customers:</p>
          <ul>
            <li>Saudi Pro League clubs and ownership groups</li>
            <li>UAE Pro League teams and management</li>
            <li>Qatar Stars League organizations</li>
            <li>AFC Champions League participants</li>
            <li>National team coaching staffs</li>
          </ul>
          <p>Subscription Tiers:</p>
          <ul>
            <li>Regional Intelligence: $15,000/month - Single league analysis</li>
            <li>Global Intelligence: $25,000/month - Multi-league tactical intelligence</li>
            <li>Elite Championship: $45,000/month - Complete tactical ecosystem</li>
          </ul>
        </section>

        {/* Technology Specifications */}
        <section style={{ marginTop: 34 }}>
          <h3 style={{ color: colors.brightGold, fontSize: 26, marginBottom: 8 }}>Technology Specifications</h3>
          <ul>
            <li><b>AI Models & APIs</b>: GPT-4 Vision API, Tahleel AI Engine, custom algorithms...</li>
            <li><b>Infrastructure</b>: Google Cloud Platform, real-time processing, 99.9% uptime...</li>
            <li><b>Security & Compliance</b>: Encryption, GDPR, SOC 2 certification, data sovereignty...</li>
          </ul>
        </section>

        {/* Demo Launch */}
        <section id="demo" style={{ marginTop: 34 }}>
          <h3 style={{ color: colors.brightGold, fontSize: 26, marginBottom: 8 }}>Demo Launch: September 15, 2025</h3>
          <ul>
            <li>Live AI analysis demonstration with real match footage</li>
            <li>Interactive tactical intelligence showcase</li>
            <li>Arab League specific features and customizations</li>
            <li>ROI calculator and business case presentation</li>
          </ul>
          <p style={{ fontWeight: 600, marginTop: 14 }}>Early Access Advantages:</p>
          <ul>
            <li>50% discount on first 3 months subscription</li>
            <li>Priority onboarding with dedicated support team</li>
            <li>Custom feature development for specific requirements</li>
            <li>Exclusive Arab League intelligence during launch period</li>
          </ul>
        </section>

        {/* Success Stories & Validation */}
        <section style={{ marginTop: 34 }}>
          <h3 style={{ color: colors.brightGold, fontSize: 26, marginBottom: 8 }}>Success Stories & Validation</h3>
          <ul>
            <li>Google DeepMind TacticAI achieved 90% expert preference rates with Liverpool FC</li>
            <li>Professional clubs globally adopting AI tactical analysis</li>
            <li>Proven ROI with data-driven tactical decision making</li>
            <li>Competition advantage through faster adaptation cycles</li>
            <li>$957 million investment in Saudi Pro League demonstrates market commitment</li>
            <li>Vision 2030 initiatives driving sports technology adoption</li>
            <li>Growing demand for data-driven football intelligence in MENA region</li>
            <li>23.63% CAGR in regional sports analytics market</li>
          </ul>
        </section>

        {/* CTA BANNER */}
        <section style={{
          marginTop: 44,
          background: colors.brightGold,
          color: colors.oxfordBlue,
          padding: "18px 22px",
          borderRadius: 14,
          textAlign: "center",
          fontWeight: 600,
          fontSize: "1.15rem"
        }}>
          <div>Ready to revolutionize your team's tactical intelligence?</div>
          <div>Register for the September 15, 2025 demo and discover how TAHLEEL.ai can provide the competitive edge your team needs to dominate the Arab League.</div>
          <a href="mailto:demo@tahleel.ai" style={{
            display: "inline-block",
            marginTop: 14,
            background: colors.oxfordBlue,
            color: colors.brightGold,
            padding: "11px 40px",
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 17,
            textDecoration: "none",
            transition: "background 0.2s"
          }}>Get Early Access Demo</a>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{
        background: colors.charcoal,
        color: colors.white,
        textAlign: "center",
        padding: "30px 16px 18px 16px",
        marginTop: 38,
        fontSize: 15,
        opacity: 0.90
      }}>
        <div><b>TAHLEEL.ai</b> - AI Football Tactical Analysis Platform | <b>Auwire Technologies</b> | Founded by Syed</div>
        <div style={{ margin: "8px 0" }}>
          Headquarters: Riyadh, Saudi Arabia | Regional Offices: Dubai, UAE | Doha, Qatar
        </div>
        <div>
          Support: <a href="mailto:support@tahleel.ai" style={{ color: colors.brightGold }}>support@tahleel.ai</a> | Sales: <a href="mailto:sales@tahleel.ai" style={{ color: colors.brightGold }}>sales@tahleel.ai</a> | Demo Requests: <a href="mailto:demo@tahleel.ai" style={{ color: colors.brightGold }}>demo@tahleel.ai</a>
        </div>
        <div style={{ margin: "8px 0" }}>
          <span>Copyright © 2025 Auwire Technologies. All rights reserved.</span>
          <span style={{ marginLeft: 12 }}>Privacy Policy | Terms of Service | Data Protection</span>
        </div>
        <div style={{ margin: "8px 0" }}>
          <span>Technology Partners: OpenAI GPT-4 Vision | Tahleel AI Engine | Google Cloud Platform | Professional Football Associations</span>
        </div>
        <div style={{ margin: "8px 0" }}>
          <span>Social: </span>
          <a href="https://linkedin.com/company/auwire-technologies" style={{ color: colors.brightGold, marginLeft: 6 }}>LinkedIn</a> | 
          <a href="https://twitter.com/TAHLEELai" style={{ color: colors.brightGold, marginLeft: 6 }}>Twitter</a> | 
          <a href="https://youtube.com/channel/UC..." style={{ color: colors.brightGold, marginLeft: 6 }}>YouTube</a>
        </div>
        <div style={{ margin: "8px 0" }}>
          Certifications: ISO 27001 | SOC 2 Type II | GDPR | FIFA Partner | AFC Associate
        </div>
        <div style={{ margin: "8px 0" }}>
          Regional Support: Arabic, English, French | Time Zones: GMT+3, GMT+4 | Local customer success teams
        </div>
      </footer>
    </div>
  );
}

export default App;
