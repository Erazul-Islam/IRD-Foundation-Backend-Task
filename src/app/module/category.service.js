const db = require('../database');

const getAllCategories = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM category';
        db.all(query, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

const getAllSubCategories = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM sub_category';
        db.all(query, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

const getDua = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM dua';
        db.all(query, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};


const getCategoryById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM category WHERE id = ?';
        db.get(query, [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
};

module.exports = {
    getAllCategories,
    getCategoryById,
    getAllSubCategories,
    getDua
};
