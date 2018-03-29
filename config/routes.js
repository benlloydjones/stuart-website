const router = require('express').Router();

const youTube = require('../controllers/youTube');

router.route('/youTube/search/:page')
  .get(youTube.search);

router.route('/youTube/video/:id')
  .get(youTube.video);

module.exports = router;
