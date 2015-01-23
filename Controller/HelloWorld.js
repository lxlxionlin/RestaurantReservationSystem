/**
 * Created by kray on 2015/1/17.
 */
var test = angular.module('test',[]);
test.controller('TestController',['$scope',function($scope)
{$scope.items =
    [{name :'Hello'},
        {name :'World'}]
}])