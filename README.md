# Contact form email

The contact form sends messages through Brevo's transactional email API. Copy
`.env.example` to `.env.local`, set `BREVO_API_KEY` to your Brevo API key, and
configure `BREVO_SENDER_EMAIL` as a sender verified in Brevo. `SUPPORT_EMAIL`
is the inbox that receives submissions and defaults to `contact@mooreskillup.com`.
