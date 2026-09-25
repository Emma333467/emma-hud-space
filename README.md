# Emma Hud Space — real chat starter

This version connects to Supabase for:
- real email/password accounts
- user profiles
- real-time messages
- online/offline profile state
- image uploads
- voice-note uploads
- stickers
- dark/light mode

## 1. Create a Supabase project
Go to https://supabase.com/ and create a project.

## 2. Create the database
Open SQL Editor in Supabase and run `schema.sql`.

## 3. Enable storage
Create a Storage bucket called `chat-media`.
For this prototype, make it public.

## 4. Enable Realtime
Enable Realtime for `public.messages`.

## 5. Add your keys
Copy `config.example.js` to `config.js`.
Put your Supabase Project URL and anon/publishable key in it.

## 6. Run it
Because ES modules are used, open it through a local web server rather than double-clicking the HTML.
For example:
  python3 -m http.server 8000

Then visit:
  http://localhost:8000

## Important
This is a functional starter, not a production WhatsApp clone. Before public launch, add:
- stronger storage security/private buckets
- profile editing and avatar uploads
- message deletion/editing
- typing indicators
- push notifications
- rate limiting/anti-spam
- better presence using Supabase Realtime Presence
- moderation/reporting
- production deployment and a custom domain
