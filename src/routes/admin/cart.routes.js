const express = require('express');
const cartRoutes = express.Router();

const {
    getAllCart
} = require('../../controller/admin/cart.controller');

// GET ALL CART
cartRoutes.get('/get-All-Carts', getAllCart);

module.exports = cartRoutes;