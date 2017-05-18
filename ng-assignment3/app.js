(function () {
    'use strict';

    angular.module("NarrowItDownApp", [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems);

    //    function FoundItems() {
    //        var ddo = {
    //            templateUrl: 'founditems.html'
    //        }
    //        return ddo;
    //    }
    function FoundItems() {
        var ddo = {
            templateUrl: 'founditems.html',
            scope: {
                items: '<',
                //                myTitle: '@title',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    NarrowItDownController.$injector = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {

        var list = this;

        //        var menuSearch = MenuSearchService;

        list.items = function () {
            list.found = undefined;
            MenuSearchService.getMatchedMenuItems(list.word)
                .then(function (result) {
                    list.found = result;
                    console.log(list.found);
                })
                .catch(function (error) {
                    console.log('server error1');
                });
        };
        list.removeItem = function (index) {
            list.found.splice(index, 1);
        };

    }; //end controller

    MenuSearchService.$injector = ['$http'];

    function MenuSearchService($http) {
        var service = this;
        service.getMatchedMenuItems = function (keyword) {
            return $http({
                    method: "GET",
                    url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
                })
                .then(function (result) {
                    // process result and only keep items that match
                    var allItems = result.data.menu_items;
                    //                return true;
                    //                    return console.log(keyword);
                    if (keyword !== undefined) {
                        keyword = keyword.toLowerCase();
                    }
                    var foundItems = [];
                    for (var i = 0; i < allItems.length; i++) {
                        var name = allItems[i].name;
                        if (name.toLowerCase().indexOf(keyword) !== -1) {
                            foundItems.push(allItems[i]);
                        }
                    }
                    return foundItems;
                })
                .catch(function () {
                    return false;
                });
        }; //end of getMatchedMenuItems
    }; //end service



})();
