const express = require('express');
const router = express.Router();
const { createReview, getAllReviews, getReviewById } = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/reviews', authMiddleware, createReview);
router.get('/reviews', authMiddleware, getAllReviews);
router.get('/reviews/:id', authMiddleware, getReviewById);

module.exports = router;
