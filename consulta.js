//contatooh/consulta.js

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

//ObjectID de algum contato existente
var _idProcurado = new ObjectID('57771bbea44c975d16f39c7e');

MongoClient.connect('mongodb://contatooh:smem1227@ds011715.mlab.com:11715/contatooh',
  function(erro, db) {
    if(erro) throw err;
    db.collection('contatos').findOne({_id : _idProcurado},
      function(erro, contato) {
        if(erro) throw err;
        console.log(contato);
      });
  });
