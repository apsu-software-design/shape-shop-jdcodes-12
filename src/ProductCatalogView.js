"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCatalogView = void 0;
var ProductCatalogView = /** @class */ (function () {
    function ProductCatalogView(productCatalog) {
        this.productCatalog = productCatalog;
    }
    ProductCatalogView.prototype.displayCurrentProductCatalogState = function () {
        console.log('=== Shape Shops Current Product Catalog ===');
        this.displayCatalogContents(this.productCatalog);
    };
    ProductCatalogView.prototype.displayCatalogContents = function (productCatalog) {
        for (var i = 0; i < this.productCatalog.getProductCatalog().length; i++) {
            console.log("Name: " + this.productCatalog.getProductCatalog()[i].getName());
            console.log("Price: " + this.productCatalog.getProductCatalog()[i].getPrice());
            console.log("Description: " + this.productCatalog.getProductCatalog()[i].getDescription() + "\n");
        }
    };
    return ProductCatalogView;
}());
exports.ProductCatalogView = ProductCatalogView;
