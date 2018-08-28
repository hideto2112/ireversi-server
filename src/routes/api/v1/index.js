const router = require('express').Router();

router.use('/users', require('./users.js'));
router.use('/ando/playing', require('./ando/playing.js'));

module.exports = router;
