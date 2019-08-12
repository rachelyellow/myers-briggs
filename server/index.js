"use strict";

require('dotenv').config();

const ENV = process.env.ENV || 'development';
const express = require('express');
const app = express();

const PORT = 5000;

const knexConfig = require("./knexfile");
const knex = require('knex')(knexConfig[ENV]);



app.get('/', (req, res) => {
  res.send('hello world');
});



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});