(() => {
  'use strict';
  angular.module('app')
    .directive('comentsDir', comentsDir);

    function comentsDir () {
      let directive = {
        templateUrl : "./app/directives/coments/coments.html",
        restrict : "E",
        controller : ComentController,
        controllerAs : "cm",
      };

      return directive;
    }

    ComentController.$inject = ['$window', 'jwtHelper','socket'];

    function ComentController ($window, jwtHelper, socket) {
      let cm = this;
      let token = $window.localStorage.getItem("token");
      let user = jwtHelper.decodeToken(token);
      cm.coments = [];
      cm.coment = '';
      socket.on("send:message", msg =>  {
          cm.coments.push(msg);
      });

      cm.addComent = () => {
        if (cm.coment.length >= 3 && cm.coment.length <= 20){
          socket.emit("send:message", {
            user : user.name,
            coment : cm.coment
          });
          cm.coment = '';
        }
      };
    }
})();
