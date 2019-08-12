"use strict";

require('dotenv').config();

const ENV = process.env.ENV || 'development';
const express = require('express');
const app = express();

const PORT = 5000;

const knexConfig = require("./knexfile");
const knex = require('knex')(knexConfig[ENV]);


app.get('/', (req, res) => {
  new Promise(function(resolve, reject) {
    knex
      .select()
      .from("questions")
      .then((results) => {
        resolve(results);
    });
  }).then(function(values) {
    res.send(values);
  })
});



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});