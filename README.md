get-spotify-client-credentials
==================

Given a client id and client secret, gets client credentials from the Spotify API. Requires ES 6. Works in Node and the browser.

Installation
------------

    npm install get-spotify-client-credentials

Usage
-----

    var getClientCredentials = require('get-spotify-client-credentials');
    var request = require('request');

    getClientCredentials(
      {
        clientId: 'asdfasdfsomanycharacters',
        clientSecret: 'your big secret id from the api',
        request: request
      },
      checkCreds
    );

    function logCreds(error, token) {
      if (error) {
        console.error(error, error.stack);
      }
      else {
        console.log('Here is an access token I can use:', token);
      }

One of the opts it takes is `request`. This is an http request library like the famous [request](https://github.com/request/request), but it can be anything that [conforms to that interface](https://github.com/jimkang/spotify-resolve#plug-in-your-own-request-library), like [basic-browser-request](https://github.com/jimkang/basic-browser-request);

Tests
-----

Run tests by creating a `config.js` in the repo root dir that looks like this:

    module.exports = {
      spotify: {
        clientId: 'your client id here',
        clientSecret: 'your client secret here'
      }
    };

Then, run `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2016 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
