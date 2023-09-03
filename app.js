const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.set('port', 3002);

app.get('/', (req, res) => {
   res.send('test');
});

app.listen(app.get('port'), () => {
   console.log(app.get('port'));
});
