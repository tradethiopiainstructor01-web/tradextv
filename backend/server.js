require('dotenv').config();
const serverless = require('serverless-http');
const createApp = require('./src/app');

// For Vercel deployment
if (process.env.VERCEL) {
  // Export for Vercel serverless function
  createApp().then(app => {
    module.exports = serverless(app);
  }).catch(error => {
    console.error('Failed to create app for Vercel:', error);
  });
} else {
  // Regular server startup for local development
  const PORT = process.env.PORT || 4000;
  
  createApp()
    .then((app) => {
      app.listen(PORT, () => {
        console.log(`TradeXTV backend running on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.error('Unable to start TradeXTV backend', error);
      process.exit(1);
    });
}
