    const express = require('express');
    const ReviewRoutes = express.Router();
    const {userVerifyToken} = require('../../helpers/userVerifyToken');

    const { addReview, getAllReview ,  deleteReview } = require('../../controller/user/review.controller');

    // ADD REVIEW
    ReviewRoutes.post('/add-New-Review' , userVerifyToken,  addReview); 

    // GET ALL REVIEW
    ReviewRoutes.get('/get-All-Review' , userVerifyToken,  getAllReview);

    // DELETE REVIEW
    ReviewRoutes.delete('/delete-Review' , userVerifyToken , deleteReview);


    module.exports = ReviewRoutes;