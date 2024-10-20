const express = require('express');
const { getAllProducts, getParticularProduct, postProducts, updateProduct } = require('../controller/productController');

const router = express.Router();

router.get('/products', getAllProducts);

router.get('/products/:id', getParticularProduct)

router.post('/products', postProducts)

router.put('/products/:id',updateProduct)

module.exports = router;
