var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/samples'));

app.listen(app.get('port'), function() {
    console.log('Node application is running at http://localhost:' + app.get('port'));
});