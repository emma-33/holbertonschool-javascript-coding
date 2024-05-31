const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const hostname = 'localhost';
const port = 1245;
const database = process.argv[2];

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(database)
    .then((result) => {
      res.type('text/plain').send(`This is the list of our students\n${result.totalNumber}\n${result.CS}\n${result.SWE}`);
    })
    .catch((error) => {
      res.type('text/plain').send(error.message);
    });
});

app.listen(port, hostname, () => {});

module.exports = app;
