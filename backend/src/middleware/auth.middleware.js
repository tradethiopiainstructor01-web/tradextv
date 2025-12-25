const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Authentication token missing' });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'tradextv-secret');
    req.user = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

const requireAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ error: 'Admin role required' });
  }
  return next();
};

module.exports = {
  requireAuth,
  requireAdmin,
};
