(function () {
	'use strict';

	angular.module('app')
		.factory('socket', socket);

		socket.$inject =['$rootScope'];

		function socket ($rootScope) {
      /*
        io recebe o endereco do servidor de websocktes como parametro
        a partir daki ele  pode emitir e escutar eventos
        para tomar ações devidas.
        essa factory fabrica um objeto que possbilida
        a comunicação entre o cliente e o servidor
      */
			let socket = io("https://stream-videos.herokuapp.com/");

			let service = {
				on : on,
				emit : emit
			};

			return service;
		  //essa função funciona como um listener entre cliente e o servidor
			function on (ev, cb) {
				socket.on(ev, function() {
          let msg = arguments;
					$rootScope.$apply(function () {
						cb.apply(socket, msg);
					});	
				});	
			}
      //essa função emite os eventos para servidor
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
