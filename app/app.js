(() => {
	'use strict'
	angular.module('app',['ngMaterial','angular-jwt'])
		.config(['$sceProvider',function($sceProvider){
			 $sceProvider.enabled(false);
		}]);
})();
