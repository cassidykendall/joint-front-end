

(function () {
    var jointapp = angular.module('jointapp');

    jointapp.controller('userSearchController', function($scope, $http, $location) {

        $scope.showSpinner = true;

        $scope.getAllUsers = function() {
            $scope.showSpinner = true;
			$http.get("http://localhost:8080/api/users")
			.then(function(response) {
				$scope.users = response.data;
				$scope.showSpinner = false;
			}, function(response) {
				console.log('error http GET users: ' + response.status);
			});
		}

        $scope.getAllUsers();

		$scope.recalculateSplits = function() {
			$scope.showSpinner = true;
			$scope.total = 0;

			$scope.users.forEach(user => {
				$scope.total = $scope.total + user.monthlyIncome;
			});

			$scope.users.forEach(user => {
				user.defaultSplit = (user.monthlyIncome / $scope.total * 100).toFixed(1);
				$http.put("http://localhost:8080/api/users", user)
				.then(function(response) {				
					$scope.updateStatus = 'update successful';	
					$scope.showSpinner = false;		
				}, function(response) {
					$scope.updateStatus = 'error trying to update user';	
					console.log('error http PUT users: ' + response.status);
				});
			});
		}
		
		$scope.goToIndividualView = function(userId) {
            // console.log('go to individual view: ' + userId);

             $location.path('/individual/' + userId);
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