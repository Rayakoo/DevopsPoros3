const express = require('express')
const { getFilmById, getFilmByTitle, getAllFilms } = require('../controllers/filmController')

const router = express.Router()

router.get('/title/:title', getFilmByTitle)
router.get('/id/:id', getFilmById)
router.get('/', getAllFilms)

module.exports = router
