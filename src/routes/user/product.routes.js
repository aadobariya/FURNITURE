const express = require('express');
const productRoute = express.Router();
const { userVerifyToken } = require('../../helpers/userVerifyToken');

const{ 
    getAllProducts,
    getProduct
}=require('../../controller/user/product.controller');

// GET ALL PRODUCT
productRoute.get('/get-All-Product', userVerifyToken, getAllProducts);

// GET SPECIFIC PRODUCT
productRoute.get('/get-Product', userVerifyToken, getProduct);

module.exports = productRoute;