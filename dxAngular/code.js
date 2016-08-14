var myApp = angular.module('myApp', ['dx']);
myApp.controller('demoController', function ($scope) {
    $scope.btn = {
        text: "Click",
        onClick: function () {
            alert("Click!");
        }
    }
})