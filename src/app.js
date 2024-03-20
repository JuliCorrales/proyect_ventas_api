const express = require('express');
const app = express();
const odoo = require('./connection/connection');
const router = require('./routes/products')

app.get('/', function (req, res) {
    res.send('hello world')
  })

app.get('/try-odoo-connection', (req, res) => {
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        console.log('Connected to Odoo server.');    
    });
})

app.use('/api', router)



app.listen(3000);
console.log('Listen in port 3000');

module.exports = app;

