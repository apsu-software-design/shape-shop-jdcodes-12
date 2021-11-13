"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceModel = void 0;
var PriceModel = /** @class */ (function () {
    /**
     * Initialize a new PriceModel to a current shopping cart
     *
     * @param shoppingCart a shopping cart to manipulate
     */
    function PriceModel(shoppingCart) {
        this.shoppingCart = shoppingCart;
        this.subtotals = [];
        this.total = 0.0;
    }
    /**
     * Calculates the subtotals of all products in the cart
     */
    PriceModel.prototype.calculateSubtotals = function () {
        this.shoppingCart.getShoppingCart().forEach(this.calcSubtotalHelper(this.shoppingCart));
    };
    /**
     * Calculates the total for a shopping cart
     */
    PriceModel.prototype.calculateTotal = function () {
        var _this = this;
        this.subtotals.forEach(function (subtotal) { return _this.total += subtotal; });
    };
    /**
     * Adjust the subtotal for a product
     *
     * @param product
     * @param productUnitPrice
     * @param quantityBuying
     */
    /*
    adjustSubtotal(product: ProductModel, productUnitPrice: number, quantityBuying: number) : void {
        let productToFind = product.getName().toLowerCase()
        for(let i=0; i < this.shoppingCart.getShoppingCart().length; i++){

            if(this.shoppingCart.getShoppingCart()[i].getName().toLowerCase() === productToFind){

                let foundProudct = this.shoppingCart.getShoppingCart()[i]
                foundProudct.setPrice(productUnitPrice)
                foundProudct.setQuantity(quantityBuying)

                this.calcAllSubtotals(this.shoppingCart)
            }
        }
    }
    */
    /**
     * Clears the subtotals, defaults all to 0.0
     */
    PriceModel.prototype.clearSubtotals = function () {
        var _this = this;
        this.subtotals.forEach(function (subtotal) { return _this.total = 0.0; });
    };
    /**
     * Resets the total of this PriceModel. Total set to 0.0
     */
    PriceModel.prototype.resetTotal = function () {
        this.total = 0.0;
    };
    /**
     * Returns the subtotals of all products in the cart
     *
     * @returns cart subtotals
     */
    PriceModel.prototype.getSubtotal = function () {
        return this.subtotals;
    };
    /**
     * Returns the total of the shopping cart
     *
     * @returns the total of cart
     */
    PriceModel.prototype.getTotal = function () {
        return this.total;
    };
    /**
     * Gets the subtotal of a passed product
     *
     * @param product product to find
     */
    PriceModel.prototype.getAProductSubtotal = function (product) {
    };
    /**
     * private helper method to calculate subtotals. Used in calcSubtotals()
     *
     * @param shoppingCart the shopping cart to operate on
     */
    PriceModel.prototype.calcSubtotalHelper = function (shoppingCart) {
        if (this.subtotals.length !== 0) {
            this.subtotals.splice(0);
        }
        else {
            for (var i = 0; i < shoppingCart.getShoppingCart().length; i++) {
                var sub = (shoppingCart.getShoppingCart()[i].getPrice() *
                    shoppingCart.getShoppingCart()[i].getQuantity());
                this.subtotals.push(sub);
            }
        }
    };
    PriceModel.prototype.getAProductSubTotal = function () {
        //Loop through, get total
    };
    return PriceModel;
}());
exports.PriceModel = PriceModel;
/*
    TODO
        -> priavte getAProductSubTotal()
            find product in cart
            return its subtotal

        ->
*/ 
