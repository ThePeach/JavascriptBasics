const TAX_RATE = 0.10;
const PHONE_PRICE = 100;
const ACCESSORY_PRICE = 10;
const SPENDING_THRESHOLD = 200;

var bank_account_balance = 1000;

var purchase_amount = null;
var additional_amount = 0;

function calculate_tax(amount) {
    // Calculates the additional amount
    additional_amount = amount * TAX_RATE;

    return additional_amount;


}

function format_price(amount) {
    // Adds dollar sign and rounds to 2 decimal places.
    return "$" + amount.toFixed(2);
}

function checks() {
    if (PHONE_PRICE < bank_account_balance) {
        return true;
    }
    return false;
}

function accessory_check() {
    if (ACCESSORY_PRICE < bank_account_balance) {
        return true;
    }
    return false;
}


function purchase() {
    purchase_amount = 0;

    if (checks()) {
        purchase_amount += PHONE_PRICE;
    }

    if (accessory_check()) {
        purchase_amount += ACCESSORY_PRICE;
    }

    purchase_amount += calculate_tax(purchase_amount);

    console.log("The purchase amount is: " + format_price(purchase_amount));

    if (bank_account_balance > purchase_amount) {
        bank_account_balance -= purchase_amount;
    }

    console.log("Your bank account balance is: $" + bank_account_balance);
}


while (bank_account_balance > 0 && purchase_amount !== 0) {

    purchase();

}
