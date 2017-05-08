'use strict';
(function(){

    angular.module('test', [ 'ui.bootstrap', 'ui.router' ]); 
        
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
            .state('home.popup', {
                url                 : '/popup',
                onEnter: ['$state', '$stateParams', '$uibModal', function ($state, $stateParams, $uibModal) {
                    $uibModal.open({
                        templateUrl : './popup.html',
                        controller  : 'popupController',
                        windowClass : 'center-modal'
                    }).result.finally(function() {
                        $state.go('^');
                    });
                }]
            }) 
    }]);
    
    angular.module('test').service('storageService', function () {
            var data;
            
            return {
                getData: function() { return data; },
                setData: function(value) { data = value; }
            };
    });
    
    angular.module('test').controller('homeController', function($scope, $state, storageService) {
        $scope.tocopy = "hello";
        
        $scope.openPopup = function() {
            storageService.setData($scope.tocopy);
            $state.go('home.popup');
        };
        
    });
    angular.module('test').controller('popupController', function($scope, $state, storageService) {
        $scope.tocopy = storageService.getData();
    });
    
})();