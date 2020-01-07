const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const routes = require('./api/routes');
routes(app);
//console.log(1);
//app.use('/product', routes);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});
