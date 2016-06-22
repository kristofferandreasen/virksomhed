'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ngRoute','myApp.version', 'ngAnimate']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/view1.html',
        controller: 'View1Ctrl'
    }).
      when('/erfaring', {
        templateUrl: 'views/erfaring.html',
        controller: 'ErfaringCtrl'
    }).
      when('/kapital', {
        templateUrl: 'views/kapital.html',
        controller: 'KapitalCtrl'
    }).
      when('/kapital2', {
        templateUrl: 'views/kapital2.html',
        controller: 'Kapital2Ctrl'
    }).
      when('/kapital3', {
        templateUrl: 'views/kapital3.html',
        controller: 'Kapital3Ctrl'
    }).
      when('/omsaetning', {
        templateUrl: 'views/omsaetning.html',
        controller: 'OmsaetningCtrl'
    }).
      when('/risiko', {
        templateUrl: 'views/risiko.html',
        controller: 'RisikoCtrl'
    }).
      when('/risikoto', {
        templateUrl: 'views/risikoto.html',
        controller: 'RisikotoCtrl'
    }).
      when('/risiko3', {
        templateUrl: 'views/risiko3.html',
        controller: 'Risiko3Ctrl'
    }).
      when('/risiko4', {
        templateUrl: 'views/risiko4.html',
        controller: 'Risiko4Ctrl'
    }).
      when('/medarbejdere', {
        templateUrl: 'views/medarbejdere.html',
        controller: 'MedarbejdereCtrl'
    }).
      when('/ejere', {
        templateUrl: 'views/ejere.html',
        controller: 'EjereCtrl'
    }).
      when('/ejere2', {
        templateUrl: 'views/ejere2.html',
        controller: 'Ejere2Ctrl'
    }).
      when('/ejere3', {
        templateUrl: 'views/ejere3.html',
        controller: 'Ejere3Ctrl'
    }).
      when('/ejere4', {
        templateUrl: 'views/ejere4.html',
        controller: 'Ejere4Ctrl'
    }).
       when('/organisation', {
        templateUrl: 'views/organisation.html',
        controller: 'OrganisationCtrl'
    }).
       when('/haeftelse', {
        templateUrl: 'views/haeftelse.html',
        controller: 'HaeftelseCtrl'
    }).
       when('/haeftelse2', {
        templateUrl: 'views/haeftelse2.html',
        controller: 'Haeftelse2Ctrl'
    }).
       when('/haeftelse3', {
        templateUrl: 'views/haeftelse3.html',
        controller: 'Haeftelse3Ctrl'
    }).
        when('/investering', {
        templateUrl: 'views/investering.html',
        controller: 'InvesteringCtrl'
    }).
      when('/lille', {
        templateUrl: 'views/lille.html',
        controller: 'LilleCtrl'
    }).
    when('/ivs', {
        templateUrl: 'views/ivs.html',
        controller: 'IvsCtrl'
    }).
     when('/aps', {
        templateUrl: 'views/aps.html',
        controller: 'ApsCtrl'
    }).
      when('/enkeltmand', {
        templateUrl: 'views/enkeltmand.html',
        controller: 'EnkeltmandCtrl'
    }).
       when('/is', {
        templateUrl: 'views/is.html',
        controller: 'IsCtrl'
    }).
       when('/as', {
        templateUrl: 'views/as.html',
        controller: 'AsCtrl'
    }).
    when('/ivsinfo', {
        templateUrl: 'views/ivsinfo.html',
        controller: 'IvsinfoCtrl'
    }).
    when('/apsinfo', {
        templateUrl: 'views/apsinfo.html',
        controller: 'ApsinfoCtrl'
    }).
    when('/enkeltmandinfo', {
        templateUrl: 'views/enkeltmandinfo.html',
        controller: 'EnkeltmandinfoCtrl'
    }).
    when('/isinfo', {
        templateUrl: 'views/isinfo.html',
        controller: 'IsinfoCtrl'
    }).
    when('/asinfo', {
        templateUrl: 'views/asinfo.html',
        controller: 'AsinfoCtrl'
    }).
     when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
    }).
      otherwise({
        redirectTo: '/'
    });
}]);


// Question Controllers
myApp.controller('View1Ctrl', function($scope) {

});

myApp.controller('ErfaringCtrl', function($scope) {
		
});

myApp.controller('MedarbejdereCtrl', function($scope) {
		
});

myApp.controller('EjereCtrl', function($scope) {
        
});

myApp.controller('Ejere2Ctrl', function($scope) {
        
});

myApp.controller('Ejere3Ctrl', function($scope) {
        
});

myApp.controller('Ejere4Ctrl', function($scope) {
        
});

myApp.controller('KapitalCtrl', function($scope) {
		
});

myApp.controller('Kapital2Ctrl', function($scope) {
        
});

myApp.controller('Kapital3Ctrl', function($scope) {
        
});

myApp.controller('OmsaetningCtrl', function($scope) {
		
});

myApp.controller('RisikoCtrl', function($scope) {
		
});

myApp.controller('RisikotoCtrl', function($scope) {
        
});

myApp.controller('Risiko3Ctrl', function($scope) {
        
});

myApp.controller('Risiko4Ctrl', function($scope) {
        
});

myApp.controller('InvesteringCtrl', function($scope) {
        
});

myApp.controller('LilleCtrl', function($scope) {
		
});

myApp.controller('OrganisationCtrl', function($scope) {
        
});

myApp.controller('HaeftelseCtrl', function($scope) {
        
});

myApp.controller('Haeftelse2Ctrl', function($scope) {
        
});

myApp.controller('Haeftelse3Ctrl', function($scope) {
        
});

// Company Types Controllers
myApp.controller('IvsCtrl', function($scope) {
		
});

myApp.controller('ApsCtrl', function($scope) {
		
});

myApp.controller('EnkeltmandCtrl', function($scope) {
		
});

myApp.controller('IsCtrl', function($scope) {
		
});

myApp.controller('AsCtrl', function($scope) {
		
});


// Info Controllers
myApp.controller('IvsinfoCtrl', function($scope) {
		
});

myApp.controller('ApsinfoCtrl', function($scope) {
		
});

myApp.controller('EnkeltmandinfoCtrl', function($scope) {
		
});

myApp.controller('IsinfoCtrl', function($scope) {
		
});

myApp.controller('AsinfoCtrl', function($scope) {
		
});

myApp.controller('InfoCtrl', function($scope) {
        
});