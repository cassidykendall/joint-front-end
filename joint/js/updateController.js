

(function () {
    var jointapp = angular.module('jointapp');

    jointapp.controller('updateController', function($scope, $http, $routeParams, $location) {

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

		$scope.getExpensesById = function() {
			$http.get("http://localhost:8080/api/expenses/" + $routeParams.expenseId)
			.then(function(response) {
				var expenses = response.data;
				if (expenses.length == 1) {
					$scope.expense = expenses[0];
				} else {
					//TODO error message
				}				
			}, function(response) {
				console.log('error http GET expenses by id: ' + response.status);
			});
		}

		$scope.getExpensesById();

		$scope.updateExpense = function() {
			$scope.expense.userId = $scope.expense.userId.userId;
			$http.put("http://localhost:8080/api/expenses", $scope.expense)
			.then(function(response) {				
				$scope.updateStatus = 'update successful';			
			}, function(response) {
				$scope.updateStatus = 'error trying to update expense';	
				console.log('error http PUT expenses: ' + response.status);
			});
		}

		$scope.deleteExpense = function() {
			$http.delete("http://localhost:8080/api/expenses/" + $scope.expense.id)
			.then(function(response) {				
				$scope.updateStatus = 'delete successful';	
				$scope.disableUpdate = true;
			}, function(response) {
				$scope.updateStatus = 'error trying to delete expense';	
				console.log('error http DELETE expense: ' + response.status);
			});
		}

		$scope.goToSearchView = function() {
			if ($scope.expense.isJoint == "Y") {
				$location.path('/search');
			} else {
				$location.path('/individual/' + $scope.expense.userId);
			}
			
		}

        
});

})()