(() => {
	'use strict';

	angular.module('app')
		.directive('listVideos', listVideos)
		.value('VIDEOS', [
			{id : 1, title : 'Video 1', url : 'http://localhost:5000/videos/video-1'},
			{id : 2, title : 'Video 2', url : 'http://localhost:5000/videos/video-2'},
			{id : 3, title : 'Video 3', url : 'http://localhost:5000/videos/video-3'},
	]);

	
	function listVideos() {
		return {
			restrict: 'E',
			replace: 'true',
			templateUrl: './app/directives/video-dialog/list.html',
			controller : ListCtrl,
			controllerAs : 'vm'
		};
	}

	ListCtrl.$inject = ['$mdDialog', 'VIDEOS', '$rootScope', 'jwtHelper'];

	function ListCtrl ($mdDialog, VIDEOS, $rootScope, jwtHelper) {
		let vm = this;
		vm.videos = VIDEOS;
		vm.video = null;
		vm.coments = [];
		vm.select = (ev, video) => {
			vm.video = video;
		}

		vm.addComent = (ev, coment) => {
			if(ev.keyCode == 13){
				let token = $rootScope.user.id_token;
				var user = jwtHelper.decodeToken(token);
				vm.coments.push({ user : user.name, coment :coment});
				vm.coment = null;
			}
		}
	}

})();
