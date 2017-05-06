'use strict';
(function(){
    
    /******************************************
     **** Entry point for the AngularJS application
     **** 
     **** Define the application's name  and a list of mdoules (libraries)
     ******************************************/
    angular.module('test', 
        [   'ui.bootstrap',
            'ui.router'
        ]); 
        
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
                params              : {tocopy: null},
                onEnter: ['$state', '$stateParams', '$uibModal', function ($state, $stateParams, $uibModal) {
                    $uibModal.open({
                        templateUrl: './popup.html',
                        controller: 'popupController',
                        resolve: {
                            tocopy: function() {
                                return $stateParams.tocopy;
                            }
                        }
                      }).result.finally(function() {
                            $state.go('^');
                      });
                }]
            }) 
    }]);
    
    angular.module('test').controller('homeController', function($scope, $state) {
        $scope.tocopy = "hello";
        
        $scope.openPopup = function() {
            $state.go('home.popup', { tocopy: $scope.tocopy});
        };
        
    });
    angular.module('test').controller('popupController', function($scope, $state, tocopy) {
        $scope.tocopy = tocopy;
    });
    
})();