// here our req is a ajax call 

const express = require('express');
const { getProducts, getProduct } = require('../controllers/productController');

const router = express.Router();


 
router.get("/products" , getProducts); 
       
/*
another way is :  router.route('/products').get(getProducts);

*/


router.get("/products/:id", getProduct);






module.exports = router;

