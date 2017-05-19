(function () {
    'use strict';
    angular.module("CyclingModule", [])
        .controller('CyclingController', CyclingController)
        .service('CyclingService', CyclingService);


    CyclingController.$injector = ['CyclingService']

    function CyclingController(CyclingService) {
        var list = this;
        list.cyclist = [];
        CyclingService.getData()
            .then(function(result){
            list.cyclist = result;
            console.log(list.cyclist);
        });
        
    };

    CyclingService.$injector = ['$http'];

    function CyclingService($http) {
        var service = this;
        service.getData = function () {
            return $http({
                    method: "GET",
                    url: 'data/riders_giro.json'
                })
                .then(function (result) {
                    var allItems = result.data;
                    return allItems;
                })
        };

    };
})();
