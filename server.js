// var requestProxy = require('express-request-proxy'),
var express = require('express');
var app = express();

// var proxyGitHub = function(request, response) {
//   console.log('Routing GitHub request for', request.params[0]);
//   (requestProxy({
//     url: 'https://api.github.com/' + request.params[0],
//     headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
//   }))(request, response);
// };
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public/'));

app.get('/', function(request, response) {
  response.render('pages/index');
});

// app.get('/github/*', proxyGitHub);
// app.get('*', function(request, response) {
//   console.log('New request:', request.url);
//   response.sendFile('index.html', { root: '.' });
// });

app.listen(app.get('port'), function() {
  console.log('Server started on port ', app.get('port'));
});

var firebase = require('firebase/app');
// require("firebase/auth");
require('firebase/database');

var config = {
  // ...
};
firebase.initializeApp(config);
