/**
 * Created by jbk on 1/11/14.
 */

angular.module('routing', [])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {templateUrl: 'common/mainMenu.tpl.html'})
            .when('/festival/overview', {templateUrl: 'app/festival/festival.ovw.tpl.html'})
            .when('/festival/detail', {templateUrl: 'app/festival/festival.det.tpl.html'})



            .otherwise({RedirectTo: '/'});
    })