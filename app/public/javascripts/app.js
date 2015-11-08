(function() {
  var app = angular.module('myApp', [
    'ui.router',
    'firebase',
    'auth',
    'ngMaterial',
    'ngAnimate',
    'ngAria'
  ]);

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('myState', {
        url: "/",
        // templateUrl: "views/myView.html"
        // controller: "myController",
        // controllerAs: "myCtrl"
      });
  });
})();
