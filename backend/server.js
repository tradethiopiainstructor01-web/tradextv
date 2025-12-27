require('dotenv').config();
const serverless = require('serverless-http');
const createApp = require('./src/app');

// Create the Express app
createApp()
  .then((app) => {
    // Export the app for Vercel serverless functions
    module.exports = serverless(app);
    
    // Also start the server normally for local development
    if (!process.env.VERCEL_ENV) {
      const PORT = process.env.PORT || 4000;
      app.listen(PORT, () => {
        console.log(`TradeXTV backend running on port ${PORT}`);
      });
    }
  })
  .catch((error) => {
    console.error('Unable to start TradeXTV backend', error);
    process.exit(1);
  });
