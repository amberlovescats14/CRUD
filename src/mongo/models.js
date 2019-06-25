const mongoose = require('mongoose')
const { Music } = require('./schemas')

const MusicModel = mongoose.model('Music', Music)

module.exports = {
  MusicModel
}