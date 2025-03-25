const {getAllRecords, getRecordById } = require('../utils/sqlFunctions')
const response = require('../response')

const getFilmByTitle = async (req, res) => {
  try {
    const { title } = req.params
    const film = await getRecordById('film', 'title', title)
    if (film) {
      response(200, film, 'Film retrieved successfully', res)
    } else {
      response(404, null, 'Film not found', res)
    }
  } catch (error) {
    response(500, null, 'Error retrieving film', res)
  }
}

const getFilmById = async (req, res) => {
  try {
    const { id } = req.params
    const film = await getRecordById('film', 'id', id)
    if (film) {
      response(200, film, 'Film retrieved successfully', res)
    } else {
      response(404, null, 'Film not found', res)
    }
  } catch (error) {
    response(500, null, 'Error retrieving film', res)
  }
}

const getAllFilms = async (req, res) => {
  try {
    const films = await getAllRecords('film')
    response(200, films, 'All films retrieved successfully', res)
  } catch (error) {
    response(500, null, 'Error retrieving films', res)
  }
}

module.exports = {
  getFilmById,
  getFilmByTitle,
  getAllFilms,
}
