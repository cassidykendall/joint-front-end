(function () {
    let jointapp = angular.module('jointapp');

    jointapp.controller('fancyController', function ($scope, $http) {

        /*min and max values for input of 'date and time'*/
        $scope.datetime = {
            min: "2022-12-01T00:00:00",
            max: "2023-12-31T00:00:00"
        }


        /* get all expenses to initialize the 'pick expense by name dropdown'*/
        $scope.getAllExpenses = function () {
            $scope.showSpinner = true;
            $http.get("http://localhost:8080/api/expenses")
                .then(function (response) {
                    $scope.expenses = response.data;
                    $scope.showSpinner = false;
                }, function (response) {
                    console.log('error http GET expenses: ' + response.status);
                });
        }

        $scope.getAllExpenses();


        /* send the request and query string values to server*/
        $scope.getFancy = function () {    
            
            /* if an expense is selected from dropdown, just send the expense id*/
            if ($scope.selectedExpense) {
                $scope.fancy.selectedExpenseId = $scope.selectedExpense.id;
            } else {
                $scope.fancy.selectedExpenseId = '0';
            }

            /* query string values will be created from fancy model variables*/
            var config = { params: $scope.fancy }

            $http.get("http://localhost:8080/api/expenses/fancysearch", config)
                .then(
                    function (response) {
                        $scope.searchResults = response.data;
                    },
                    function error(response) {
                        //TODO error message
                    });
        };

        // $scope.clearFancy = function () {           
        //     $scope.fancy = {
        //         datetimevalue: new Date(2022, 11, 1, 10),           
        //         english: true,
        //         french: true,
        //         german: false,
        //         spanish: false,
        //         media: 'color',
        //         startDate: new Date(1960,0,1),
        //         endDate: new Date(2024, 0,1),
        //         selectedMovieId: null                              
        //     };     
        //     $scope.selectedMovie = null   
        //     $scope.searchResults = '';    
        // }

        // $scope.clearFancy();
       

    });

})()		