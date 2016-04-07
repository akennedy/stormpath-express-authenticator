var express = require('express')
var stormpath = require('express-stormpath');

var app = express()
app.use(stormpath.init(app, {
  debug: 'info',
  web: {
    oauth2: {
      client_credentials: {
        accessToken: {
          ttl: 3600 // your custom TTL, in seconds, goes here
        }
      }    
    }
  },
  apiKey: {
    id: process.env.STORMPATH_CLIENT_APIKEY_ID,
    secret: process.env.STORMPATH_CLIENT_APIKEY_SECRET
  },
  application: {
    href: process.env.STORMPATH_APPLICATION_HREF
  }
}));
 
app.on('stormpath.ready', function () {
  app.listen(process.env.PORT || 3000, function () {
  });
});

app.get('/secret', stormpath.apiAuthenticationRequired, function (req, res) {
  res.send('ok ' + req.user.email)
});

app.get('/not-so-secret', function (req, res) {
  res.send('ok')
});