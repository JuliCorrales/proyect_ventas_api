const odoo = require('../connection/connection');

class Order {
    // listar productos
    getClient(req, res) {
        odoo.connect(function (err) {
            if (err) { 
                return res.json({ error: 'Error al conectar con el servidor Odoo' });
            }
            odoo.execute_kw('proyect_sales.products', 'search_read', [[]], function (err, value) {
            if (err) { 
                return res.json({ error: 'Error al ejecutar la búsqueda en Odoo' });
            }
            return res.status(200).send(value)
            });
        });
      }
    }


module.exports = Product;