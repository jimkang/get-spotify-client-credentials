/* global Buffer */

function getClientCredentials({clientId, clientSecret, request}, done) {
  var reqOpts = {
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    form: {
      grant_type: 'client_credentials'
    },
    headers: {
      Authorization: 'Basic ' + encodeInBase64(clientId + ':' + clientSecret)
    },
    json: true
  };
  request(reqOpts, passToken);

  function passToken(error, response, body) {
    if (error) {
      done(error);
    }
    else if (response.statusCode < 200 || response.statusCode > 299) {
      done(new Error('Error ' + response.statusCode + ' from Spotify API'));
    }
    else if (body && body.error) {
      done(new Error(body.error + ' ' + body.error_description + ' from Spotify API'));
    }
    else if (!body) {
      done(new Error('No token returned by Spotify API.'));
    }
    else {
      done(null, body.access_token);
    }
  }
}

function encodeInBase64(s) {
  if (typeof window === 'object' && window.btoa) {
    return window.btoa(s);
  }
  else {
    return new Buffer(s).toString('base64');
  }
}

module.exports = getClientCredentials;
