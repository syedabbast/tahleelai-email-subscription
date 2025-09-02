import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { colors } from "./theme";

function ConfirmPage() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("pending"); // 'pending', 'success', 'error'
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setStatus("error");
      setMessage("Invalid confirmation link.");
      return;
    }

    // Call backend to confirm subscription
    fetch(`${process.env.REACT_APP_API_URL.replace(/\/api\/subscribe$/, "")}/api/confirm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then(async (response) => {
        if (response.ok) {
          setStatus("success");
          setMessage("Your email has been confirmed! Thank you for subscribing to Tahleel.AI.");
        } else {
          const data = await response.json();
          setStatus("error");
          setMessage(data.error || "Confirmation failed. Please try again or contact support.");
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage("Network error. Please try again later.");
      });
  }, [searchParams]);

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
          maxWidth: 440,
          textAlign: "center",
        }}
      >
        <h2 style={{ color: colors.brightGold, marginBottom: 18, fontWeight: 700 }}>
          {status === "success" ? "Subscription Confirmed" : "Confirming..."}
        </h2>
        <p style={{ color: status === "error" ? "#FF4D4F" : colors.white, fontSize: 17, marginBottom: 0 }}>
          {message || (status === "pending" ? "Confirming your email..." : "")}
        </p>
        {status === "success" && (
          <div style={{ marginTop: 28 }}>
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
        )}
      </div>
    </div>
  );
}

export default ConfirmPage;
