const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');

const app = express();

// DB Connection
require('./database/connection');

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

//ROUTES

//User
require('./routes/user')(app);


app.listen(config.port, (err) => {
    console.log(`Server started successfully on ${config.port}`);
});