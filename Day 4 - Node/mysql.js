//install mysql2 package before running this code
//npm install mysql2
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword', //change to your mysql password
  database: 'testdb' //change to your database name
});
connection.connect();

connection.query('SELECT * FROM employees', (err, results) => {
  if (err) throw err;
  console.log(results); //return this as API response later
});
connection.end();
//once this works, add express to the code, and return the results 
// as API response.

