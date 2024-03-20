const Odoo = require('odoo-xmlrpc');

const odoo = new Odoo({
    url: 'http://149.50.138.229:8069',
    db: 'proyect_sales',
    username: 'admin',
    password: '1qazxsw2#'
});

module.exports = odoo;