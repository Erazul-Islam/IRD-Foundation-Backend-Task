const express = require('express');
const { fetchAllCategories, fetchCategoryById } = require('./category.controller');

const router = express.Router();


router.get('/', fetchAllCategories);

router.get('/:id', fetchCategoryById);

module.exports = router;
