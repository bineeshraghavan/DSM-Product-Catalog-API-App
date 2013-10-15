'use strict';

/* Controllers */

angular.module('myApp.controllers')

  .controller('ProductCategoryCtrl', ['$scope', '$http', 'ProductCategories', function($scope, $http, ProductCategories) {

    $http.defaults.useXDomain = true;

    // Instantiate an object to store scope data
    $scope.myData = {};

    ProductCategories.query(function(data) {
      console.log(data);
      $scope.myData.categoryList = data;	
    });

    $scope.setCurrentCategoryById = function(id) {
      ProductCategories.getCategory({id: id}, function(data){
        console.log(data);
        $scope.myData.currentCategory = data;
      });
    };

    $scope.setCurrentCategoryByName = function(name) {
      ProductCategories.getCategory({name: name}, function(data){
        console.log(data);
        $scope.myData.currentCategory = data;
      });
    };

    $scope.showAll = function() {      
      $scope.myData.currentCategory = null;
    };
  }])

  .controller('ProductOfferingCtrl', ['$scope', 'ProductOfferings',function($scope, ProductOfferings) {


    // Instantiate an object to store scope data
    $scope.myData = {};

    ProductOfferings.query(function(data) {
      console.log(data);
      $scope.myData.offeringList = data;	
    });

    $scope.setCurrentOfferingById = function(id) {
      ProductOfferings.getOffering({id: id}, function(data){
        console.log(data);
        $scope.myData.currentOffering = data;
      });
    };

    $scope.setCurrentOfferingByName = function(name) {
      ProductOfferings.getOffering({name: name}, function(data){
        console.log(data);
        $scope.myData.currentOffering = data;
      });
    };

    $scope.setCurrentSpecificationById = function(id) {
      ProductSpecifications.getSpecification({id: id}, function(data){
        console.log(data);
        $scope.myData.currentSpecification = data;
        $location.path(view3);
      });
    };

    $scope.showAll = function() {
      $scope.myData.currentOffering = null;
    };
  }])

  .controller('ProductSpecificationCtrl', ['$scope', 'ProductSpecifications',function($scope, ProductSpecifications) {


    // Instantiate an object to store scope data
    $scope.myData = {};

    ProductSpecifications.query(function(data) {
      console.log(data);
      $scope.myData.specificationList = data;	
    });

    $scope.setCurrentSpecificationById = function(id) {
      ProductSpecifications.getSpecification({id: id}, function(data){
        console.log(data);
        $scope.myData.currentSpecification = data;
      });
    };

    $scope.setCurrentSpecificationByName = function(name) {
      ProductSpecifications.getSpecification({name: name}, function(data){
        console.log(data);
        $scope.myData.currentSpecification = data;
      });
    };

    $scope.showAll = function() {
      $scope.myData.currentSpecification = null;
    };
  }]);

