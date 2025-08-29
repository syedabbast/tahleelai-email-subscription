# Tahleel.AI Email Subscription

Elite newsletter and demo signup platform for Tahleel.AI — powered by React (Netlify frontend), Node.js/Express (Render backend), and Supabase.

---

## Features

- Gold & blue "elite" theme with logo
- Modern, clean subscription form (name, job title, email, team, league, interests)
- UTM/referrer tracking (for marketing analytics)
- Double opt-in confirmation email
- Supabase database integration (see `/backend`)
- Ready for Netlify (frontend) and Render (backend) deployment

---

## Repository Structure

```
/assets/logo.png                # Brand logo
/frontend/                      # React JS frontend
/backend/                       # Node.js/Express backend API
```

---

## Getting Started

### 1. Frontend (React, Netlify)

```bash
cd frontend
npm install
npm start
```

- The form uses the elite gold & blue Tahleel.AI palette:
  - **Oxford Blue:** `#001D3D`
  - **Persian Blue:** `#0F42C3`
  - **Aztec Gold:** `#B99F5D`
  - **Bright Gold:** `#EFBF04`

#### Environment Variable

Set the backend API endpoint in `.env`:

```
REACT_APP_API_URL=https://your-backend-url.onrender.com/api/subscribe
```

### 2. Backend (Node.js/Express, Render)

```bash
cd backend
npm install
npm start
```

#### Environment Variables

Copy `.env.example` to `.env` and fill in your Supabase keys and email provider settings.

```
SUPABASE_URL=...
SUPABASE_KEY=...
EMAIL_FROM=...
EMAIL_PROVIDER_API_KEY=...
```

---

## Deployment

- **Frontend:** Push `/frontend` to Netlify for instant deployment.
- **Backend:** Deploy `/backend` to Render with the correct environment variables.

---

## Supabase Schema

See the repository or [schema section](#) for the full SQL definition used for newsletter, demo, and analytics.

---

## License

MIT
