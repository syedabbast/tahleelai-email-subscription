const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const BASE_URL = process.env.FRONTEND_URL || "https://tahleelai.netlify.app";

/**
 * Sends a subscription confirmation email using SendGrid
 * @param {string} email - Recipient email address
 * @param {string} id - Subscriber ID or token
 * @param {string} full_name - Full name of the recipient
 */
async function sendConfirmationEmail(email, id, full_name) {
  // Generate confirmation link
  const confirmUrl = `${BASE_URL}/confirm?token=${encodeURIComponent(id)}`;

  const msg = {
    to: email,
    from: process.env.EMAIL_FROM || "connect@auwiretech.com",
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

  await sgMail.send(msg);
}

module.exports = sendConfirmationEmail;
