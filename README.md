# IoT Club Website - Deployment & API Instructions

## Prerequisites
- Node.js 18.17+ or later
- npm (or yarn/pnpm)

## API Connection (Environment Variables)

This project uses Web3Forms for contact form submissions. 
You need to set up an access key to receive emails from the contact form:

1. Go to [Web3Forms](https://web3forms.com/)
2. Get a free access key for your email address.
3. Rename `.env.example` to `.env.local` (for local development) or configure this environment variable in your deployment platform (Vercel/Cloudflare/etc.).
4. Add your key:
   `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY="YOUR_ACCESS_KEY_HERE"`

## Deployment Instructions

### Option 1: Vercel (Recommended)
1. Push the code to a GitHub repository.
2. Go to Vercel and import the repository.
3. Add the `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to the Environment Variables section in Vercel settings.
4. Click "Deploy". Next.js is automatically configured for Vercel.

### Option 2: Cloudflare Pages
1. Push the code to a GitHub repository.
2. In Cloudflare Dashboard, go to "Workers & Pages" -> "Create application" -> "Pages" -> "Connect to Git".
3. Select the repository.
4. Set the build command to `npm run build` or `npx @cloudflare/next-on-pages@1`.
5. Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to the environment variables.
6. Click "Save and Deploy".
*Note: A `wrangler.jsonc` file is included for Cloudflare configuration if needed.*

### Option 3: Manual / Custom Server (VPS / EC2)
1. Install dependencies: `npm install`
2. Build the app: `npm run build`
3. Start the production server: `npm run start`
4. The app will run on port 3000 by default. Ensure your environment variables are passed to the start script (e.g. using a `.env` file or PM2).
