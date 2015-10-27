(function () {
	'use strict';

	angular.module('app')
		.factory('socket', socket);

		socket.$inject =['$rootScope'];

		function socket ($rootScope) {

			let socket = io("https://stream-videos.herokuapp.com/");

			let service = {
				on : on,
				emit : emit
			};

			return service;
		
			function on (ev, cb) {
				socket.on(ev, function() {
          let msg = arguments;
					$rootScope.$apply(function () {
						cb.apply(socket, msg);
					});	
				});	
			}

			function emit (ev,data , cb ) {
				socket.emit(ev, data, msg => {
					$rootScope.$apply(() => {
						if(cb){
							cb.apply(socket,msg);
						}
					});
				});
			}
		}
}());
