const { insertRecord, getAllRecords, getRecordById } = require('../utils/sqlFunctions');
const { v4: uuidv4 } = require("uuid");
const response = require('../response');

const createReview = async (req, res) => {
    const { 
        film_id, 
        rating, 
        comment } = req.body;
  try {
    const review = { review_id: uuidv4(), film_id, user_id: req.user.userid, comment, rating };
    const result = await insertRecord('review', review);
    response(201, result, 'Review created successfully', res);
  } catch (error) {
    console.error("Error creating review:", error);
    response(500, null, 'Internal Server Error', res);
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await getAllRecords('review');
    response(200, reviews, 'Reviews fetched successfully', res);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    response(500, null, 'Internal Server Error', res);
  }
};

const getReviewById = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await getRecordById('review', 'film_id', id);
    if (review) {
      response(200, review, 'Review fetched successfully', res);
    } else {
      response(404, null, 'Review not found', res);
    }
  } catch (error) {
    console.error("Error fetching review:", error);
    response(500, null, 'Internal Server Error', res);
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getReviewById
};
