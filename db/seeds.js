const mongoose = require('./connections')

const Song = require('../models/model')
const data = require('./seeds.json')

Song.deleteMany({})
.then(() => {
  return Song.insertMany(data)
})
.then(console.log)
.catch(console.error)
.finally(() => {
  process.exit()
})