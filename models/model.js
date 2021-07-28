const mongoose = require('../db/connections')

const SongSchema = new mongoose.Schema(
  {
    song: String,
    number: Number
  }
)

const Song = mongoose.model('Song', SongSchema)

module.exports = Song