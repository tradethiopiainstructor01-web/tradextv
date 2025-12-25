const router = require('express').Router();
const { getLandingOverview } = require('../controllers/platform.controller');

router.get('/overview', getLandingOverview);

module.exports = router;
