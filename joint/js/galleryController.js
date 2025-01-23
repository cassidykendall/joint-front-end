/**
 * Access the previously created module 'jointapp'
 */

(function() {
	var jointapp = angular.module('jointapp');
	
	jointapp.controller('galleryController', function($scope, $http) {	
		
		// https://www.js-tutorials.com/angularjs-tutorial/html5-localstorage-sessionstorage-using-angularjs/
		
		
		$scope.itemsForSale = [{image:'rodger.png',title:'Federer',price:89.00},
			{image:'tennis-ball.jpg',title:'Tennis Ball',price:20.00},
			{image:'tennis-fun.png',title:'Tennis Fun',price:60.00},
			{image:'movie_reel.jpg',title:'Movie Reel',price:59.00},
			{image:'racket.jpg',title:'The Racket',price:200.00},
			{image:'tennis-court.png',title:'Tennis Court',price:4.00}];
		
		
			
		$scope.addToCart = function(item) {
			if (localStorage.getItem('cart') != null) {
				$scope.cart = JSON.parse(localStorage.getItem('cart'));
				$scope.cart.push(item);
				localStorage.setItem('cart', JSON.stringify($scope.cart));
			} else {
				// new cart
				$scope.cart = [item];
				localStorage.setItem('cart', JSON.stringify($scope.cart));
			}			
		}
		
		$scope.getCart = function() {
			if (localStorage.getItem('cart') != null) {
				$scope.cart = JSON.parse(localStorage.getItem('cart'));				
			} else {				
				$scope.cart = [];				
			}			
		}
		
		$scope.getCart();
		$scope.viewCart = false;
		
		$scope.viewMyCart = function() {			
			$scope.viewCart = true;
		}
		
		$scope.hideMyCart = function() {			
			$scope.viewCart = false;
		}
		
		$scope.emptyMyCart = function() {
			if (localStorage.getItem('cart') != null) {
				$scope.cart = [];
				localStorage.setItem('cart', JSON.stringify($scope.cart));			
			}			
		}
			
	});

})()