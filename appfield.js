'use strict';

/**
 * @ngdoc directive
 * @name sampleApp.directive:appfield
 * @description
 * # appfield
 */
angular.module('appfield', [])
  .directive('appfield', function () {
    return {
      template: '<label>{{ field.displayName }}</label><br><input type="{{ field.type }}" name="{{ field.name }}" ng-required="field.required" ng-model="inedition[field.name]" />',
      restrict: 'E',
      scope: {
         field: '=',
         inedition: '='
      },
      link: function postLink($scope) {
      }
    };
  });
