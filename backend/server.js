const express = require('express');
const app = express();

// env
require("dotenv").config();

// Routes
const routes = require('./routes/index');

const port = process.env.PORT;
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// routes
app.use('/api/v1/', routes);


app.listen(port, () => {
    console.log(`Listen on port: ${port}`);
});