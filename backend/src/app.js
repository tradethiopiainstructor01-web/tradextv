const express = require('express');
const cors = require('cors');
const connectDB = process.env.USE_MOCK_DB ? require('./utils/db.mock') : require('./utils/db');
const platformRoutes = require('./routes/platform.routes');
const adminRoutes = require('./routes/admin.routes');
const videoRoutes = require('./routes/video.routes');
const { errorHandler } = require('./middleware/error.middleware');

const createApp = async () => {
  await connectDB();
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('TradeXTV backend placeholder');
  });

  app.use('/api/platform', platformRoutes);
  app.use('/api/admin', adminRoutes);
  app.use('/api/videos', videoRoutes);

  app.use(errorHandler);

  return app;
};

module.exports = createApp;
