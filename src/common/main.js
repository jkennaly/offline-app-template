/**
 * Created by jbk on 1/8/14.
 */

angular.module('gametime', [])

.config(function($rootScope){
        var data = JSON.parse(window.localStorage.getItem('data'));
        if(data.length > 0){
            window.localStorage.removeItem('data');
            if(data.followedUsers.length > 0){
                window.localStorage.setItem('followedUsers', JSON.stringify(data.followedUsers));
            }
            if(data.unfollowedUsers.length > 0){
                window.localStorage.setItem('unfollowedUsers', JSON.stringify(data.unfollowedUsers));
            }
            if(data.bands.length > 0){
                window.localStorage.setItem('bands', JSON.stringify(data.bands));
            }
            if(data.sets.length > 0){
                window.localStorage.setItem('sets', JSON.stringify(data.sets));
            }
            if(data.stages.length > 0){
                window.localStorage.setItem('stages', JSON.stringify(data.stages));
            }
            if(data.layouts.length > 0){
                window.localStorage.setItem('layouts', JSON.stringify(data.layouts));
            }
            if(data.days.length > 0){
                window.localStorage.setItem('days', JSON.stringify(data.days));
            }
            if(data.pregameSelf.length > 0){
                window.localStorage.setItem('pregameSelf', JSON.stringify(data.pregameSelf));
            }
            if(data.pregameFollowed.length > 0){
                window.localStorage.setItem('pregameFollowed', JSON.stringify(data.pregameFollowed));
            }
            if(data.updateURL.length > 0){
                window.localStorage.setItem('updateURL', JSON.stringify(data.updateURL));
            }
            var myGametimeUpdate = JSON.parse(localStorage.getItem('myGametimeUpdate'));
            if(myGametimeUpdate.length == 0){
                var firstUpdate = {
                    action:'submitUpdate'
                }
                window.localStorage.setItem('myGametimeUpdate', JSON.stringify(firstUpdate));
            }
        }
})

