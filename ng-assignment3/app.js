(function() {
    'use strict';

    angular.module("NarrowItDownApp", [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$injector = ['MenuSearchService', '$scope'];

    function NarrowItDownController(MenuSearchService) {

        var searchList = this;
        searchList.validitems = [];
        var promise = MenuSearchService.getMatchedMenuItems();
        promise.then(function(response) {
                searchList.items = response.data;
            })
            .catch(function(error) {
                console.log("Something went terribly wrong.");
            });

        searchList.searchWord = function(keyword) {
        	console.log ('palabra clave a buscar: ' + keyword);
        	// console.log (searchList.items.menu_items);
            for (var i = 0; i < searchList.items.menu_items.length; i++) {
                var name = searchList.items.menu_items[i].name;
                // console.log(name.toLowerCase().indexOf(keyword));
                console.log(name);
                if (name.toLowerCase().indexOf(keyword) !== -1) {
                	// console.log(searchList.items.menu_items[i]);
                    // return true;
                    searchList.validitems.push(searchList.items.menu_items[i]);
                    // console.log(searchList.validitems);
                }
            }

            // return false;
            console.log(searchList.validitems);
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