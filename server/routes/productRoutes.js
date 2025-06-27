const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/uploads');
const { listProduct, createProduct, editProduct, deleteProduct, getProduct } = require('../controllers/productController');

router.get('/list', auth, listProduct);

router.post('/create', auth, upload.single('image'), createProduct);

router.put('/:id', auth, upload.single('image'), editProduct);

router.delete('/:id', auth, deleteProduct);

router.get('/:id', auth, getProduct);

module.exports = router;
