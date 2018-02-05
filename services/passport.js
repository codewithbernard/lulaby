const keys = require('../config/keys');
const SpotifyStrategy = require('passport-spotify').Strategy;
const passport = require('passport');
const mongoose = require('mongoose');
const spotify = require('./spotify');

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
    callbackURL: "/auth/spotify/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ spotifyId: profile.id });
    if (existingUser) {
      return done(null, existingUser);
    }

    const favoriteArtists = await spotify.getFavoriteArtists(accessToken);
    const savedUser = await new User({ country: profile.country, spotifyId: profile.id, favoriteArtists }).save();
    done(null, savedUser);
  }
));
