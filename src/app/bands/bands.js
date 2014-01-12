/**
 * Created by jbk on 1/11/14.
 */
angular.module('bands', [])
    .config(function($rootScope){
        $scope.bands = $rootScope.data.bands;
})
    .config(function($routeProvider){
        $routeProvider.when('/bands/overview', {
            templateUrl: 'app/bands/bands.ovw.tpl.html',
            controller: 'BandOverViewCtrl'
        });
        $routeProvider.when('/bands/detail/:bandid', {
            templateUrl: 'app/bands/bands.det.tpl.html',
            controller: 'BandDetailsCtrl',
            resolve:{
                band: function($route, Bands){
                    return Bands($scope, $route.current.params.bandid);
                }
            }
        });
    })

    .factory('Bands', function($scope, bandid){
        var retBand;

        for(var band in $scope.bands){
            if(band.id == bandid){
                retBand = band;
            }
           };
        return{
        id: retBand.id,
        bandName: retBand.bandName,
        bandGenre: retBand.bandGenre,
        baseScore: retBand.baseScore
        }
    })


    .controller('BandDetailsCtrl', function($scope, band){
        $scope.band = band;
    })

    .controller('BandOverViewCtrl', function($scope){

    })
