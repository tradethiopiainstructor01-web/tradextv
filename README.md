# TradeXTV System Blueprint

This repository captures the MERN-based TradeXTV platform, a business-focused streaming experience that teams up with the TradeEthiopia ecosystem.

## System Overview
- **Frontend:** Next.js with Tailwind/Chakra, Redux or Zustand for state, and Video.js/Shaka Player for media playback.
- **Backend:** Node.js + Express with MongoDB Atlas, REST in phase 1, GraphQL in phase 2, and media uploads via signed URLs.
- **Infrastructure:** AWS S3 or Cloudflare R2 for storage, CloudFront/Cloudflare CDN, AWS Amplify/Vercel for the frontend, and App Runner/Render for the backend.

## Project Layout
- `frontend/`: Next.js pages, components, modules, services, and shared styling.
- `backend/`: Express server plus controllers, models, routes, middleware, and utilities.
- `shared/constants/`: Platform-wide constants (roles, permissions, categories, etc.).
- `docs/`: Reference material such as architecture notes, feature lists, and launch checklists.

## Frontend Setup (Tailwind + Next)
- Tailwind CSS is already configured (`tailwind.config.js` + `postcss.config.js`) and imported through `styles/globals.css`, so every page can use the dark/premium tokens.
- Run `npm install` inside `frontend/` (pulls Next + React + Tailwind + PostCSS), then use `npm run dev` to start the UI server.

Use this README as the starting point for wiring up the MVP Media + Creator + Admin experiences.

## Backend Setup
- Copy `backend/.env.example` to `backend/.env` and fill in `MONGO_URI` with your MongoDB Atlas connection string (e.g., `mongodb+srv://user:pass@cluster/.../tradextv?retryWrites=true&w=majority`).
- For development without MongoDB installed, set `USE_MOCK_DB=true` in the `.env` file to use in-memory data.
- Run `npm install` inside `backend/` and then `npm run dev`. The app now sources `process.env.MONGO_URI` via `dotenv` and no longer attempts `localhost:27017`.

## Connecting Frontend to Backend
- Ensure the backend is running before starting the frontend
- The frontend automatically connects to the backend via the `NEXT_PUBLIC_API_URL` environment variable in `frontend/.env`
- Default configuration connects frontend on `http://localhost:3000` to backend on `http://localhost:5000/api`
