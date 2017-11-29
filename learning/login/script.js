           var scotchApp= angular.module('scotchApp',['ui.router']); 
               scotchApp.config(['$stateProvider', '$urlRouterProvider', 
             function ($stateProvider, $urlRouterProvider) { 

               $urlRouterProvider.otherwise('/index.html'); 

              // See route.webapp.js for allowed routes 
             $stateProvider 
                .state('home', { 
                         url: '/home', 
                        templateUrl: 'pages/home.html', 
                        controller: 'homeController' 
                      }) 
                 .state('about', { 
                url: '/about', 
                  templateUrl: 'pages/about.html', 
                          controller: 'aboutController' 
                        }) 
                   .state('contact', { 
                   url: '/contact', 
                  templateUrl: 'pages/contact.html', 
                  controller: 'contactController' 
                       }) 

                   } 
                   ]); 
                   
                // create the controller and inject Angular's $scope 
               scotchApp.controller('homeController', function($scope) { 
                  // create a message to display in our view 
                   $scope.message = 'Everyone come and see how good I look!'; 

                }); 

                    // create the controller and inject Angular's $scope 
              scotchApp.controller('mainController', function($scope,$state) { 
               // create a message to display in our view 
                 // $scope.message = 'Everyone come and see how good I look!'; 
                 $state.go('home'); 
                      }); 

                 scotchApp.controller('aboutController', ['$scope', 'userService', function($scope, userService) { 
                   $scope.userService = userService;
                   $scope.user = $scope.userService.user; 
                   $scope.message = 'Look! I am an about page.'; 
               }]); 

                  scotchApp.controller('contactController', function($scope) { 
                  $scope.message = 'Contact us! JK. This is just a demo.'; 
              });