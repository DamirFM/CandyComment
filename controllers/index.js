const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// Client APIs
router.use('/', homeRoutes);
// Server side API
router.use('/api', apiRoutes);

module.exports = router;
