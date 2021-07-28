const express = require('express')
const router = express.Router()

const Song = require('../models/model.js')

// Home Route 
router.get('/', (req, res) => {
  Song.find({})
  .then(s => res.json(s))
})

// Create
router.post('/', (req, res) => {
  let song = req.body.song
  let number = req.body.number
  Song.create({
    song, number
  })
  .then((s) => res.json(s))
  .catch(console.error)
})

// Update 
router.put('/', (req, res) => {
  let id = req.body._id
  let song = req.body.song
  let number = req.body.number
  Song.findOneAndUpdate(
    {_id: id},
    {
      song, number
    }, 
    {new: true}
  )
  .then((s) => res.json(s))
})

// Delete 
router.delete('/', (req, res) => {
  const id = req.body._id
  Song.findOneAndRemove({_id: id})
  .then((s) => res.json(s))
  .catch(console.error)
})

module.exports = router