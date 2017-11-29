	        (function(){
	          var scotchApp = angular.module('scotchApp');
           scotchApp.directive('homeData', function() {
           return {
                scope:{
                  info:'=fo'
                },
             templateUrl: 'homeDirective.html'
            };
             
           });
           scotchApp.controller('MyFormCtrl', ['$scope', 'userService', function($scope, userService) {
             $scope.userService = userService;
              $scope.user = {
                    name: '',
                  email: ''
                };
 
              $scope.register = function() {
              // console.log('User clicked register', this.user);
                  $scope.userService.setUserName($scope.user.name);
                  $scope.userService.setUserEmail($scope.user.email);
                  alert($scope.userService.getUserName() + "-- " + $scope.userService.getUserEmail());
                  //$scope.name=this.user.name;
              };
              }]);
              
              scotchApp.service('userService', function(){
                var userService = {
                  user: {
                    'name': '',
                    'email': ''
                  },
                  getUser: function(){
                    return userService.user;
                  },
                  getUserName: function(){
                    return userService.user.name;
                  },
                  getUserEmail: function(){
                    return userService.user.email;
                  },
                  setUserName: function(name){
                    userService.user.name = name;
                  },
                  setUserEmail: function(email){
                    userService.user.email = email;
                  },
                };
                return userService;
              
              });
              
	        })();