var app = angular('myApp', ['ui.router', 'firebase', ])

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('myState', {
      // url: "/myurl",
      // templateUrl: "views/myView.html",
      // controller: "myController",
      // controllerAs: "myCtrl"
      url: "/",
      templateUrl: "views/index.html",
    })
})