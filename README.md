# Backend — Tahleel.AI Email Subscription

Node.js/Express API for subscription form, Supabase integration, double opt-in confirmation.

## Features

- POST `/api/subscribe`: Accepts subscription data (name, job, email, UTM, etc.).
- Stores in Supabase `email_subscribers` table.
- Sends double opt-in confirmation email (status: "pending").
- CORS enabled for Netlify frontend.
- Health check endpoint: `/api/health`.

## Setup

1. Copy `.env.example` to `.env` and fill in credentials.
2. Run:

```bash
npm install
npm start
```

## Environment Variables

- **SUPABASE_URL** — Your Supabase project URL
- **SUPABASE_KEY** — Service Role or anon key
- **FRONTEND_URL** — Netlify (or local) frontend URL
- **EMAIL_FROM, SMTP_* ** — SMTP config for confirmation emails

## Customizing

- Update `/email.js` for your SMTP provider.
- Confirmation endpoint (`/confirm?token=...`) should be handled in frontend or another API route.

---

MIT License
