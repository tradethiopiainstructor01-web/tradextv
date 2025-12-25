const mongoose = require('mongoose');
const { categories } = require('../../../shared/constants/platform');

const videoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, enum: categories.map((category) => category.title), required: true },
    creatorId: { type: mongoose.Types.ObjectId, ref: 'User' },
    publishDate: { type: Date, default: Date.now },
    duration: { type: Number, description: 'Length in seconds' },
    isFeatured: { type: Boolean, default: false },
    watchProgress: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Video', videoSchema);
