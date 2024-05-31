const fs = require('fs');

function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        console.log(`Number of students: ${lines.length - 1}`);
        const fields = {};

        for (let i = 1; i < lines.length; i += 1) {
          const [name, , , field] = lines[i].split(',');
          if (field) {
            fields[field] = fields[field] || { count: 0, names: [] };
            fields[field].count += 1;
            fields[field].names.push(name);
          }
        }

        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].names.join(', ')}`);
          }
        }
      }
      resolve();
    });
  });
}
module.exports = countStudents;
