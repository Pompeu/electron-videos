(() => {
	'use strict'
	angular.module('app',['ngMaterial','angular-jwt'])
		.config(['$sceProvider', ($sceProvider) => {
			 $sceProvider.enabled(false);
		}]);
})();
