const router = require('express').Router()
const Music = require('../mongo/MusicSchema')

router.get('/', async(req,res)=> {
  try {
    let music = await Music.find()
    res.json(music)
  } catch (error) {
    console.error(error.message)
    res.status(404).json({msg: `SERVER ERROR`})
  }
})

router.post('/', async (req,res)=>{
  const { artist, song, genre, year } = req.body;
  try {
    const newMusic = new Music({
      artist,
      song,
      genre,
      year
    })
    const save = await newMusic.save()
      .catch(err => {
        if (err.message.includes('duplicate key error')) {
          return res.status(400).json({msg: 'Duplicate song exists'})
        }
      })
    // const newMusic = {
    //   artist,
    //   song,
    //   genre,
    //   year
    // }
    // const save = await Music.create(newMusic);
    res.json(save)
  } catch (error) {
    console.error(error.message)
    res.status(400).json({msg: `SERVER ERROR`})
  }

})
router.delete('/:id', async (req, res) => {
  try {
    let singleMusic = await Music.findById(req.params._id)
    await singleMusic.remove()
    res.json({msg: `Deleted.`})
  } catch (error) {
    console.error(error.message)
    res.status(400).json({msg: `SERVER ERROR`})
  }
})

module.exports = router