const path = require('path')
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.join(__dirname, '../../dua.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to SQLite database');
    }
});

module.exports = db;
