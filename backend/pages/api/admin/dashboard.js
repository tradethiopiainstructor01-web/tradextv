export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  // For now, return a basic response
  // In a real implementation, you'd need authentication middleware
  res.status(200).json({
    success: true,
    message: 'Admins can manage content, creators, categories, featured videos, analytics, and promotions.',
    user: null, // In a real implementation, this would come from auth middleware
  });
}

export const config = {
  api: {
    responseLimit: '8mb',
  },
};