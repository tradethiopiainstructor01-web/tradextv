const serverless = require('serverless-http');
const createApp = require('../src/app');

let serverlessApp;

// Initialize the app once when this module is loaded
const initApp = async () => {
  if (!serverlessApp) {
    try {
      const app = await createApp();
      serverlessApp = serverless(app);
    } catch (error) {
      console.error('Error creating app:', error);
      throw error;
    }
  }
  return serverlessApp;
};

// Export the serverless handler
module.exports = async (req, res) => {
  try {
    const handler = await initApp();
    return handler(req, res);
  } catch (error) {
    console.error('Serverless function error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal Server Error', message: error.message }));
  }
};