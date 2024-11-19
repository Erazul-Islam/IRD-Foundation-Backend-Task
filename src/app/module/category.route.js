const express = require('express');
const { fetchAllCategories, fetchCategoryById,fetchAllDua,fetchAllSubCategories } = require('./category.controller');

const router = express.Router();

router.get('/', fetchAllCategories);
router.get('/sub-categories', fetchAllSubCategories);
router.get('/dua', fetchAllDua);
router.get('/:id', fetchCategoryById);

module.exports = router;
