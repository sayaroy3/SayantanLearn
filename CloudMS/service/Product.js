var request = require('request');
var mysql = require('mysql');

var connection = mysql.createConnection({
         host: 'custom-mysql.gamification.svc.cluster.local',
         port     : '3306',
         user     : 'xxuser',
         password : 'welcome1',
         database : 'sampledb'
       });

var Products = {
   find: function(req, res, next) {
       //var a = 1;
       //var b= 2; 
       //console.log(connection);
       connection.connect(); 
       connection.query('SELECT * from XXIBM_PRODUCT_CATALOGUE', function (err, rows, fields) {
         if (err) throw err;
         res.send(rows);     
         //console.log('The solution is: ', rows);
       });
       
      // connection.end();
        //var jsonfyres = JSON.stringify({'distance1' : a, 'distance2' : b});
       // res.send(jsonfyres);
   }
};

module.exports = Products;
