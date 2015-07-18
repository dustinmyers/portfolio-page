var app = angular.module('portfolio')
  .controller('MainCtrl', ['$scope', function($scope) {
      
    // Functionality for menu FAB
    $scope.demo = {
      topDirections: ['left', 'up'],
      bottomDirections: ['down', 'right'],
      isOpen: false,
      availableModes: ['md-fling', 'md-scale'],
      selectedMode: 'md-fling',
      availableDirections: ['up', 'down', 'left', 'right'],
      selectedDirection: 'left'
    };

      
      
}]);
