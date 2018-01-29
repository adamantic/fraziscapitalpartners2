var express = require('express')

var app = express();

// set up handlebars view engine
var handlebars = require('express-handlebars').create({
    defaultLayout:'main'
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/views'));

// set 'showTests' context property if the querystring contains test=1
app.use(function(req, res, next){
    res.locals.showTests = app.get('env') !== 'production' &&
        req.query.test === '1';
    next();
});

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/jun17', function(req, res) {
    res.render('jun17');
});

app.get('/jul17', function(req, res) {
    res.render('jul17');
});

app.get('/aug17', function(req, res) {
  res.render('aug17');
});

app.get('/sep17', function(req, res) {
    res.render('sep17');
});

app.get('/oct17', function(req, res) {
    res.render('oct17');
});

app.get('/nov17', function(req, res) {
    res.render('nov17');
});

app.get('/dec17', function(req, res) {
    res.render('dec17');
});

app.get('/crypto2', function(req, res) {
    res.render('crypto2');
});

app.get('/crypto', function(req, res) {
    res.render('crypto');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/investorletters', function(req, res) {
    res.render('investorletters');
});

app.get('/people', function(req, res) {
    res.render('people');
});

app.get('/people', function(req, res) {
    res.render('views/people');
});

app.get('/strategy', function(req, res) {
    res.render('strategy');
});


app.get('/performance', function(req, res) {
    res.render('performance');
});

app.get('/xero', function(req, res) {
    res.render('xero');
});

app.get('/crypto', function(req, res) {
    res.render('crypto');
});

app.get('/getswift', function(req, res) {
    res.render('getswift');
});

app.get('/invest', function(req, res) {
    res.render('invest');
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});
