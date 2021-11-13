"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCatalogModel = void 0;
var ProductModel_1 = require("./ProductModel");
var ProductCatalogModel = /** @class */ (function () {
    /**
     * Initialize a new product catalog with 3 shapes:
     * Square   - 3.5
     * Circle   - 4.5
     * Triangle - 5.5 -
     */
    function ProductCatalogModel() {
        this.productCatalog = [];
        this.productCatalog.push(new ProductModel_1.ProductModel('Triangle', 3.5, 'Three Sided Glory!'));
        this.productCatalog.push(new ProductModel_1.ProductModel('Square', 4.5, 'Four Square\'s Best Friend!'));
        this.productCatalog.push(new ProductModel_1.ProductModel('Pentagon', 5.5, 'Penty, Penty, Gone!'));
    }
    /**
     * Adds a product to the product catalog
     *
     * @param product product to add to catalog
     */
    ProductCatalogModel.prototype.addProductToCatalog = function (product) {
        this.productCatalog.push(product);
    };
    /**
     * Removes a produt from the product catalog.
     *
     * @param product product to remove from catalog
     */
    ProductCatalogModel.prototype.removeProductFromCatalog = function (product) {
        this.removeProductHelper(product);
    };
    /**
     * Updates the name of the passed product
     *
     * @param product the product to find
     * @param newName the new name to give product
     */
    ProductCatalogModel.prototype.updateProductNameInCatalog = function (product, newName) {
        var productToFind = product.getName().toLowerCase();
        for (var i = 0; i < this.productCatalog.length; i++) {
            if (this.productCatalog[i].getName().toLowerCase() === productToFind) {
                this.productCatalog[i].setName(newName);
            }
        }
    };
    /**
     * Updates the price of the passed product
     *
     * @param product the product to find
     * @param newPrice the new price to give product
     */
    ProductCatalogModel.prototype.updateProductPriceInCatalog = function (product, newPrice) {
        var productToFind = product.getName().toLowerCase();
        for (var i = 0; i < this.productCatalog.length; i++) {
            if (this.productCatalog[i].getName().toLowerCase() === productToFind) {
                this.productCatalog[i].setPrice(newPrice);
            }
        }
    };
    /**
     * Updates the description of the passed product
     *
     * @param product the product to find
     * @param newDescription the new description to give product
     */
    ProductCatalogModel.prototype.updateProductDescriptionInCatalog = function (product, newDescription) {
        var productToFind = product.getName().toLowerCase();
        for (var i = 0; i < this.productCatalog.length; i++) {
            if (this.productCatalog[i].getName().toLowerCase() === productToFind) {
                this.productCatalog[i].setDescription(newDescription);
            }
        }
    };
    /**
     * Returns the product catalog
     *
     * @returns the current product catalog
     */
    ProductCatalogModel.prototype.getProductCatalog = function () {
        return this.productCatalog;
    };
    /**
     * Helper function to remove a product from the catalog. Used in
     * removeProductFromCatalog()
     *
     * @param product the product to remove
     */
    ProductCatalogModel.prototype.removeProductHelper = function (product) {
        var _this = this;
        var productToRemove = product.getName().toLowerCase();
        this.productCatalog.forEach(function (value, index) {
            if (value.getName().toLowerCase() === productToRemove)
                _this.productCatalog.splice(index, 1);
        });
    };
    return ProductCatalogModel;
}());
exports.ProductCatalogModel = ProductCatalogModel;
