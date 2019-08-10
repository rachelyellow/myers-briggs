"use strict";

// require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 5000;
const knexConfig = require("./knexconfig");
const knex = require('knex')(knexConfig);

app.get('/', (req, res) => {
  res.send('hello world');
});



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});