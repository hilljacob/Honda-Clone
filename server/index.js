var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var keys = require('./config.js');
var massive = require('massive');

var massiveServ = massive.connectSync({
  connectionString: "postgres://localhost/motors"})



var port = 8000;

var corsOptions = {
  origin: 'http://localhost:8000'
};



app.use(cors(corsOptions));
app.use(bodyParser.json());
//Initialize Session
app.use(session({secret: keys.expressSecret}));
//console.log(keys);
//link with front end
app.use(express.static(__dirname + './../public'));
//console.log(__dirname);
app.set('db', massiveServ);
var db = app.get('db')

// has to be below database setup
var motorsCtrl = require('./controllers/motorsCtrl.js');

// my get statements
app.get('/items', motorsCtrl.getAll);

app.get('/item', motorsCtrl.getOne);

app.get('/category', motorsCtrl.getCat);

app.get('/type', motorsCtrl.getType);




app.listen(port, function(){
  console.log("listening on " + port);
})
