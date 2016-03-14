(function () {
  'use strict';

  angular
    .module('mean.myTheme')
    .config(myTheme);

  myTheme.$inject = ['$viewPathProvider', '$stateProvider'];

  function myTheme($viewPathProvider, $stateProvider) {
    $viewPathProvider.override('system/views/index.html', 'myTheme/views/index.html');
  }

})();

