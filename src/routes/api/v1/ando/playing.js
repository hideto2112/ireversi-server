const router = require('express').Router();

const PlayingModel = require('../../../../models/ando/PlayingModel.js');

router.route('/')
  .post((req, res) => {
    // res.json({
    //     x: 0,
    //     y: 0,
    //     userId: 1,
    // });
    const Playing = new PlayingModel({
        x: req.body.x,
        y: req.body.y,
        userId: req.body.userId,
    });
    Playing.save();
    res.json(Playing);
});

module.exports = router;