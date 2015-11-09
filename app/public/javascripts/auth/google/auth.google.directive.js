(function() {
  angular
    .module('auth.google')
    .directive('spGoogle', function() {
      return {
        bindToController: true,
        controller: GoogleController,
        controllerAs: 'vm',
        templateUrl: './javascripts/auth/google/auth.google.html'
      };
    });

  GoogleController.$inject = ['$attrs', '$timeout', '$scope', '$state'];

  function GoogleController($attrs, $timeout, $scope, $state) {
    // This needs to be done with a constant
    var ref = new Firebase('https://sparktesting.firebaseio.com/');

    var vm = this;
    vm.google = {};
    vm.google.login = login;
    vm.google.logout = logout;
    vm.authed = false;

    function login() {
      ref.authWithOAuthPopup("google", function() {});
    }

    function logout() {
      ref.unauth();
      vm.authed = false;
    }

    function onAuthCallback(authData) {
      if (authData) {
        $timeout(function() {
          vm.user = authData;
          vm.authed = true;
        })
      }
    }

    ref.onAuth(onAuthCallback);
  }
})();
