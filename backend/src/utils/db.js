const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  // For serverless functions, we should avoid persistent connections
  // However, we can still try to reuse connection if available
  if (isConnected && mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/tradextv';
  try {
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // For serverless, reduce connection pool size
      maxPoolSize: 5,
      serverSelectionTimeoutMS: 5000,
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0, // Disable mongoose buffering
    });
    isConnected = true;
    console.log('MongoDB connected');
    return connection;
  } catch (error) {
    console.error('MongoDB connection failed', error);
    throw error;
  }
};

module.exports = connectDB;