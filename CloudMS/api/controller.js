'use strict';

var properties = require('../package.json');
var products = require('../service/Product');
console.log(4);
var controllers = {
   getProducts: function(req, res) {
    products.find(req, res, function(err, productlist) {
               if (err)
                   res.send(err);
               res.json(productlist);
           });
       },
};

module.exports = controllers;
