import mongoose from 'mongoose';
import { connectDB } from '../../../src/utils/db';
import Video from '../../../src/models/video.model';

// Initialize database connection
let isConnected = false;

async function connectToDatabase() {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  try {
    await connectToDatabase();
    
    const videos = await Video.find({}).sort({ publishDate: -1 }).limit(10);
    
    res.status(200).json({
      success: true,
      data: videos,
    });
  } catch (error) {
    console.error('Error in videos API:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error'
    });
  }
}

export const config = {
  api: {
    responseLimit: '8mb',
  },
};