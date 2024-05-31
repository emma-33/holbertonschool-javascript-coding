const fs = require('fs');

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }

      const lines = data.split('\n').filter(Boolean).slice(1).map((line) => {
        const [id, name, age, subject] = line.split(',');
        return {
          id, name, age, subject,
        };
      });

      const fields = {};
      lines.forEach((student) => {
        if (fields[student.subject]) {
          fields[student.subject].push(student.name);
        } else {
          fields[student.subject] = [student.name];
        }
      });

      console.log(`Number of students: ${lines.length}`);
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }

      const result = {
        total: `Number of students: ${lines.length}`,
        fields,
      };
      resolve(result);
    });
  });
}
