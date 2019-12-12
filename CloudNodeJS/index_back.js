//const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
//const { IamAuthenticator } = require('ibm-watson/auth');
const express = require('express');
const app = express();

//const speechToText = new SpeechToTextV1({
 // authenticator: new IamAuthenticator({
   // apikey: 'MFtrQGFj3dX5gnijS64hFW4TiUnzOxNc1BBdBHPHg9F2',
  //}),
  //url: 'https://stream.watsonplatform.net/speech-to-text/api',
//});

//console.log(speechToText);

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'mysql.database-check.svc.cluster.local',
  port     : '3306',
  user     : 'xxuser',
  password : 'welcome1',
  database : 'sampledb'
});

connection.connect();

connection.query('SELECT * from XXIBM_PRODUCT_CATALOGUE', function (err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();

app.listen(3000, () => console.log("Server Up and Running"));
