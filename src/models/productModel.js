const odoo = require('../connection/connection');






class Product {
    async getAllProducts() {
        try {
            odoo.connect(function (err, value) {
                if (err) { return console.log(err); }
                console.log('Connected to Odoo server.');
                odoo.execute_kw('proyect_sales.products', 'search_read', [[]], function (err, value) {
                    if (err) { return console.log(err); }
                    console.log('Result: ', value);
                    return value;
                });
            return value
        });       
        } catch (error) {
          console.error('Error while retrieving the products.', error);
          throw error;
        }
    }
}

module.exports = Product;
