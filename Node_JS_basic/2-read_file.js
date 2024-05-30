const fs = require('fs');

function countStudents(file) {
  try {
    const data = fs.readFileSync(file, 'utf-8');
    const lines = data.toString().split('\n');

    console.log(`Number of students: ${lines.length - 1}`);

    const fields = {};

    for (let i = 1; i < lines.length; i += 1) {
      const [name, , , field] = lines[i].split(',');

      if (field) {
        fields[field] = fields[field] || { count: 0, names: []};
        fields[field].count += 1;
        fields[field].names.push(name);
      }
    }

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].names.join(', ')}`);
      }
    }
  } catch {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
