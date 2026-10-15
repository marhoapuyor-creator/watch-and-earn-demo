# Watch & Earn — Demo scaffold

What this is
- A minimal website demo for a media/gaming platform.
- Includes a homepage, video page, game page, ad placeholders, and a simple server.
- Optional Postgres persistence for view logs and a basic admin dashboard to inspect views.

Quick start
1. Copy the example env file and set a strong ADMIN_TOKEN:
   cp .env.example .env
   # edit .env and set ADMIN_TOKEN

2. Install dependencies:
   npm install

3. Start the app:
   npm start

4. Open in browser:
   - Home: http://localhost:3000/
   - Video demo: http://localhost:3000/video/sample
   - Game demo: http://localhost:3000/game/sample-game
   - Admin (UI): http://localhost:3000/admin

AdSense setup (make ads live)
- Replace the placeholder publisher ID (ca-pub-REPLACE_WITH_YOUR_ID) with your real AdSense publisher ID in the HTML files (index.html, public/video-player.html, public/game-page.html).
- Replace the data-ad-slot values with the ad unit IDs created in your AdSense account.
- Important: After inserting your real publisher ID, check AdSense policy: do not encourage clicks and ensure your content complies with AdSense content policies.

Admin API
- The admin UI calls /api/admin/views and /api/admin/clear and requires header x-admin-token set to ADMIN_TOKEN.

Enable Postgres persistence (optional)
- Set DATABASE_URL in .env to a Postgres connection string. The server will attempt to create a 'views' table automatically.

Security & compliance
- Do NOT incentivize ad clicks. Provide Privacy Policy and cookie consent for EU users.
- Production use requires HTTPS, proper CORS and session protections, and anti-fraud tooling.

Deploy
- You can deploy this Docker image to Render, Heroku, or any container host.
- Alternatively link the GitHub repo to Vercel or Render and configure environment variables.

Next steps I can take for you
- Replace placeholders with your AdSense publisher ID (if you provide it). I will not publish your ID publicly in the repo; instead I can add it in a deploy secret or create a branch with it if you confirm.
- Deploy the site to Render or Vercel and configure environment variables.
