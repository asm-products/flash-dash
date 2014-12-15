var express = require('express');

var path = require('path');

app = express();

app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'dist')));
});

var port = process.env.PORT || 5000;

app.listen(port);

console.log('server started '+port);
