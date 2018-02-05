const rp = require('request-promise');

function search(req, res, next) {
  rp({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    json: true,
    qs: {
      key: process.env.STUART_SITE_GOOGLE_KEY,
      channelId: 'UC7u-Dg0jb7g9s7XjmtJrtpg',
      part: 'snippet',
      type: 'video'
    }
  })
    .then(videos => res.json(videos))
    .catch(next);
}

function video(req, res, next) {
  rp({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    method: 'GET',
    json: true,
    qs: {
      key: process.env.STUART_SITE_GOOGLE_KEY,
      part: 'player,snippet',
      id: req.params.id
    }
  })
    .then(video => res.json(video))
    .catch(next);
}

module.exports = {
  search,
  video
};
