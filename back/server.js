const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();

var client_id = '62be9b42a422472393aaf75d4f30f9a0';
var redirect_uri = 'http://localhost:3000/callback';

app.get('/login', function(req, res) {

    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email';
  
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      }));
  });