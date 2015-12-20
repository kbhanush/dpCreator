angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.aboutYourFurryFriend', {
      url: '/page4',
      views: {
        'tab1': {
          templateUrl: 'templates/aboutYourFurryFriend.html',
          controller: 'aboutYourFurryFriendCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('aboutYourself', {
      url: '/page2',
      templateUrl: 'templates/aboutYourself.html',
      controller: 'aboutYourselfCtrl'
    })
        
      
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('aboutYourself2', {
      url: '/page3',
      templateUrl: 'templates/aboutYourself2.html',
      controller: 'aboutYourself2Ctrl'
    })
        
      
    
      
        
    .state('aboutYourFurryFriend2', {
      url: '/page5',
      templateUrl: 'templates/aboutYourFurryFriend2.html',
      controller: 'aboutYourFurryFriend2Ctrl'
    })
        
      
    
      
        
    .state('passwordReset', {
      url: '/page6',
      templateUrl: 'templates/passwordReset.html',
      controller: 'passwordResetCtrl'
    })
        
      
    
      
        
    .state('tabsController.account', {
      url: '/page10',
      views: {
        'tab3': {
          templateUrl: 'templates/account.html',
          controller: 'accountCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/page4');

});