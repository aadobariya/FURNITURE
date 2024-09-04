const express = require('express');
const cartRoutes = express.Router();

const {
    getAllCart
} = require('../../Controller/Admin/cart.controller');

// GET ALL CART
cartRoutes.get('/get-All-Carts', getAllCart);

module.exports = cartRoutes;