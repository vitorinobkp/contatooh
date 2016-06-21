//config/express.js
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
//var home = require('../app/routes/home');

module.exports = function(){
	var app = express();
	
	// variável de ambiente
	app.set('port', 8080);
		
	//middleware
	app.use(express.static('./public'));
	//app.use(app.router);//necessário apenas na versão 3.x
	//home(app);
	//abaixo do middleware express.static
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

//carregamento de rotas	
		load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);
		
	return app;
	
};
