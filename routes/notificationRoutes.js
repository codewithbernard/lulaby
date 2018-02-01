const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const User = mongoose.model('users');


module.exports = (app, io) => {
  app.get('/api/notify/:id', requireLogin, async (req, res) => {
    // Find the user with spotifyId
    let user = await User.findOne({spotifyId: req.params.id});
    // Push the user from request to his friend requests and save to db
    user.friendRequests.push(req.user);
    let newUser = await user.save();
    // Notify user via socket to fetch for update
    io.emit(`notify ${req.params.id}`, "");
    res.send(newUser);
  });
}
