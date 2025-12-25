const { categories, featurePillars, programs, roles } = require('../../../shared/constants/platform');

exports.getLandingOverview = (req, res) => {
  res.json({
    success: true,
    data: {
      categories,
      featurePillars,
      programs,
      roles,
    },
  });
};
