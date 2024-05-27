const fs = require('fs');
const parse = require('csv-parse');

function countStudents(file) {
  const data = fs.readFileSync(file);

  try {
      if (data) {
        ('Number of students:');
  }     
    } catch {
      (new Error('Cannot load the database'));
}
}
module.exports = countStudents;
