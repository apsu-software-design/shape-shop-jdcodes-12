"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartView = void 0;
var ShoppingCartView = /** @class */ (function () {
    /**
     * Initialize a shopping cart to the shopping cart view
     *
     * @param shoppingCart shopping cart to link with View
     */
    function ShoppingCartView(shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
    /**
     * Displays current cart information: Product name, Product Price, Quantity in Cart
     */
    ShoppingCartView.prototype.displayCurrentCartState = function () {
        console.log("\n=== Current Items In Cart ===");
        for (var i = 0; i < this.shoppingCart.getShoppingCart().length; i++) {
            console.log("Name: " + this.shoppingCart.getShoppingCart()[i].getName());
            console.log("Price: " + this.shoppingCart.getShoppingCart()[i].getPrice());
            console.log("Quantity: " + this.shoppingCart.getShoppingCart()[i].getQuantity() + "\n");
        }
    };
    return ShoppingCartView;
}());
exports.ShoppingCartView = ShoppingCartView;
