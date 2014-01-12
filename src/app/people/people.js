/**
 * Created by jbk on 1/11/14.
 */
angular.module('people', [])
    .config(function($rootScope){
        $scope.people = $rootScope.data.followedUsers;
        $scope.others = $rootScope.data.unfollowedUsers;
        $scope.preGameMessages = $rootScope.data.pregameFollowed;
    })

    .config(function($routeProvider){
        $routeProvider.when('/people/overview', {
            templateUrl: 'app/people/people.ovw.tpl.html',
            controller: 'PeopleOverViewCtrl'
        });
        $routeProvider.when('/people/detail/:userid', {
            templateUrl: 'app/people/people.det.tpl.html',
            controller: 'PeopleDetailsCtrl',
            resolve:{
                person: function($route, People){
                    return People($scope, $route.current.params.userid);
                }
            }
        });
    })

    .factory('People', function($scope, userid){
        var retPerson;

        for(var person in $scope.people){
            if(person.id == userid){
                retPerson = person;
            }
        };
        for(var message in $scope.preGameMessages ){
            if(message.fromuser == retPerson.id){
                retPerson.preGameMessages.append(message);
            }
        }


        return{
            id: retPerson.id,
            userName: retPerson.userName,
            location: retPerson.location,
            preGameMessages: retPerson.preGameMessages,
            gametimeMessages: retPerson.gametimeMessages,
            coordX: retPerson.coordX,
            coordY: retPerson.coordY
        }
    })

    .controller('PeopleDetailsCtrl', function($scope, person){
        $scope.person = person;
    })

    .controller('PeopleOverViewCtrl', function($scope){

    })