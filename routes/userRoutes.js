const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const _ = require('lodash');

module.exports = app => {
  app.get('/users/find', async (req, res) => {
    const { favoriteArtists } = req.user;
    console.log(favoriteArtists);
    // Get users from database which has in his list top 2 artist
    const users = await User.find({ favoriteArtists: { "$all" : _.slice(favoriteArtists, 0, 2)} });
    res.send(users);
    // Go through this user and find the 3rd match.

    // Return list of users with 3 matches
  });
}
