const fs = require('fs');

function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }

      const lines = data.split('\n').filter(Boolean).slice(1).map((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        return {
          firstname, lastname, age, field,
        };
      });

      const fields = {
        CS: [],
        SWE: [],
      };

      lines.forEach((student) => {
        if (fields[student.field]) {
          fields[student.field].push(student.firstname);
        }
      });

      console.log(`Number of students: ${lines.length}`);
      console.log(`Number of students in CS: ${fields.CS.length || 0}. List: ${fields.CS.join(', ')}`);
      console.log(`Number of students in SWE: ${fields.SWE.length || 0}. List: ${fields.SWE.join(', ')}`);

      const result = {
        totalNumber: `Number of students: ${lines.length}`,
        CS: `Number of students in CS: ${fields.CS.length || 0}. List: ${fields.CS.join(', ')}`,
        SWE: `Number of students in SWE: ${fields.SWE.length || 0}. List: ${fields.SWE.join(', ')}`,
      };
      resolve(result);
    });
  });
}
module.exports = countStudents;
