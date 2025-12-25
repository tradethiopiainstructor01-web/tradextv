const Video = require('../models/video.model');

exports.listVideos = async (req, res, next) => {
  try {
    const videos = await Video.find({}).sort({ publishDate: -1 }).limit(10);
    res.json({
      success: true,
      data: videos,
    });
  } catch (error) {
    next(error);
  }
};
