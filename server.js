var express = require('express'),
    app = express();

app.use(express.static('app'));
app.use(express.static('bower_components'));

var server = app.listen(3000, 'localhost', function() {
    console.log('Listening on address %s on port %d', server.address().address, server.address().port);
});

module.exports = app;