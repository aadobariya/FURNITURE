const usersRoute = require('express').Router();
const userRoute = require('./user.routes');
const productRoute = require('./product.routes');
const cartRotes = require('./cart.routes');
const favoriteRoute = require('./favorite.routes');
const orderRoutes = require('./order.routes');
const reviewRoutes = require('./review.routes');



usersRoute.use('/user', userRoute);
usersRoute.use('/product', productRoute);
usersRoute.use('/cart', cartRotes);
usersRoute.use('/favorite', favoriteRoute);
usersRoute.use('/order', orderRoutes);
usersRoute.use('/review', reviewRoutes);

module.exports = usersRoute;