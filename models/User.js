const mongoose = require('mongoose');
const { Schema } = mongoose;

// No need to export mongoose code. Mongoose can be confused when trying
// to create multiple models with same name
const userSchema = new Schema({
  country: String,
  spotifyId: String,
  favoriteArtists: [String],
  about: String,
  age: Number,
  image: {type: String, default: "http://res.cloudinary.com/dypjti8qj/image/upload/v1517404949/bjyxh2fzcp58kbufm8rb.png"},
  friendRequests: [],
  friends: []
});

mongoose.model('users', userSchema);
