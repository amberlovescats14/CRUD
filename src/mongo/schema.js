const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Music = new Schema({
  artist: String,
  song: String,
  year: Number,
  genre: String
})

module.exports = { Music }