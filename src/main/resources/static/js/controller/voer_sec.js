'use strict';

angular.module('myApp').controller('VoterSecController', ['$scope', 'VoterService', function($scope, VoterService) {
    var self = this;
    self.v = VoterService.getVoter();
}]);