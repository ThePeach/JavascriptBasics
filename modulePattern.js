function Basket() {
    var basket = [];

    /**
     *
     * @param item
     * @return true if item found in basket array, false otherwise
     */
    function checkPresenceOfItem(item) {
        var indexNo;

        for (indexNo in basket) {

            if (basket[indexNo].label === item.label) {
                return indexNo;
            }
        }
    }

    /**
     * Adds the item to the basket, saving it locally
     *
     * @param {Object} item
     * @param {Number} quantity
     */
    function addToBasket(item, quantity) {
        var indexNo = checkPresenceOfItem(item);

        if (indexNo >= 0) {
            basket[indexNo].amount += quantity;
        } else {
            item.amount = quantity;
            basket.push(item);
        }


    }
        /**
         * Removes the specified item (using its label),
         * or - if the quantity is >= will just subtract the required quantity and return it
         *
         * @param {Object} item
         * @param {Number} quantity
         *
         * @returns {Mixed}
         * true if the item has been removed,
         * false if no object has been removed, or the number of remaining items.
         */
        function removeFromBasket(item, quantity) {
            var indexNo2;

            for (indexNo2 in basket) {
                if (basket[indexNo2].label === item.label) {
                    if (basket[indexNo2].amount >= quantity && quantity > 0) {

                        basket[indexNo2].amount -= quantity;

                        //@TODO remove line later
                        console.log(basket);

                        if (basket[indexNo2].amount === 0) {
                            basket.splice(parseInt(indexNo2), 1);
                            return true;
                        }

                        return basket[indexNo2].amount;
                    }
                    else {
                        return false;
                    }


                }
            }

        }

        /**
         * calculates the total of the items in the basket
         *
         * @returns {Number} the total
         */
        function calculateTotal() {
            var basketTotal = 0;
            var indexNo3;

            for (indexNo3 in basket) {
                basketTotal += basket[indexNo3].cost * basket[indexNo3].amount;
            }
            return basketTotal;

        }

        /**
         * pretty prints the item in the following format:
         * <Label> (<quantity>/£<cost>) total: £<total>
         *
         * @returns {String}
         */
        function prettyPrintItem(item) {

            return item.label + ' (' + item.amount + '/£' + item.cost + ')' + ' total: £' + (item.amount * item.cost).toFixed(2);

        }

        /**
         * Pretty prints each item in the basket and the total at the end
         */
        function prettyPrintBasket() {
            var indexNo4;

            for (indexNo4 in basket) {
                console.log(prettyPrintItem(basket[indexNo4]));
            }

            console.log('--');
            console.log('Total: £' + calculateTotal().toFixed(2));
        }

        return {
            addToBasket: addToBasket,
            removeFromBasket: removeFromBasket,
            calculateTotal: calculateTotal,
            prettyPrintBasket: prettyPrintBasket,
        }
    }


var apple = {
    cost : 0.45,
    label: 'Apple'
};
var banana = {
    cost : 0.30,
    label: 'Banana'
};
var cereal = {
    cost : 5.15,
    label: 'Ceerios'
};

// var myBasket = Basket();
//
// myBasket.addToBasket(apple, 5 );
// myBasket.addToBasket(banana, 2 );
// myBasket.addToBasket(cereal, 1 );
//
//
// myBasket.prettyPrintBasket();
// // Apple (5/£0.45) total: £2.25
// // Banana (2/£0.3) total: £0.6
// // Ceerios (1/£5.15) total: £5.15
// // --
// // Total: £8
// console.log( '' );
// myBasket.removeFromBasket( apple, 1 );
// myBasket.removeFromBasket( cereal, 1 );
//
// myBasket.prettyPrintBasket();
// // Apple (4/£0.45) total: £1.8
// // Banana (2/£0.3) total: £0.6
// // --
// // Total: £2.4

var randomBasket = Basket();

randomBasket.addToBasket(apple, 1);
randomBasket.addToBasket(cereal, 5);
randomBasket.addToBasket(cereal, 10);
randomBasket.addToBasket(banana, 34);

// randomBasket.removeFromBasket(banana,2);

randomBasket.calculateTotal();

randomBasket.prettyPrintBasket();