const keys = require('../config/keys');
const SpotifyStrategy = require('passport-spotify').Strategy;
const passport = require('passport');
const mongoose = require('mongoose');
const axios = require('axios');
const _ = require('lodash');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(new SpotifyStrategy({
    clientID: keys.spotifyClientId,
    clientSecret: keys.spotifyClientSecret,
    callbackURL: "http://localhost:5000/auth/spotify/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ spotifyId: profile.id });
    if (existingUser) {
      return done(null, existingUser);
    }

    const response = await axios.get(
      'https://api.spotify.com/v1/me/top/artists?limit=5',
      {
        headers: { Authorization: `Bearer ${accessToken}`}
      }
    );
    const topArtists = _.map(response.data.items, item => item.name);
    const savedUser = await new User({ spotifyId: profile.id, favoriteArtists: topArtists }).save();
    done(null, savedUser);
  }
));
