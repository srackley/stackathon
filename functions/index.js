const functions = require('firebase-functions');
const lib = require('./lib');

exports.helloWorld = functions.https.onRequest((request, response) =>
  response.send(lib));
