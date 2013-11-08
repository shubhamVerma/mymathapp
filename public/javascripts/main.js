angular
    .module('myApp', ['ngResource'])
	.config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/javascripts/views/menu.html',
          controller: 'Menu'
        })
      	.when('/level/:id', {      //*************   level1
          templateUrl: '/javascripts/views/submenu.html',
          controller: 'SubMenu'
        })
        .when('/level/:id/:type', {  //**********   level1/add
          templateUrl: '/javascripts/views/problems.html',
          controller: 'Problems'
        });
    })
	.controller('Menu', function ($scope) {
      $scope.levels = [
        { name: 'Level 1',   url: '/level/one'} ,
        { name: 'Level 2',   url: '/level/two'} ,
        { name: 'Level 3', url: '/level/three'}
      ];
    })
	.controller('SubMenu', function ($scope, $routeParams) {
      $scope.url = {
        add:  '/level/' + $routeParams.id + '/add',
        sub:  '/level/' + $routeParams.id + '/sub',
        mul:  '/level/' + $routeParams.id + '/mul',
        div:  '/level/' + $routeParams.id + '/div',
        rand: '/level/' + $routeParams.id + '/rand',
      };
    })
	.controller('Problems', function ($scope, $resource, $routeParams) {
      
      var level = $routeParams.id;
      var type = $routeParams.type;
      var url  = '/api/v1/problems?';
      
      if(type === 'rand')
      	url += 'level=' + level;
      else
      	url += 'level=' + level + '&type=' + type;
      
      var probs = $resource(url);
      $scope.problems = probs.query();
	});
