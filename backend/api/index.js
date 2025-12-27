const serverless = require('serverless-http');
const createApp = require('../src/app');

// Initialize the app once when this module is loaded
let appPromise = null;

// Create the app once and reuse it
if (!appPromise) {
  appPromise = createApp().catch(error => {
    console.error('Error creating app:', error);
    throw error;
  });
}

// Export the serverless handler
module.exports = async (req, res) => {
  try {
    const app = await appPromise;
    const handler = serverless(app);
    return handler(req, res);
  } catch (error) {
    console.error('Serverless function error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};