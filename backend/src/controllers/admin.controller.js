exports.getDashboard = (req, res) => {
  res.json({
    success: true,
    message: 'Admins can manage content, creators, categories, featured videos, analytics, and promotions.',
    user: req.user || null,
  });
};
