import React from "react";
import { colors } from "./theme";

function ThankYouPage() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: colors.white,
      }}
    >
      <div
        style={{
          background: colors.oxfordBlue,
          border: `2px solid ${colors.brightGold}`,
          borderRadius: 16,
          boxShadow: "0 4px 22px rgba(0,0,0,0.09)",
          padding: "38px 42px",
          maxWidth: 780,
          textAlign: "left",
        }}
      >
        <h2 style={{ color: colors.brightGold, marginBottom: 18, fontWeight: 700, textAlign: "center" }}>
          Thank You for Your Interest in TAHLEEL.ai
        </h2>
        <p style={{ fontSize: 18, marginBottom: 18 }}>
          <strong>Dear Coach [USER_NAME],</strong><br />
          Thank you for subscribing to TAHLEEL.ai Coach Platform – the revolutionary AI-powered football tactical analysis system designed specifically for Arab League teams and professional coaches.<br />
          Your interest in cutting-edge tactical intelligence demonstrates your commitment to gaining competitive advantage through advanced AI technology.
        </p>
        <h3 style={{ color: colors.brightGold, marginTop: 24 }}>📅 Demo Availability Timeline</h3>
        <p><b>Demo Launch Date:</b> October 1, 2025</p>
        <ul>
          <li>Live GPT-4 Vision analysis of actual match footage</li>
          <li>Claude AI tactical intelligence with Arab League optimization</li>
          <li>Real-time formation detection and weakness identification</li>
          <li>Complete end-to-end workflow from video upload to tactical report</li>
        </ul>
        <h3 style={{ color: colors.brightGold, marginTop: 24 }}>What to Expect Before Demo Launch:</h3>
        <ul>
          <li>Weekly progress updates on platform development</li>
          <li>Beta feature previews and technical demonstrations</li>
          <li>Exclusive insights into AI tactical analysis capabilities</li>
          <li>Direct communication with our development team at Auwire Technologies</li>
        </ul>
        <h3 style={{ color: colors.brightGold, marginTop: 24 }}>🎯 Upcoming Features for Coach Demo</h3>
        <ul>
          <li><b>Instant Video Processing:</b> 5-minute analysis, frame-by-frame breakdown, formation detection, real-time weakness identification</li>
          <li><b>AI-Powered Tactical Intelligence:</b> Claude AI enhancement, counter-formation recommendations, positioning optimization, set-piece identification</li>
          <li><b>Arab League Specialization:</b> Regional pattern recognition, climate-adapted analysis, cultural style, Arabic language support</li>
          <li><b>Professional Reporting System:</b> Executive summaries, coaching instructions, player guidance, export options</li>
          <li><b>Competitive Intelligence Module:</b> Opponent prediction, weakness exploitation, counter-attack tips, defensive mapping</li>
          <li><b>Real-Time Match Preparation:</b> Quick analysis mode, formation comparison, instruction templates, substitution recommendations</li>
          <li><b>Performance Analytics Dashboard:</b> Tactical effectiveness, formation success rates, heat maps, strategic trend analysis</li>
        </ul>
        <h3 style={{ color: colors.brightGold, marginTop: 24 }}>💡 Expected Coach Feedback Areas</h3>
        <ul>
          <li><b>Tactical Analysis Accuracy:</b> Formation detection precision, actionable vulnerabilities, timing analysis</li>
          <li><b>Coaching Implementation:</b> Instruction clarity, strategic prioritization, training integration</li>
          <li><b>Arab League Optimization:</b> Regional recognition, cultural context, language accuracy</li>
          <li><b>User Experience & Workflow:</b> Analysis speed, report format, integration requirements</li>
          <li><b>Competitive Advantage Validation:</b> Strategic value, cost-benefit, replacement capability</li>
        </ul>
        <h3 style={{ color: colors.brightGold, marginTop: 24 }}>📧 Communication Schedule</h3>
        <ul>
          <li>Weekly development updates on AI integration and features</li>
          <li>Beta preview invitations for early access and feedback</li>
          <li>Launch preparation communications and training material</li>
        </ul>
        <h3 style={{ color: colors.brightGold, marginTop: 24 }}>🎮 Demo Session Expectations</h3>
        <ul>
          <li>Live analysis demonstration with actual match video upload</li>
          <li>Comprehensive tactical reports and expert Q&A</li>
          <li>Hands-on experience with all modules and reporting formats</li>
          <li>Customization discussion for team-specific needs</li>
        </ul>
        <h3 style={{ color: colors.brightGold, marginTop: 24 }}>🔧 Technical Specifications for Demo</h3>
        <ul>
          <li>Internet: Stable broadband</li>
          <li>Browser: Chrome, Firefox, Safari (latest)</li>
          <li>Video Format: MP4, AVI, MOV, MKV (up to 500MB)</li>
          <li>Match Length: Full 90-minutes or highlights</li>
        </ul>
        <p style={{ marginTop: 28, fontWeight: 600, textAlign: "center" }}>
          Prepare your match videos and questions for the demo.<br />
          <span style={{ color: colors.brightGold }}>
            We look forward to your feedback and collaboration!
          </span>
        </p>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a
            href="/"
            style={{
              display: "inline-block",
              background: colors.brightGold,
              color: colors.oxfordBlue,
              fontWeight: 700,
              fontSize: 18,
              padding: "12px 38px",
              borderRadius: 8,
              textDecoration: "none",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
