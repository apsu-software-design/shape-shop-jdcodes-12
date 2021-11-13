"use strict";
//User Interface for The Shopping Cart 
//@author James Church
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var ShoppingCartModel_1 = require("./ShoppingCartModel");
var ShoppingCartView_1 = require("./ShoppingCartView");
var ProductModel_1 = require("./ProductModel");
var ProductCatalogModel_1 = require("./ProductCatalogModel");
var ProductCatalogView_1 = require("./ProductCatalogView");
var PriceModel_1 = require("./PriceModel");
var PriceView_1 = require("./PriceView");
var shoppingCartModel;
shoppingCartModel = new ShoppingCartModel_1.ShoppingCartModel();
var productCatalogModel;
productCatalogModel = new ProductCatalogModel_1.ProductCatalogModel();
/**
 * Function to run the UI.
 */
function start() {
    showMainMenu();
}
exports.start = start;
/**
 * The main menu. Contains navigation to each UI of the
 * store system.
 */
function showMainMenu() {
    while (true) {
        console.log('----------------------------------------');
        console.log("\n\n    Welcome to the Shape Store! \n    Where would you like to go? \n\n\n\n  :-------: Main Menu :-------:\n\n  [1] - Go to shopping cart\n  [2] - Go to product catalog\n  [3] - Go to checkout\n  [4] - Leave store");
        var response = readlineSync.question('> ');
        if (response.slice(0, 2).toLowerCase() === ':q') {
            break;
        }
        console.log('');
        switch (response) {
            case '1':
                displayShoppingCartUI();
                break;
            case '2':
                displayProductCatalogUI();
                break;
            case '3':
                displayCheckoutUI();
                break;
            case '4':
                console.log('Thank you for visiting our shop!');
                process.exit(1);
                break;
            default: console.log('Invalid option!');
        }
        console.log('');
    }
}
/**
 * Display the shopping cart UI for customers.
 */
function displayShoppingCartUI() {
    var shoppingCartView;
    while (true) {
        console.log("----------------------------------------");
        console.log("\n\n    Welcome to your Shopping Cart! \n    What would you like to do? \n\n\n\n  :-------: Your Cart :-------:\n\n  [1] - Add a shape to shopping cart\n  [2] - Remove an item from shopping cart\n  [3] - View current items in shopping cart\n  [4] - Proceed to checkout \n  [5] - Clear Cart\n  [6] - Go back to home menu");
        var response = readlineSync.question('> ');
        if (response.slice(0, 2).toLowerCase() === ':q') {
            break;
        }
        console.log('');
        switch (response) {
            case '1':
                var product = promptForProductInfoForCart();
                shoppingCartModel.addProductToCart(product);
                console.log("Product added!");
                break;
            case '2':
                var productName = queryForProduct();
                var productToRemove = new ProductModel_1.ProductModel();
                for (var i = 0; i < shoppingCartModel.getShoppingCart().length; i++) {
                    if (shoppingCartModel.getShoppingCart()[i].getName().toLowerCase() == productName) {
                        productToRemove = shoppingCartModel.getShoppingCart()[i];
                    }
                }
                shoppingCartModel.removeProductFromCart(productToRemove);
                console.log("Product removed!");
                break;
            case '3':
                shoppingCartView = new ShoppingCartView_1.ShoppingCartView(shoppingCartModel);
                shoppingCartView.displayCurrentCartState();
                break;
            case '4':
                displayCheckoutUI();
                break;
            case '5':
                shoppingCartModel.clearCart();
                break;
            case '6':
                showMainMenu();
                break;
            default: console.log('Invalid option!');
        }
        console.log('');
    }
}
/**
 * Display the product catalog UI for users
 */
function displayProductCatalogUI() {
    var productCatalogView;
    while (true) {
        console.log("----------------------------------------");
        console.log("\n\n    Welcome to our Product Catalog! \n    What would you like to do? \n\n\n\n  :-------: Product Catalog :-------:\n\n  [1] - Add an item to product catalog\n  [2] - Remove an item from product catalog\n  [3] - View current products in catalog\n  [4] - Go to your cart\n  [5] - Go back to home menu");
        var response = readlineSync.question('> ');
        if (response.slice(0, 2).toLowerCase() === ':q') {
            break;
        }
        console.log('');
        switch (response) {
            case '1':
                var product = promptForProductInfoForCatalog();
                productCatalogModel.addProductToCatalog(product);
                console.log('Product added to catalog!');
                break;
            case '2':
                var productName = queryForProduct();
                var productToRemove = new ProductModel_1.ProductModel();
                for (var i = 0; i < productCatalogModel.getProductCatalog().length; i++) {
                    if (productCatalogModel.getProductCatalog()[i].getName().toLowerCase() == productName) {
                        productToRemove = productCatalogModel.getProductCatalog()[i];
                    }
                }
                productCatalogModel.removeProductFromCatalog(productToRemove);
                console.log("Product removed from catalog!");
                break;
            case '3':
                productCatalogView = new ProductCatalogView_1.ProductCatalogView(productCatalogModel);
                productCatalogView.displayCurrentProductCatalogState();
                break;
            case '4':
                displayShoppingCartUI();
                break;
            case '5':
                showMainMenu();
                break;
            default: console.log('Invalid option!');
        }
        console.log('');
    }
}
/**
 * Display the Checkout UI for customers
 */
function displayCheckoutUI() {
    var priceView;
    var priceModel;
    while (true) {
        console.log("----------------------------------------");
        console.log("\n\n    Welcome to checkout! \n    What would you like to do? \n\n\n\n  :-------: Checkout :-------:\n\n  [1] - View cart subtotals per product\n  [2] - Get cart total\n  [3] - Reset subtotals\n  [4] - Reset total\n  [5] - Go back to home menu");
        var response = readlineSync.question('> ');
        if (response.slice(0, 2).toLowerCase() === ':q') {
            break;
        }
        console.log('');
        switch (response) {
            case '1':
                priceModel = new PriceModel_1.PriceModel(shoppingCartModel);
                priceModel.calculateSubtotals(shoppingCartModel);
                priceView = new PriceView_1.PriceView(priceModel, shoppingCartModel);
                priceView.displaySubtotals();
                break;
            case '2':
                priceModel = new PriceModel_1.PriceModel(shoppingCartModel);
                priceModel.clearSubtotals();
                priceModel.calculateSubtotals(shoppingCartModel);
                priceModel.calculateTotal();
                priceModel.resetTotal();
                priceView = new PriceView_1.PriceView(priceModel, shoppingCartModel);
                priceView.displaySubtotals();
                priceView.displayTotalPrice();
                break;
            case '3':
                priceModel = new PriceModel_1.PriceModel(shoppingCartModel);
                priceModel.clearSubtotals();
                console.log('Subtotals cleared!');
                break;
            case '4':
                priceModel = new PriceModel_1.PriceModel(shoppingCartModel);
                priceModel.resetTotal();
                console.log('Total reset!');
                break;
            case '5':
                showMainMenu();
                break;
            default: console.log('Invalid option!');
        }
        console.log('');
    }
}
/**
 * Helper function to get a product's name and price, used for shopping cart
 * Description default to ""
 * Quantity default to 1
 *
 * @returns new ProductModel with name and price
 */
function promptForProductInfoForCart() {
    console.log('\nPick a shape to add...');
    console.log('1) Triangle  - $3.50');
    console.log('2) Square    - $4.50');
    console.log('3) Pentagon  - $5.50');
    var choice = readlineSync.question('> ');
    var price = 0.0;
    var name = "";
    switch (parseInt(choice)) {
        case 1:
            price = 3.5;
            name = 'Triangle';
            break;
        case 2:
            price = 4.5;
            name = 'Square';
            break;
        case 3:
            price = 5.50;
            name = "Pentagon";
            break;
    }
    return new ProductModel_1.ProductModel(name, price);
}
/**
 * Helper function to query for product names -- used in remove functions
 *
 * @returns product name to find
 */
function queryForProduct() {
    console.log('Enter a product to find: ');
    var productName = readlineSync.question("> ");
    return productName.toLowerCase();
}
function promptForProductInfoForCatalog() {
    console.log('\nEnter shape details...');
    console.log('Shape name: ');
    var shapeName = readlineSync.question('> ');
    console.log('Shape Price: ');
    var shapePrice = readlineSync.question('> ');
    console.log('Shape Description: ');
    var shapeDescription = readlineSync.question('> ');
    return new ProductModel_1.ProductModel(shapeName, parseInt(shapePrice), shapeDescription);
}
