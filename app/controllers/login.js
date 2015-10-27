(function () {
	'use strict';
	angular.module('app')
		.controller('MainCtrl', MainCtrl);

		MainCtrl.$inject = ['login','$window'];

		function MainCtrl (login, $window) {
			let vm = this;
			vm.trylogin = !!$window.localStorage.getItem("token");
			vm.progress = false;
			vm.msg = null;

			vm.login = user => {
				vm.progress = true;
				login.logar(user).then(loginSucess, loginFail);
			}

		  let loginSucess = result => {
				if(result.status) {
          $window.localStorage.setItem("token",JSON.stringify(result.result.id_token));
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
