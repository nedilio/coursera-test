(function () {
    'use strict';

    angular.module("NarrowItDownApp", [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$injector = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {

        var searchList = this;
//        var menuSearch = MenuSearchService;

        searchList.items = function () {
searchList.foundItems = undefined;
        MenuSearchService.getMatchedMenuItems(searchList.word)
            .then(function(result){
                searchList.foundItems = result;
            console.log(searchList.foundItems);
            })
            .catch(function(error){
                console.log('server error1');
            });
        };

    };

    MenuSearchService.$injector = ['$http'];

    function MenuSearchService($http) {
        var service = this;
        service.getMatchedMenuItems = function (keyword) {
            return $http({
                method: "GET",
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function (result) {
                // process result and only keep items that match
                var allItems = result.data.menu_items;
                //                return true;
                keyword = keyword.toLowerCase();
                var foundItems = [];
                for (var i = 0; i < allItems.length; i++) {
                    var name = allItems[i].name;
                    if (name.toLowerCase().indexOf(keyword) !== -1) {
                        foundItems.push(allItems[i]);
                    }
                }
                //                return console.log(service);
                return foundItems;
            });
        }; //end of getMatchedMenuItems
    }; //end service



})();
