'use strict';

// Declare app level module which depends on views, and components
angular.module('intlyticsApp', [
  'ngRoute',
  'intlyticsApp.view1',
  'intlyticsApp.view2',
  'intlyticsApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
