
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var login = require("./routes/login"); 
var project = require("./routes/project");
var home = require("./routes/home");
var add = require("./routes/add");
var addFriend = require("./routes/addFriend");
var settings = require("./routes/settings");
var goals = require("./routes/goals");
var addGoals = require("./routes/addGoals");
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', login.viewLogin);
app.get('/index', index.view);
app.get('/project/:name', project.viewProject);
app.get('/home', home.viewHome);
app.get('/add', add.viewAdd);
app.get('/addFriend', addFriend.addFriend);
app.get('/settings', settings.viewSettings);
app.get('/goals', goals.viewGoals);
app.get('/addGoals',addGoals.addGoals);
app.get('/viewHomeAlt', home.viewHomeAlt);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
