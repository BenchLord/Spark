var app = angular.module('myApp', ['ui.router', 'firebase'])

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('myState', {
      url: "/",
      templateUrl: "views/thankyou.html"
      // controller: "myController",
      // controllerAs: "myCtrl"
    })
})