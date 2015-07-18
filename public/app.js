var app = angular.module('portfolio', ['ngMaterial'])

	.config(['$mdThemingProvider', function($mdThemingProvider) {
  	
  	$mdThemingProvider.theme('default')
    	.primaryPalette('teal')
    	.accentPalette('pink');
    	
}]); // end config //