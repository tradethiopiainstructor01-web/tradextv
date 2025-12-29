// This is a fallback API route for Vercel
export default function handler(req, res) {
  res.status(200).json({ 
    message: 'TradeXTV backend is running', 
    endpoints: {
      platform: '/api/platform/overview',
      videos: '/api/videos',
      admin: '/api/admin/dashboard'
    }
  });
}