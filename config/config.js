require('dotenv').config();

// const mysql = require('mysql');

module.exports = {
   host: process.env.MYSQL_HOST,
   user: process.env.MYSQL_USERNAME,
   password: process.env.MYSQL_PASSWORD,
   database: process.env.MYSQL_DATABASE,
};

// const connection = mysql.createConnection({
//    host: process.env.MYSQL_HOST,
//    user: process.env.MYSQL_USERNAME,
//    password: process.env.MYSQL_PASSWORD,
//    database: process.env.MYSQL_DATABASE,
// });

// connection.connect();

// connection.query('SELECT * from testTable', (error, rows, fields) => {
//    if (error) throw error;
//    console.log('test111: ', rows);
// });

// connection.end();
