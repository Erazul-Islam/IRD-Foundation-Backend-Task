const express = require('express');
const cors = require('cors');
const categoriesRoute = require('./module/category.route');

const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());

app.use('/api/categories', categoriesRoute);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
