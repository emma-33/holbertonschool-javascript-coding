#!/usr/bin/node
const request = require('request');
const urlPath = process.argv[2];

request(urlPath, function (err, response, body) {
  if (err) throw err;
  const completedTasks = {};
  const todos = JSON.parse(body);
  for (const todo of todos) {
    if (todo.completed === true) {
      const userId = todo.userId;
      if ((completedTasks[userId]) === undefined) {
        completedTasks[userId] = 1;
      } else {
        completedTasks[userId]++;
      }
    }
  }
  console.log(completedTasks);
});
