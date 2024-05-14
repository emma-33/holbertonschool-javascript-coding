#!/usr/bin/node
const request = require('request');
const urlPath = process.argv[2];

request(urlPath, function (err, response, body) {
  if (err) throw err;
  let count = 0;
  const movies = JSON.parse(body).results;
  for (const movie of movies) {
    for (const character of movie.characters) {
      if (character.includes('18')) {
        count++;
      }
    }
  }
  console.log(count);
});
