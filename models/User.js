const mongoose = require('mongoose');
const { Schema } = mongoose;

// No need to export mongoose code. Mongoose can be confused when trying
// to create multiple models with same name
const userSchema = new Schema({
  country: String,
  spotifyId: String,
  favoriteArtists: [String],
  about: String,
  age: Number
});

mongoose.model('users', userSchema);
