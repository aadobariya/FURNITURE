const express = require('express');
const ReviewRoutes = express.Router();
const { adminVerifyToken }  = require('../../helpers/userVerifyToken');

const {  getAllReview ,  deleteReview } = require('../../controller/admin/review.controller');


// GET ALL REVIEW
ReviewRoutes.get('/get-all-review' , adminVerifyToken,  getAllReview);

// DELETE REVIEW
ReviewRoutes.delete('/delete-review' , adminVerifyToken , deleteReview);


module.exports = ReviewRoutes;