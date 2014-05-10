/**
 * Created by jbk on 1/11/14.
 */
angular.module('server', [])
    /*
    .config(function($scope){
       $scope.updateURL = JSON.parse(localStorage.getItem('data')).updateURL;
    })
    */

    .controller('GametimeUpdateCtrl', function($scope) {
        //If it has been more than a minute since updating, and there is network access, update gametime localStorage
        $scope.networkUpdate = {
            updateInterval: 60000,
            prevTime: new Date(),
            successTime: new Date()
        }
        $scope.networkUpdate.networkState = navigator.onLine;
        var updateClock = function(){
            $scope.networkUpdate.curTime = new Date();
            $scope.networkUpdate.elapsedTime = ($scope.networkUpdate.curTime - $scope.networkUpdate.prevTime) / 1000;
            if($scope.networkUpdate.elapsedTime > ($scope.networkUpdate.updateInterval/1000)&& $scope.networkUpdate.networkState === true){

                $scope.networkUpdate.prevTime = new Date();
            }
        }
        setInterval(function(){
            $scope.$apply(updateClock);
            $scope.networkUpdate.networkState = navigator.onLine;
        }, 1000);

        /*
        $scope.timeSince = $scope.curTime - $scope.successTime;
        if(curTime > (prevTime + updateInterval) && networkAccess == true){
            $scope.updateInProgress = true;
            var myGametimeUpdate = JSON.parse(localStorage.getItem('myGametimeUpdate'));
            var firstUpdate = {
                action:'submitUpdate'
            }
            window.localStorage.setItem('myGametimeUpdate', JSON.stringify(firstUpdate));
            $http.post($scope.updateURL, myGametimeUpdate)
                .success(function(data){
                    var prevMessages = JSON.parse(localStorage.getItem('gametime'));
                    if(prevMessages.length > 0) {
                        prevMessages.append(data);
                    }
                    else {
                        prevMessages = data;
                    }
                    window.localStorage.setItem('gametime', JSON.stringify(prevMessages));
                    $scope.updateInProgress = false;
                    prevTime = curTime;
                    successTime = curTime;
                })
                .error(function(){
                    var recentUpdates = JSON.parse(localStorage.getItem('myGametimeUpdate'));
                    myGametimeUpdate.append(recentUpdates);
                    window.localStorage.setItem('myGametimeUpdate', JSON.stringify(myGametimeUpdate));
                    $scope.updateInProgress = false;
                    prevTime = curTime;
                })
        }
        */


    })