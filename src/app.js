const express = require('express');
const path = require('path');
const productsRoutes = require('./routes/products.routes');
const usersRoutes = require('./routes/users.routes');
const logger = require('./middlewares/logger.middleware');
const app = express();

// Middleware para parsear JSON
app.use(logger);
app.use(express.json());
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);




const productos_json = path.join(__dirname, 'productos.json');


module.exports = app;