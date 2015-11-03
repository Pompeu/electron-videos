(() => {
	'use strict';

	angular.module('app')
		.factory('login', login);

		login.$inject = ['$http'];

		function login ($http) {

			let	service = {
				logar : login
			};

			return service;
      /*
        fazendo login entre o cliente desktop e a rede de conhecimentos
      */
			function login (user) {
				let url = 'http://redeconhecimentos.herokuapp.com/api/login';
				return $http.post(url,user).then(function success(data){
					return data.data;
				},function error (err) {
					return err;
				});	
			}
		}

})();
