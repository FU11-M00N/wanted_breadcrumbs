const express = require('express');
const morgan = require('morgan');

const mysql = require('mysql');
const dbconfig = require('./config/config.js');
const connection = mysql.createConnection(dbconfig);

const pagesRouter = require('./routes/pages');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.set('port', 3002);

app.get('/', (req, res) => {
   connection.query('SELECT * from testTable', (error, rows, fields) => {
      if (error) throw error;
      res.send(rows);
   });
});

app.use('/api', pagesRouter);

app.listen(app.get('port'), () => {
   console.log(app.get('port'));
});
