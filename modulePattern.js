function Basket() {
    // var itemName = [];
    // var itemQuantity = [];

    var basket = {};
    var basketTotal = 0;

    /**
     * Adds the item to the basket, saving it locally
     *
     * @param {Object} item
     * @param {Number} quantity
     */
    function addToBasket( item, quantity ) {
        item.amount = quantity;

        console.log(item);

        // itemName.push(item.label);
        // itemQuantity.push(quantity);
        //
        // console.log(itemName);
        // console.log(itemQuantity);
        // var name = item.label;

        // basket[name] = quantity;
        //
        // console.log(basket);


        // basket[name] = item;
        //
        // console.log(basket);

            // console.log(item);
        // var theObject = item;

        // basket[theObject] = quantity;
        // console.log(basket);

        // basket[quantity] = theObject;

        // console.log(basket);

        basket[item.label] = item;

        console.log(basket);
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
    function removeFromBasket( item, quantity ) {

        // if (basket[item.label].amount === quantity) {
        //     delete basket[item.label];
        //     // return true;
        // }

        if (basket[item.label].amount >= quantity && quantity > 0) {

            basket[item.label].amount -= quantity;


            if (basket[item.label].amount === 0) {
                delete basket[item.label];
                return true;
            }

            return basket[item.label].amount;
        }
        else {
            return false;
        }


            // if (basket[item.label].amount > quantity) {
        //     console.log('hello');
            // basket[item.label].amount -= quantity;
            // return basket[item.label].amount;
        // }

        // console.log(basket);



        // if (item.label in basket) {
        //     basket[item.label].amount -= quantity;
        //
        // }
        //
        // console.log(basket);
        //
        // if (basket[item.label].amount === 0) {
        //     delete basket[item.label];
        // }
        //
        // console.log(basket);


    }

    /**
     * calculates the total of the items in the basket
     *
     * @returns {Number} the total
     */
    function calculateTotal() {
        for (key in basket) {
            var itemTotal = basket[key].cost * basket[key].amount;
            basketTotal += itemTotal;
        }
        return basketTotal;

    }

    /**
     * pretty prints the item in the following format:
     * <Label> (<quantity>/£<cost>) total: £<total>
     *
     * @returns {String}
     */
    function prettyPrintItem( item ) {
    }

    /**
     * Pretty prints each item in the basket and the total at the end
     */
    function prettyPrintBasket() {
    }

    return {
        addToBasket: addToBasket,
        removeFromBasket: removeFromBasket,
        calculateTotal: calculateTotal,
        prettyPrintBasket: prettyPrintBasket
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

var myBasket = Basket();

myBasket.addToBasket(apple, 5 );
myBasket.addToBasket(banana, 2 );
myBasket.addToBasket(cereal, 1 );


myBasket.prettyPrintBasket();
// Apple (5/£0.45) total: £2.25
// Banana (2/£0.3) total: £0.6
// Ceerios (1/£5.15) total: £5.15
// --
// Total: £8
console.log( '' );
// myBasket.removeFromBasket( apple, 1 );
// myBasket.removeFromBasket( cereal, 1 );

myBasket.prettyPrintBasket();
// Apple (4/£0.45) total: £1.8
// Banana (2/£0.3) total: £0.6
// --
// Total: £2.4


myBasket.prettyPrintItem('apple');