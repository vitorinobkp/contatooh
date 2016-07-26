var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://contatooh:smem1227@ds011715.mlab.com:11715/contatooh');
//('mongodb://localhost/contatooh');
//

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express Server escutando na porta ' +
              app.get('port'));
});
