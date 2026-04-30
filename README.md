# LNK Pharmacy Solutions — Marketing Website

Static website for [lnkpharm.com](https://lnkpharm.com).

## Pages

- `index.html` — Homepage (3-role CTA hub)
- `about.html` — Company story, team, principles
- `providers.html` — For independent providers & clinics
- `patients.html` — For patients
- `health-systems.html` — For health systems & ACOs
- `contact.html` — Contact form (powered by Web3Forms)

## Stack

Pure HTML + React (via Babel inline transpilation) + custom CSS. No build step. Deploys directly to Netlify.

## Deployment

Connected to Netlify — every push to `main` auto-deploys to production.

## Form submissions

Contact form submits to Web3Forms which forwards to `contactus@lnkpharm.com` (Microsoft 365 shared mailbox).

## Analytics

- Google Analytics 4 (`G-78M94RK5H6`)
- Microsoft Clarity (`wjzqqkyqda`)

## Local preview

Open any `.html` file directly in a browser (no server needed).
