var test = require('tape');
var getClientCredentials = require('../index');
var request = require('request');
var config = require('../config');
var assertNoError = require('assert-no-error');

test('Basic test',  basicTest);

function basicTest(t) {
  getClientCredentials(
    {
      clientId: config.spotify.clientId,
      clientSecret: config.spotify.clientSecret,
      request: request
    },
    checkCreds
  );

  function checkCreds(error, token) {
    assertNoError(t.ok, error, 'No error while getting token.');
    t.equal(typeof token, 'string', 'Token is a string.');
    t.ok(token.length > 0, 'Token is not empty.');
    console.log('Token:', token);
    t.end();
  }
}
