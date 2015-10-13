(function () {
	'use strict';
	angular.module('app')
		.controller('MainCtrl', MainCtrl);

		MainCtrl.$inject = ['login','$rootScope'];

		function MainCtrl (login, $rootScope) {
			let vm = this;
			vm.trylogin = null;
			vm.progress = false;
			vm.msg = null;

			vm.login = user => {
				vm.progress = true;
				login.logar(user).then(loginSucess, loginFail);
			}

		  let loginSucess = result => {
				if(result.status) {
					$rootScope.user = result.result;
					vm.trylogin = true;
					vm.msg = null;
				}else {
					vm.msg = "falha ao logar"; 
				}
				vm.progress = false;
			}

			let loginFail =  err => {
				vm.progress = false;
				vm.msg = "falha ao logar";
			}
		}
}());
