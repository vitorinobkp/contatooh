// public/js/controllers/ContatosController.js

angular.module('contatooh').controller('ContatosController', 
	function($scope, $http) {
		
		$http({method: 'GET', url: '/contatos'});
		$scope.total = 0;
		$scope.incrementa = function(){
			$scope.total++;
		};
		
		$scope.filtro = '';
		
		$scope.contatos = [
		{
			"_id": 1,
			"nome": "Contato Angular 1",
			"email": "cont1@empresa.com.br"
		},
		{
			"_id": 2,
			"nome": "Contato Angular 2",
			"email": "cont2@empresa.com.br"
		},
		{
			"_id": 3,
			"nome": "Contato Angular 3",
			"email": "cont3@empresa.com.br"
		}
		]
	});