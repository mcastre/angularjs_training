var artistsController = angular.module('artistsController', []);

artistsController.controller('ListController', ['$scope', '$http', function ($scope, $http) {
$http.get('js/data.json').success(function(data) {
	$scope.artists = data;
	$scope.orderByName = 'name';

	});
}]);

artistsController.controller('DirectController', ['$scope', '$http','$routeParams', function ($scope, $http, $routeParams) {
$http.get('js/data.json').success(function(data) {
	$scope.artists = data;
	$scope.whichItem = $routeParams.itemId;

	});
}]);
