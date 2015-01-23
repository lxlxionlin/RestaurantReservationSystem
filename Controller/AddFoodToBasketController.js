var addFoodToBasket = angular.module('addFood',[]);
addFoodToBasket.controller('addFoodToBasket',['$scope',function($scope){
    $scope.foods = [
        {name:"宫保鸡丁饭",price:"17元",src:"image/gongbaojiding.jpg"},
        {name:"蜜汁鸡腿饭",price:"17元",src:"image/mizhijitui.jpg"},
        {name:"咖喱牛肉饭", price:"20元",src:"image/galiniurou.jpg"},
        {name:"鸡锦牛肉饭",price:"28元",src:"image/shijin.jpg"}
    ];
    $scope.isCaculate = true;
    $scope.setCaculate = function(isCaculate) {
        $scope.isCaculate = isCaculate;
        console.log(isCaculate);
    };
    $scope.foodlist = [];
    $scope.addFood = function(food){
        $scope.foodlist.push(food);
    };
}])