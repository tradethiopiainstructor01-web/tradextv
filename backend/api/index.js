const serverless = require('serverless-http');
const createApp = require('../src/app');

let cachedApp;

// Create the Express app
const getServer = async () => {
  if (!cachedApp) {
    try {
      cachedApp = await createApp();
    } catch (error) {
      console.error('Error creating app:', error);
      throw error;
    }
  }
  return cachedApp;
};

// Export the handler for Vercel
module.exports = async (req, res) => {
  const app = await getServer();
  const handler = serverless(app);
  return handler(req, res);
};

// For local development compatibility
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000;
  getServer().then(app => {
    app.listen(PORT, () => {
      console.log(`TradeXTV backend running on port ${PORT}`);
    });
  }).catch(error => {
    console.error('Unable to start TradeXTV backend', error);
    process.exit(1);
  });
}