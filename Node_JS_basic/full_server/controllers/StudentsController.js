import readDatabase from '../utils';

export default class StudentsController {
   static getAllStudents(request, response, database) {
      readDatabase(database)
        .then((fields) => {
         const students = [];

         students.push('This is the list of our students');

         for (const field of Object.keys(fields)) {
            students.push(`Number of students in ${field}: ${fields[field].length
            }.List: ${fields[field].join(', ')}`);
         }
         response.send(200, `${students.join('\n')}`);
        })
        .catch((error) => {
           response.statusCode = 500;
           response.send(error.message);
        });
   }
   
   static getAllStudentsByMajor(request, response, database) {
      const major = request.params.major;

      readDatabase(database)
        .then((fields) => {
         if (fields[major]) {
            response.send(200, `List: ${fields[major].join(', ')}`);
         } else {
            response.statusCode = 500;
            response.send('Major parameter must be CS or SWE');
         }
        })
        .catch((error) => {
           response.statusCode = 500;
           response.send(error.message);
        });
   }
}
module.exports = StudentsController;
