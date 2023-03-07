const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const colors = require('colors');
const { errorHandler } = require('./helpers/errorHandler');
const port = process.env.PORT || 3000;


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.use('/api/v1', async (req, res, next) => {
    res.status(200).json({
        message: 'Welcome to the API'
    })
});

app.use('/api/v1', async (req, res, next) => {
    res.status(200).json({
        message: 'Welcome to the API'
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`.yellow.bold);

})
