const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use((req, res) => {
  return res.send('That is the wrong route.');
});

module.exports = router;