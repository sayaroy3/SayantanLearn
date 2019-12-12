'use strict';

const controller = require('./controller');

module.exports = function(app) {
   app.route('/products')
       .get(controller.getProducts);
};