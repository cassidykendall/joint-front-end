(function () {

    var jointapp = angular.module('jointapp');

    jointapp.controller('searchCardController', function ($scope, $http, $location) {

        $scope.getAllExpenses = function () {
            $http.get("http://localhost:8080/api/expenses")
                .then(function (response) {
                    $scope.expenses = response.data;
                    console.log('number of expenses: ' + $scope.expenses.length);
                }, function (response) {
                    console.log('error http GET expenses: ' + response.status);
                });
        }

        $scope.getAllExpenses();

        $scope.goToUpdateView = function (expenseId) {
            console.log("go to update view: " + expenseId);
            $location.path('/update/' + expenseId);
        }

    });

})();