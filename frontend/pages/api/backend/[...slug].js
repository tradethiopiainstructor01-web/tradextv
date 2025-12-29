export default async function handler(req, res) {
  // Get the path from the URL
  const { slug } = req.query;
  const path = Array.isArray(slug) ? slug.join('/') : slug;
  
  // Construct the backend URL
  // In production, we need to point to the deployed backend service
  // In development, we can use localhost
  let backendUrl;
  if (process.env.NODE_ENV === 'production') {
    // For production, you must set BACKEND_URL in Vercel environment variables
    backendUrl = process.env.BACKEND_URL;
    if (!backendUrl) {
      console.error('BACKEND_URL environment variable is not set in production');
      return res.status(500).json({ error: 'Server configuration error: BACKEND_URL not set' });
    }
  } else {
    // For local development
    backendUrl = process.env.BACKEND_URL || 'http://localhost:4000';
  }
  
  const url = `${backendUrl}/${path}`;
  
  try {
    // Forward the request to the backend
    const response = await fetch(url, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        // Exclude headers that shouldn't be forwarded
        ...Object.fromEntries(
          Object.entries(req.headers).filter(([key]) => 
            !['host', 'content-length'].includes(key.toLowerCase())
          )
        ),
      },
      body: req.body ? JSON.stringify(req.body) : undefined,
    });
    
    // Set response headers
    res.status(response.status);
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'transfer-encoding' && key.toLowerCase() !== 'content-encoding') {
        res.setHeader(key, value);
      }
    });
    
    // Send the response body
    const data = await response.text();
    res.send(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy error', details: error.message });
  }
}

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};