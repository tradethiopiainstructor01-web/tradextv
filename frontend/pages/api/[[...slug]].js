export default async function handler(req, res) {
  // Get the path from the URL
  const { slug } = req.query;
  const path = Array.isArray(slug) ? slug.join('/') : slug;
  
  // Construct the backend URL
  const backendUrl = process.env.BACKEND_URL || 'http://localhost:4000';
  const url = `${backendUrl}/${path}`;
  
  try {
    // Forward the request to the backend
    const response = await fetch(url, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...req.headers,
      },
      body: req.body ? JSON.stringify(req.body) : undefined,
    });
    
    // Set response headers
    res.status(response.status);
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'transfer-encoding') {
        res.setHeader(key, value);
      }
    });
    
    // Send the response body
    const data = await response.text();
    res.send(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy error' });
  }
}

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};