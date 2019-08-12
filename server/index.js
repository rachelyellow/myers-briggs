"use strict";

require('dotenv').config();

const ENV = process.env.ENV || 'development';
const express = require('express');
const app = express();

const PORT = 5000;

const knexConfig = require("./knexfile");
const knex = require('knex')(knexConfig[ENV]);

// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.get('/', (req, res) => {
  new Promise(function(resolve, reject) {
    knex
      .select()
      .from("questions")
      .then((results) => {
        resolve(results);
    });
  }).then(values => {
    res.send(values);
  })
});



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});