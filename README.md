# NSOC Estimator Landing Page

Production-ready Next.js landing page for `app.noshareofcost.com` or `estimator.noshareofcost.com`.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run start
```

## Deploy to subdomain

1. Create subdomain DNS record (e.g., `app.noshareofcost.com`) to your hosting provider.
2. Deploy this Next.js app to Vercel, Netlify, or your Node host.
3. Map the subdomain in your hosting dashboard.
4. Add SSL certificate for HTTPS.

## Updating screenshots

Replace/add screenshot files in `public/screenshots/` and update the `screenshots` array in `app/page.tsx`.

Expected filenames:
- `welcome-screen.svg`
- `household-screen.svg`
- `income-screen.svg`
- `medical-costs-screen.svg`
- `results-screen.svg`
- `review-contact-modal.svg`
