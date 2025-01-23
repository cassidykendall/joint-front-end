

/**
 * Access the previously created module 'jointapp'
 */

(function() {
	var jointapp = angular.module('jointapp');

	jointapp.controller('createController', function($scope, $http) {			
		
		$scope.getAllUsers = function() {
            $scope.showSpinner = true;
			$http.get("http://localhost:8080/api/users")
			.then(function(response) {
				$scope.users = response.data;
			}, function(response) {
				console.log('error http GET users: ' + response.status);
			});
		}

		$scope.getAllUsers()
		$scope.boolean = ['Y', 'N'];
		
		$scope.createExpense = function() {
			$scope.expense.userId = $scope.expense.userId.userId;
			$http.post("http://localhost:8080/api/expenses", $scope.expense)
			.then(function(response) {				
				$scope.createStatus = 'create successful';
				$scope.disableCreate = true;
			}, function(response) {
				$scope.createStatus = 'error trying to create expense';	
				console.log('error http POST expenses: ' + response.status);
			});
		}
		
		$scope.clear = function() {
			$scope.expense.name = '';
			$scope.expense.amount = '';
			$scope.expense.userId = '';
			$scope.disableCreate = false;
			$scope.createForm.$setUntouched();
			$scope.createForm.$setPristine();
		}
		
	});
	
})()