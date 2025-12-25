const router = require('express').Router();
const { requireAuth, requireAdmin } = require('../middleware/auth.middleware');
const { getDashboard } = require('../controllers/admin.controller');

router.get('/dashboard', requireAuth, requireAdmin, getDashboard);

module.exports = router;
