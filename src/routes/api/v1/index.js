const router = require('express').Router();

router.use('/users', require('./users.js'));
router.use('/ando/playing', require('./ando/playing.js'));
router.use('/ando/piece', require('./ando/piece.js'));
router.use('/matsuda/playing', require('./matsuda/playing.js'));
router.use('/hi85/playing', require('./hi85/playing.js'));

module.exports = router;
