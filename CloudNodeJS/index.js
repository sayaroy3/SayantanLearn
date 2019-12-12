'use strict'
const express = require('express');
const app = express();
var request = require('request');
var fs = require('fs');

app.get('/', function(req, res) {
    request({
        url: 'https://gateway-lon.watsonplatform.net/speech-to-text/api//v1/recognize',
        method: 'POST',
        headers: {
          'content-type' : 'audio/flac',
          'Transfer-Encoding': 'chunked'
        },
        auth: {
            'user': 'apikey',
            'pass': 'fofYHLPM6a4cu76ayr1AwKwqwrGHOsj9BYMYVU9shsrx'
        },
        encoding: null,
        body: fs.createReadStream('audio-file.flac')
       }, (error, response, body) => {
            if (error) {
               console.log(error);
            } else {
                res.send(JSON.parse(response.body));
            }
       });
})

app.listen(3000, () => console.log("Server Up and Running"));