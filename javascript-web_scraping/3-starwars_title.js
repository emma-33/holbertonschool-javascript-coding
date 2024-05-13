#!/usr/bin/node
const request = require('request');
const epNumber = process.argv[2];
const urlPath = 'https://swapi-api.hbtn.io/api/films/' + epNumber;

request(urlPath, function (err, response, body) {
  if (err) throw err;
  const movie = JSON.parse(body);
  console.log(movie.title);
});
