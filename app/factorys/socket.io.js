(function () {
	'use strict';

	angular.module('app')
		.factory('socketio', socketio);

		socketio.$inject =['$rootScope'];

		function socketio () {
			let socket = io.socket("http://localhost:6000/");

			let service = {
				on : on,
				emit : emit
			}

			return service;
		
			function on (ev, cb) {
				socket.on(ev,(msg) => {
					$rootScope.$apply(() => {
						cb.apply(socket, msg);
					});	
				});	
			}

			function emit (ev,data , cb ) {
				socket.emit(ev, data, (msg) => {
					$rootScope.$apply(() => {
						if(cb){
							cb.apply(socket,msg);
						}
					});
				});
			}
		}
}());
