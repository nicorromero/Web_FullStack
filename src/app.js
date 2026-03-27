const express = require('express');
const path = require('path');
const productsRoutes = require('./routes/products.routes');
const usersRoutes = require('./routes/users.routes');
const salesRoutes = require('./routes/sales.routes');
const cartsRoutes = require('./routes/carts.routes');
const logger = require('./middlewares/logger.middleware');
const app = express();

// Middleware para parsear JSON
app.use(logger);
app.use(express.json());
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/sales', salesRoutes);
app.use('/carts', cartsRoutes);


module.exports = app;