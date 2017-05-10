(function () {
'use strict';

angular.module("ShoppingListCHeckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuylist = this;
    toBuylist.items = ShoppingListCheckOffService.getItemsToBuy();
    toBuylist.removeToBuyItem = function (itemIndex) {
        ShoppingListCheckOffService.removeItem(itemIndex);
    }
    toBuylist.itemnametoadd = "";
    toBuylist.quantitytoadd="";
    toBuylist.addItemToBuy = function (){
        ShoppingListCheckOffService.addItem(toBuylist.itemnametoadd, toBuylist.quantitytoadd);
    };
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.items = ShoppingListCheckOffService.getItemsBought();
};

function ShoppingListCheckOffService() {
    var service = this;

    var itemsTobuy = [
       {
           name: "milk",
           quantity: 2
       },
       {
       	name: "wine",
       	quantity: 3
       },
       {
       	name: "eggs",
       	quantity: 6
       },
       {
       	name: "coffee",
       	quantity: 1
       },
       {
       	name:"bread",
       	quantity: 4
       }
    ];
    var boughtItems = [];

    service.addItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            itemsTobuy.push(item);
    };

    service.removeItem = function (itemIndex) {
        var itemtobuy = itemsTobuy[itemIndex];
        boughtItems.push(itemtobuy);
        itemsTobuy.splice(itemIndex, 1);
    };

    service.getItemsToBuy = function () {
        return itemsTobuy;
    };

    service.getItemsBought = function () {
        return boughtItems;
    };
};

})();
