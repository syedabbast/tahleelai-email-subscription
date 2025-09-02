const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const BASE_URL = process.env.FRONTEND_URL || "https://tahleelai.netlify.app";
// Use your repo's logo for best deliverability and reliability
const LOGO_URL = "https://raw.githubusercontent.com/syedabbast/tahleelai-email-subscription/main/assets/logo.png";

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
      <!DOCTYPE html>
      <html>
        <body style="background:#f6f7fb;margin:0;padding:0;font-family:Inter,Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f7fb;">
            <tr>
              <td align="center">
                <table width="480" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;box-shadow:0 5px 20px rgba(0,0,0,0.08);margin:32px 0;">
                  <tr>
                    <td style="padding:32px 32px 16px 32px;text-align:center;">
                      <img src="${LOGO_URL}" alt="Tahleel.AI" style="height:48px;margin-bottom:16px;" />
                      <h1 style="color:#bba46f;font-size:24px;margin:0;font-weight:700;letter-spacing:2px;">Welcome to Tahleel.AI!</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 32px 0 32px;">
                      <p style="font-size:17px;color:#222;margin:0 0 16px 0;">Hi ${full_name || ""},</p>
                      <p style="font-size:16px;color:#222;margin:0 0 24px 0;">
                        Thanks for subscribing.<br>
                        Please confirm your subscription by clicking the link below:
                      </p>
                      <p style="text-align:center;margin-bottom:24px;">
                        <a href="${confirmUrl}"
                          style="background:#1740C6;color:#fff;font-weight:600;font-size:17px;padding:13px 32px;border-radius:8px;text-decoration:none;display:inline-block;">
                          Confirm Subscription
                        </a>
                      </p>
                      <p style="font-size:14px;color:#666;margin:0 0 20px 0;">
                        If you didn't request this, just ignore this email.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 32px 24px 32px;text-align:left;">
                      <img src="${LOGO_URL}" alt="Tahleel.AI" style="height:24px;vertical-align:middle;" />
                      <span style="font-size:15px;color:#888;vertical-align:middle;"> Tahleel.AI</span>
                    </td>
                  </tr>
                </table>
                <p style="font-size:12px;color:#bbb;text-align:center;margin-top:8px;">
                  &copy; 2025 Tahleel.AI &bull; All rights reserved
                </p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `
  };

  await sgMail.send(msg);
}

module.exports = sendConfirmationEmail;
