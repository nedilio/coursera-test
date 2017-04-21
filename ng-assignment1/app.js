(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.listText = "";
        $scope.message = "";
        $scope.ChecktooMuch = function () {
            if ($scope.listText == "") {
                $scope.message = "Please enter data first";
                $scope.myStyle={color:'red'};
            } else {
                $scope.arrayOfFood = $scope.listText.split(",");
                $scope.foodCounter = $scope.arrayOfFood.length;
                $scope.myStyle={color:'green'};
                if ($scope.foodCounter < 4) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too Much!";
                };
            };


        };




    }

})();
