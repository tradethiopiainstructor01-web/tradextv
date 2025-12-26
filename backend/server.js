require('dotenv').config();
const createApp = require('./src/app');

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
