

(function () {
    var jointapp = angular.module('jointapp');

    jointapp.controller('searchController', function($scope, $http, $location) {

        $scope.showSpinner = true;

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

        $scope.getAllExpenses = function() {
            $scope.showSpinner = true;
			$http.get("http://localhost:8080/api/expenses")
			.then(function(response) {
				response.data?.forEach(expense => {
					$scope.users?.forEach(user => {
						if (expense.userId === user.userId) {
							expense.userName = user.name;
						}
					});
				});
				$scope.expenses = response.data;
				$scope.showSpinner = false;
			}, function(response) {
				console.log('error http GET expenses: ' + response.status);
			});
		}

		$scope.getAllExpenses();
		// console.log($scope);
		
		$scope.goToUpdateView = function(expenseId) {
            // console.log('go to update view: ' + expenseId);

            $location.path('/update/' + expenseId);
        }
        $scope.reverse = false;

		$scope.orderByColumn = function(column) {
			$scope.orderByValue = column;
			if ($scope.reverse) {
				$scope.reverse = false;
			} else {
				$scope.reverse = true;
			}
		}
});

})()