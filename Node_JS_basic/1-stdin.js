const readline = require('readline');

const lineReading = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?\n');

lineReading.on('line', (input) => {
  console.log(`Your name is: ${input}`);
});

lineReading.on('close', () => {
  console.log('This important software is now closing\n');
  lineReading.close();
});
