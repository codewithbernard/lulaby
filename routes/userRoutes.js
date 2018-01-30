const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const _ = require('lodash');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.get('/api/users', requireLogin, async (req, res) => {
    let databaseMatchCount = 2;
    let totalMatchCount = 3;

    const { favoriteArtists } = req.user;
    // Get users from database which has in his list top 2 artist
    const users = await User.find({spotifyId: { $ne: req.user.spotifyId }, favoriteArtists: { "$all" : _.slice(favoriteArtists, 0, databaseMatchCount)} });

    // Go through this users and find the 3rd match.
    const matchedUsers = _.filter(users, user => {
      return _.intersection(favoriteArtists, user.favoriteArtists).length >= totalMatchCount;
    });

    // Return list of users with 3 matches
    res.send(matchedUsers);
  });

  app.put('/api/users', requireLogin, async (req, res) => {
    User.findOneAndUpdate({spotifyId: req.user.spotifyId}, req.body, (err, updatedUser) => {
      if (err) return res.send(500, { error: err });
      return res.send(updatedUser);
    });
  });
}
