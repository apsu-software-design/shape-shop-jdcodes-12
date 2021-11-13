"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartModel = void 0;
var ShoppingCartModel = /** @class */ (function () {
    /**
     * Initialize an empty shopping cart
     */
    function ShoppingCartModel() {
        this.shoppingCart = [];
    }
    /**
     * Adds a product to the shopping cart
     *
     * @param product the product to add
     */
    ShoppingCartModel.prototype.addProductToCart = function (product) {
        this.shoppingCart.push(product);
    };
    /**
     * Removes a product from the shopping cart
     *
     * @param product the product to be removed
     */
    ShoppingCartModel.prototype.removeProductFromCart = function (product) {
        this.shoppingCart.forEach(this.removeProductHelper(product));
    };
    /**
     * Returns the shopping cart
     *
     * @returns the current shopping cart
     */
    ShoppingCartModel.prototype.getShoppingCart = function () {
        return this.shoppingCart;
    };
    /**
     * Clears the current cart
     */
    ShoppingCartModel.prototype.clearCart = function () {
        this.shoppingCart.splice(0);
    };
    /**
     * private helper function for removeProductFromCart()
     *
     * @param product the product to remove
     */
    ShoppingCartModel.prototype.removeProductHelper = function (product) {
        var _this = this;
        this.shoppingCart.forEach(function (value, index) {
            if (value == product)
                _this.shoppingCart.splice(index, 1);
        });
    };
    return ShoppingCartModel;
}());
exports.ShoppingCartModel = ShoppingCartModel;
