const { getAllCategories, getCategoryById } = require('./category.service');


const fetchAllCategories = async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const fetchCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await getCategoryById(id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    fetchAllCategories,
    fetchCategoryById,
};
