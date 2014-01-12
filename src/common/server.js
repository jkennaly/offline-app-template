/**
 * Created by jbk on 1/11/14.
 */
angular.module('server', [])
    .config(function($scope){
        $scope.updateURL = JSON.parse(localStorage.getItem('data')).updateURL;
    })

    .controller('GametimeUpdateCtrl', function($scope) {
        //If it has been more than a minute since updating, and there is network access, update gametime localStorage


        var updateInterval = 60;
        var prevTime;
        var curTime;
        if(curTime > (prevTime + updateInterval) && networkAccess == true){
            var myGametimeUpdate = JSON.parse(localStorage.getItem('myGametimeUpdate'));
            var firstUpdate = {
                action:'submitUpdate'
            }
            window.localStorage.setItem('myGametimeUpdate', JSON.stringify(firstUpdate));
            $http.post($scope.updateURL, myGametimeUpdate)
                .success(function(data){
                    window.localStorage.setItem('gametime', JSON.stringify(data));
                    $rootScope.gametimeMessages = JSON.parse(localStorage.getItem('gametime'));
                })
                .error(function(){
                    var recentUpdates = JSON.parse(localStorage.getItem('myGametimeUpdate'));
                    myGametimeUpdate.append(recentUpdates);
                    window.localStorage.setItem('myGametimeUpdate', JSON.stringify(myGametimeUpdate));
                })
        }


    })