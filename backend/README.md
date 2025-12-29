# TradeXTV Backend API

This is the backend API for the TradeXTV platform, deployed on Vercel as a serverless function.

## System Overview
- **Backend:** Node.js + Express with MongoDB Atlas, deployed as serverless functions on Vercel
- **API Routes:** `/api/platform`, `/api/videos`, `/api/admin`
- **Infrastructure:** Vercel serverless functions with MongoDB Atlas

## Vercel Deployment

This backend is configured for deployment on Vercel. The following configuration is already set up:

- **Build Command:** `npm install`
- **Output Directory:** `/` (root)
- **API Routes:** All routes under `/api/*` are handled by the serverless function

## Environment Variables

For Vercel deployment, set the following environment variables in your Vercel dashboard:

- `MONGO_URI`: Your MongoDB Atlas connection string
- `JWT_SECRET`: Secret for JWT token generation
- `USE_MOCK_DB`: Set to `true` to use mock database (optional)

## API Endpoints

- `GET /api/platform/overview` - Get platform configuration
- `GET /api/videos` - List videos
- `GET /api/admin/dashboard` - Admin dashboard (requires auth)

## Local Development

For local development:

1. Copy `.env.example` to `.env` and fill in your environment variables
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server

## Connecting Frontend to Backend

When deployed on Vercel, your frontend should connect to the backend API using the Vercel deployment URL:

- Frontend: Your frontend deployment URL
- Backend API: `https://your-project.vercel.app/api/`

## Project Structure

- `api/index.js`: Main serverless entry point
- `src/app.js`: Express application factory
- `src/controllers/`: API controllers
- `src/models/`: Database models
- `src/routes/`: API route definitions
- `src/utils/`: Utilities including database connection
- `src/middleware/`: Express middleware
