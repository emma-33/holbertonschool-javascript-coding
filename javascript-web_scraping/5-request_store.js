#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const urlPath = process.argv[2];
const filePath = process.argv[3];

request(urlPath).pipe(fs.createWriteStream(filePath));
