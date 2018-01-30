const passport = require('passport');

module.exports = app => {
  app.get('/auth/spotify', passport.authenticate(
    'spotify',
    {scope: ['user-read-email', 'user-read-private', 'user-top-read']}
  ));

  app.get('/auth/spotify/callback', passport.authenticate('spotify'), (req, res) => {
    res.redirect('/auth/currentUser');
  });

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/auth/currentUser', (req, res) => {
    res.send({
      spotifyId: req.user.spotifyId
    });
  })
}
