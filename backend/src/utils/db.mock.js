// Mock database connection for development without MongoDB
const connectDB = async () => {
  console.log('Mock MongoDB connected - using in-memory data');
  // Return a mock connection object
  return {
    connection: {
      readyState: 1,
      close: () => Promise.resolve(),
      on: () => {},
      once: () => {}
    }
  };
};

module.exports = connectDB;