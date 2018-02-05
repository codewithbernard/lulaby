const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Message = mongoose.model('messages');
const _ = require('lodash');

module.exports = (app, io) => {
  app.get('/api/message/get/:id', requireLogin, async (req, res) => {
    // Return my conversation
    let message = await Message.findOne({$or: [{ messageId: `${req.user.spotifyId}xx${req.params.id}` }, { messageId: `${req.params.id}xx${req.user.spotifyId}` }]});
    // Transform results. Change id of each message to 0 where id of message is equal to req.user.id
    let transformedMessages = _.map(message.messages, msg => {
      if (msg.id === req.user.spotifyId) {
        return {
          id: 0,
          message: msg.message
        }
      } else {
        return msg;
      }
      // return msg;
    });
    // Return array of messages
    res.send(transformedMessages);
  });

  app.put('/api/message/get/:id', requireLogin, async (req, res) => {
    // Return my conversation
    let message = await Message.findOne({$or: [{ messageId: `${req.user.spotifyId}xx${req.params.id}` }, { messageId: `${req.params.id}xx${req.user.spotifyId}` }]});
    // Add new message
    message.messages.push({
      id: req.user.spotifyId,
      message: req.body.newMessage
    });
    // Save to database
    let updatedMessage = await message.save();

    res.send(message.messages);
  });

  app.post('/api/message/:id', requireLogin, async (req, res) => {
    // Create new conversation
    let message = await new Message({
      messageId: `${req.user.spotifyId}xx${req.params.id}`,
      messages: []
    }).save();
    res.send(message);
  });

  app.get('/api/message/notify/:id', requireLogin, async (req, res) => {
    // Notify via socket user to fetch his messages
    io.emit(`notify - message ${req.params.id}`, "");
    res.send(null);
  });
}
