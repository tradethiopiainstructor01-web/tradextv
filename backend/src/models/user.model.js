const mongoose = require('mongoose');
const { roles } = require('../../../shared/constants/platform');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: roles.map((role) => role.name), default: 'Viewer' },
    avatarUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
