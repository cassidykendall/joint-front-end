

(function () {
    var jointapp = angular.module('jointapp');

    jointapp.controller('updateUserController', function($scope, $http, $routeParams, $location) {


		$scope.getUserById = function() {
			$scope.showSpinner = true;
			$http.get("http://localhost:8080/api/users/userId/" + $routeParams.userId)
			.then(function(response) {
				$scope.user = response.data[0];			
			}, function(response) {
				console.log('error http GET user by id: ' + response.status);
			});
		}

		$scope.getUserById();

		$scope.updateUser = function() {
			$http.put("http://localhost:8080/api/users", $scope.user)
			.then(function(response) {				
				$scope.updateStatus = 'update successful';			
			}, function(response) {
				$scope.updateStatus = 'error trying to update user';	
				console.log('error http PUT user: ' + response.status);
			});
		}

		$scope.deleteUser = function() {
			$http.delete("http://localhost:8080/api/users/" + $scope.user.userId)
			.then(function(response) {				
				$scope.updateStatus = 'delete successful';	
				$scope.disableUpdate = true;
			}, function(response) {
				$scope.updateStatus = 'error trying to delete user';	
				console.log('error http DELETE user: ' + response.status);
			});
		}

		$scope.goToIndividualView = function() {
			$location.path('/individual/' + $scope.user.userId);
		}

        
});

})()