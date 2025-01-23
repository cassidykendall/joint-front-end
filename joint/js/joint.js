(function(){
    var jointapp = angular.module('jointapp', ['ngRoute']);

    jointapp.config(function($routeProvider) {
        $routeProvider
        .when("/search", {
          templateUrl : "search.html",
          controller: "searchController"
        })
        .when("/searchcard", {
          templateUrl : "searchCard.html",
          controller: "searchCardController"
        })
        .when("/create", {
          templateUrl : "create.html",
          controller: "createController"
        })
        .when("/createUser", {
          templateUrl : "createUser.html",
          controller: "createUserController"
        })
        .when("/fancy", {
          templateUrl : "fancy.html",
          controller: "fancyController"
        })
        .when("/gallery", {
          templateUrl : "gallery.html",
          controller: "galleryController"
        })
        .when("/stack", {
          templateUrl : "stack.html"
        })
        .when("/resume", {
          templateUrl : "resume.html"
        })
        .when("/main", {
          templateUrl : "main.html"
        })
        .when("/update/:expenseId", {
          templateUrl : "update.html",
          controller: "updateController"
        })
        .when("/updateUser/:userId", {
          templateUrl : "updateUser.html",
          controller: "updateUserController"
        })
        .when("/userSearch", {
          templateUrl : "userSearch.html",
          controller: "userSearchController"
        })
        .when("/individual/:userId", {
          templateUrl : "individual.html",
          controller: "individualController"
        })
        .otherwise({
            templateUrl : "main.html"
        });
      });

})()