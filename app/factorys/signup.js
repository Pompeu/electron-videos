(() => {
	'use strict';
	angular.module('app')
		.factory('signup', signup);

		signup.$inject = ['$http'];

		function signup ($http) {

			let	service = {
				cad : cad
			};

			return service;
      /*
        essa funçao faz cadastro de usuario na rede de conhecimentos
        possibilitando que esse usuarios possam ver os videos
        no aplicativo desktop/html
      */
			function cad(user) {
				let url = 'http://redeconhecimentos.herokuapp.com/api/user/';
				return $http.post(url,user).then(function success(data){
					return data.data;
				},function error (err) {
					return err;
				});	
			}
		}

})();
