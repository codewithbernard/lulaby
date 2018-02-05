const mongoose = require('mongoose');
const { Schema } = mongoose;

// No need to export mongoose code. Mongoose can be confused when trying
// to create multiple models with same name
const messageSchema = new Schema({
  messageId: String,
  messages: []
});

mongoose.model('messages', messageSchema);
