(function() {
    'use strict';

    angular.module("NarrowItDownApp", [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$injector = ['MenuSearchService','$scope'];

    function NarrowItDownController(MenuSearchService) {

        var searchList = this;
        var promise = MenuSearchService.getMatchedMenuItems();
        promise.then(function(response) {
                searchList.items = response.data;
            })
            .catch(function(error) {
                console.log("Something went terribly wrong.");
            });

            searchList.searchWord = function (keyword){
            	 for (var i = 0; i < searchList.items.length; i++) {
      var name = searchList.items[i].name;
      if (name.toLowerCase().indexOf(keyword) !== -1) {
        return true;
      }
    }

    return false;
            };
    };

    MenuSearchService.$injector = ['$http'];

    function MenuSearchService($http) {
        var service = this;
        service.getMatchedMenuItems = function() {
            var response = $http({
                method: "GET",
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            });

            return response;
            // response.then (function(){
            // 	response.data
            // };)
        };
    };


})();