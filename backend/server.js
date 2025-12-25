require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./src/utils/db');
const platformRoutes = require('./src/routes/platform.routes');
const adminRoutes = require('./src/routes/admin.routes');
const videoRoutes = require('./src/routes/video.routes');
const { errorHandler } = require('./src/middleware/error.middleware');

const PORT = process.env.PORT || 4000;

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('TradeXTV backend placeholder');
});

app.use('/api/platform', platformRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/videos', videoRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`TradeXTV backend running on port ${PORT}`);
});
