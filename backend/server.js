require('dotenv').config();
const createApp = require('./src/app');

// For Vercel serverless functions
if (process.env.NODE_ENV === 'production') {
  // Export handler for Vercel serverless functions
  createApp().then(app => {
    module.exports = require('serverless-http')(app);
  }).catch(error => {
    console.error('Failed to create app:', error);
    throw error;
  });
} else {
  // For local development
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