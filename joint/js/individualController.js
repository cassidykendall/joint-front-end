

(function () {
    var jointapp = angular.module('jointapp');

    jointapp.controller('individualController', function($scope, $http, $location) {

        $scope.showSpinner = true;
		$scope.splitPath = $location.path().split("/");
		$scope.userId = $scope.splitPath.pop().toString();

		$scope.getUserById = function($userId) {
            $scope.showSpinner = true;
			$http.get("http://localhost:8080/api/users/userId/" + $userId)
			.then(function(response) {
				$scope.user = response.data[0];
				$scope.showSpinner = false;
			}, function(response) {
				console.log('error http GET user: ' + response.status);
			});
		}

        $scope.getUserExpenses = function($userId) {
            $scope.showSpinner = true;
			$http.get("http://localhost:8080/api/expenses/userId/" + $userId)
			.then(function(response) {
				$scope.userExpenses = response.data;
				$scope.showSpinner = false;
			}, function(response) {
				console.log('error http GET user expenses: ' + response.status);
			});
		}

		$scope.getUserById($scope.userId);
        $scope.getUserExpenses($scope.userId);
		
		$scope.goToUpdateView = function(expenseId) {
            // console.log('go to update view: ' + expenseId);

            $location.path('/update/' + expenseId);
        }

		$scope.goToUpdateUserView = function() {
            $location.path('/updateUser/' + $scope.userId);
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