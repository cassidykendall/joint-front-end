

/**
 * Access the previously created module 'jointapp'
 */

(function() {
	var jointapp = angular.module('jointapp');

	jointapp.controller('createUserController', function($scope, $http) {			
		
		// $scope.user1 = {
		// 	"name": "Harry",
		// 	"userId": 123456
		// }

		// $scope.user2 = {
		// 	"name": "Sally",
		// 	"userId": 234567
		// }


		// $scope.users = [$scope.user1, $scope.user2];
		// $scope.boolean = ['Y', 'N'];
		
		$scope.createUser = function() {
			// $scope.expense.userId = $scope.expense.userId.userId;
			$http.post("http://localhost:8080/api/users", $scope.user)
			.then(function(response) {				
				$scope.createStatus = 'create successful';
				$scope.disableCreate = true;
			}, function(response) {
				$scope.createStatus = 'error trying to create user';	
				console.log('error http POST users: ' + response.status);
			});
		}
		
		$scope.clear = function() {
			$scope.user.name = '';
			$scope.user.monthlySalary = '';
			$scope.user.userId = '';
			$scope.user.password = '';
			$scope.user.defaultSplit = '';
			$scope.disableCreate = false;
			$scope.createForm.$setUntouched();
			$scope.createForm.$setPristine();
		}
		
	});
	
})()