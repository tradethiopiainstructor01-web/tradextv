import { categories, featurePillars, programs, roles } from '../../../../shared/constants/platform';

export default async function handler(req, res) {
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

  try {
    res.status(200).json({
      success: true,
      data: {
        categories,
        featurePillars,
        programs,
        roles,
      },
    });
  } catch (error) {
    console.error('Error in platform overview API:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error'
    });
  }
}