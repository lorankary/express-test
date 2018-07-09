// app.js

var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);


app.get('/about', function(req,res,next){
    res.type('text/plain');
    res.status(200);
    // res.send('/about');
    console.log('/about');
    next();
});

app.get('/', function(req,res,next){
    res.type('text/plain');
    res.status(200);
    // res.send('/');
    console.log('/');
    next();

});


// custom 404 page
app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 -- Not Found');
});
// custom 500 page
app.use(function(err, req, res, next){
    console.log(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 -- Server Error');
});

app.listen(app.get('port'), function(){
    console.log("Express started on port " + app.get('port') +
        '; Press Ctrl-C to terminate.');
});
