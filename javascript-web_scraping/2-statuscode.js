#!/usr/bin/node
const request = require('request');
const urlPath = process.argv[2];
request(urlPath, function (err, response, body) {
  if (err) throw err;
  console.log('code:', response.statusCode);
});
