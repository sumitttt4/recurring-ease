# RecurringEase

Fast, modern scheduling for coaches who sell session packages. Collect payments up-front, let clients book all sessions in one flow, and sync everything to your calendar.

- **Live site**: https://recurring-ease.vercel.app/

## Features
- Multi-session package booking in a single flow
- Waitlist collection with welcome email via Supabase Edge Functions
- Pricing and features pages with clear CTAs
- Responsive UI with Tailwind + shadcn/ui

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui + Radix
- Supabase (Auth, DB, Edge Functions)

## Getting Started
1. Install deps:
   ```bash
   bun install # or npm i / pnpm i / yarn
   ```
2. Create `.env` from `.env.example` and fill values:
   ```bash
   cp .env.example .env
   # set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
   ```
3. Run dev server:
   ```bash
   bun run dev # or npm run dev
   ```

## Deployment
- Deploy the frontend to Vercel/Netlify. Configure env vars:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
- Deploy Supabase Edge Functions (e.g., `send-welcome-email`) with `RESEND_API_KEY` set in the Supabase project.

## SEO/Analytics
- Basic SEO meta, Open Graph/Twitter tags
- `robots.txt` and `sitemap.xml`
- Add analytics by setting optional envs in `.env.example`

## Legal & Contact
- `/privacy`, `/terms`, `/contact`

## Scripts
- `dev`, `build`, `preview`, `lint`

