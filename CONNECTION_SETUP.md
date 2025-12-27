# Frontend to Backend Connection Setup

This document explains how to connect the frontend to the backend for the TradeXTV application.

## Setup Process

### 1. Backend Configuration
- The backend runs on port 5000 (changed from default 4000 to avoid conflicts)
- Environment variables are configured in `backend/.env`
- For development without MongoDB, the `USE_MOCK_DB=true` flag enables in-memory data

### 2. Frontend Configuration
- The frontend runs on port 3000
- API calls are directed to `http://localhost:5000/api` via the `NEXT_PUBLIC_API_URL` environment variable
- Frontend environment variables are configured in `frontend/.env`

### 3. API Endpoints
- Platform overview: `GET /api/platform/overview`
- Video routes: `GET /api/videos/*`
- Admin routes: `GET /api/admin/*`

### 4. Running the Application
1. Start the backend: `cd backend && node server.js`
2. Start the frontend: `cd frontend && npm run dev`
3. Access the application at: `http://localhost:3000`

## Troubleshooting

### Port Conflicts
- If port 5000 is already in use, change the PORT variable in `backend/.env`
- If port 3000 is already in use, Next.js will automatically find an available port

### Database Issues
- For development without MongoDB installed, ensure `USE_MOCK_DB=true` in `backend/.env`
- For production, set up a MongoDB Atlas connection string in `MONGO_URI`

### API Connection Issues
- Verify that the backend is running before starting the frontend
- Check that the `NEXT_PUBLIC_API_URL` in `frontend/.env` matches the backend URL