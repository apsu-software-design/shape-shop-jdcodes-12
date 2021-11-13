"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceView = void 0;
var PriceView = /** @class */ (function () {
    /**
     * Setup a PriceView to an existing PriceModel and ShoppingCartModel
     *
     * @param prices
     * @param shoppingCart
     */
    function PriceView(prices, shoppingCart) {
        this.prices = prices;
        this.shoppingCart = shoppingCart;
    }
    /**
     * Displays the total of the cart
     */
    PriceView.prototype.displayTotalPrice = function () {
        this.prices.calculateTotal();
        console.log("Shopping Cart Total: " + this.prices.getTotal());
    };
    /**
     * Displays the subtotals of the cart
     */
    PriceView.prototype.displaySubTotals = function () {
        for (var i = 0; i < this.prices.getSubtotal().length; i++) {
            console.log("Product: " + this.shoppingCart.getShoppingCart()[i].getName());
            console.log("Quantity: " + this.shoppingCart.getShoppingCart()[i].getQuantity());
            console.log("Subtotal: " + this.prices.calculateSubtotals());
        }
    };
    return PriceView;
}());
exports.PriceView = PriceView;
/*
    TODO
        -> private displaySubTotals() --- Should return the subtotals of an item
        -> displaySubtotals() --- creat the public method

*/
