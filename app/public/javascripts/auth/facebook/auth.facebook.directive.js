(function() {
  angular
    .module('auth.facebook')
    .directive('spFacebook', function() {
      return {
        bindToController: true,
        controller: FacebookController,
        controllerAs: 'fb',
        templateUrl: './javascripts/auth/facebook/auth.facebook.html'
      };
    });

  FacebookController.$inject = ['$attrs', '$timeout', '$scope', '$state'];

  function FacebookController($attrs, $timeout, $scope, $state) {
    // This needs to be done with a constant
    var ref = new Firebase('https://sparktesting.firebaseio.com/');

    var fb = this;
    fb.login = login;
    fb.logout = logout;
    fb.authed = false;
    fb.text = $attrs.text ? $attrs.text :
      'Login with Facebook';

    function login() {
      ref.authWithOAuthPopup("facebook", function() {});
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
