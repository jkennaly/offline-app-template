/**
 * Created by jbk on 1/8/14.
 */

angular.module('gametime', ['sets', 'bands', 'days', 'stages', 'server', 'people'])

.config(function($rootScope){
    $rootScope.name = "Ari Lerner";
    $rootScope.data = JSON.parse(localStorage.getItem('data'));
    $rootScope.gametimeMessages = JSON.parse(localStorage.getItem('gametime'));
        var firstUpdate = {
            action:'submitUpdate'
        }
        window.localStorage.setItem('myGametimeUpdate', JSON.stringify(firstUpdate));
})

