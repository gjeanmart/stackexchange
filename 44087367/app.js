'use strict';
(function(){

    angular.module('test', [ 'ui.bootstrap', 'ui.router', 'ngTable' ]); 
        
    angular.module('test').config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider, $stickyStateProvider, $locationProvider) {
            $urlRouterProvider.otherwise("/home");
            
            $stateProvider
            /*******************************************************
             * HOME
            *******************************************************/
            .state('home', {
                url                 : '/home',
                templateUrl         : './home.html',
                controller          : 'homeController'
            }) 
    }]);
    
    angular.module('test').controller('homeController', function($scope, $state, NgTableParams) {
        $scope.data = [{
            name: 'greg',
            age:29,
            money: 100.10
        }, {
            name: 'bob',
            age:30,
            money: 250.00
        }];
        
        for(var i = 0; i < $scope.data.length; i++) {
            $scope.data[i].index = i;
        }
        
        $scope.table = new NgTableParams({ }, {
            dataset: $scope.data
        });
  
    });

    
})();