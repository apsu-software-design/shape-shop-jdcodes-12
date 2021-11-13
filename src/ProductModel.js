"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
var ProductModel = /** @class */ (function () {
    /**
     * Sets up a new product with a quanity.
     * If no quantity proviuded, defaults to 1 product bought.
     * If no description provided, defaults to empty string
     *
     * @param name name of product
     * @param price price of product
     * @param description description of the product
     * @param quantity how many products to buy
     */
    function ProductModel(name, price, description, quantity) {
        if (name === void 0) { name = ""; }
        if (price === void 0) { price = 0; }
        if (description === void 0) { description = ""; }
        if (quantity === void 0) { quantity = 1; }
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }
    /**
     * Returns a product's name
     *
     * @returns name of the product
     */
    ProductModel.prototype.getName = function () {
        return this.name;
    };
    /**
     * Returns a product's price
     *
     * @returns price of the product
     */
    ProductModel.prototype.getPrice = function () {
        return this.price;
    };
    /**
     * Returns a product's description
     *
     * @returns description of the product
     */
    ProductModel.prototype.getDescription = function () {
        return this.description;
    };
    /**
     * Returns a product's quantity
     *
     * @returns quantity of a product
     */
    ProductModel.prototype.getQuantity = function () {
        return this.quantity;
    };
    /**
     * Sets a product's name
     *
     * @param name new name to give a product
     */
    ProductModel.prototype.setName = function (name) {
        this.name = name;
    };
    /**
     * Sets a product's price
     * @param price new price to give a product
     */
    ProductModel.prototype.setPrice = function (price) {
        this.price = price;
    };
    /**
     * Sets a product's description
     *
     * @param description new description to give a product
     */
    ProductModel.prototype.setDescription = function (description) {
        this.description = description;
    };
    /**
     * Sets a product's quantity
     *
     * @param quantity new quantity to give a product
     */
    ProductModel.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    return ProductModel;
}());
exports.ProductModel = ProductModel;
