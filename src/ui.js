"use strict";
//User Interface for The Shopping Cart 
//@author James Church
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var ShoppingCartModel_1 = require("./ShoppingCartModel");
var ShoppingCartView_1 = require("./ShoppingCartView");
var ProductModel_1 = require("./ProductModel");
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
        console.log("----------");
        console.log("\n\n    Welcome to the Shape Store! \n    Where would you like to go? \n\n\n\n  :-------: Main Menu :-------:\n\n  [1] - Go to shopping cart\n  [2] - Go to product catalog\n  [3] - Go to checkout\n  [4] - Leave store");
        var response = readlineSync.question('> ');
        if (response.slice(0, 2).toLowerCase() === ':q') {
            break;
        }
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
    var shoppingCartModel;
    var shoppingCartView;
    shoppingCartModel = new ShoppingCartModel_1.ShoppingCartModel();
    while (true) {
        console.log("----------");
        console.log("\n\n    Welcome to your Shopping Cart! \n    What would you like to do? \n\n\n\n  :-------: Your Cart :-------:\n\n  [1] - Add an item to shopping cart\n  [2] - Remove an item from shopping cart\n  [3] - View current items in shopping cart\n  [4] - Proceed to checkout \n  [5] - Go back to home menu");
        var response = readlineSync.question('> ');
        if (response.slice(0, 2).toLowerCase() === ':q') {
            break;
        }
        switch (response) {
            case '1':
                var product = promptForProductInfo();
                shoppingCartModel.addProductToCart(product);
                console.log("Product added!");
                break;
            case '2':
                var productName = queryForProduct();
                var productToRemove = new ProductModel_1.ProductModel();
                for (var i = 0; i < shoppingCartModel.getShoppingCart().length; i++) {
                    if (shoppingCartModel.getShoppingCart()[i].getName() === productName) {
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
    while (true) {
        console.log("----------");
        console.log("\n\n    Welcome to our Product Catalog! \n    What would you like to do? \n\n\n\n  :-------: Product Catalog :-------:\n\n  [1] - Add an item to product catalog\n  [2] - Remove an item from product catalog\n  [3] - View current products in catalog\n  [4] - Go back to home menu");
        var response = readlineSync.question('> ');
        if (response.slice(0, 2).toLowerCase() === ':q') {
            break;
        }
        switch (response) {
            case '1':
            case '2': //Remove item from shopping cart
            case '3': //Display items in cart
            case '4': //Display Product Cart
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
    while (true) {
        console.log("----------");
        console.log("\n\n    Welcome to checkout! \n    What would you like to do? \n\n\n\n  :-------: Checkout :-------:\n\n  [1] - View cart subtotals per product\n  [2] - Get cart total\n  [3] - Go back to home menu");
        var response = readlineSync.question('> ');
        if (response.slice(0, 2).toLowerCase() === ':q') {
            break;
        }
        switch (response) {
            case '1':
            case '2': //Remove item from shopping cart
            case '3':
                showMainMenu();
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}
/**
 * Helper function to get a product's name and price.
 * Description default to ""
 * Quantity default to 1
 *
 * @returns new ProductModel with name and price
 */
function promptForProductInfo() {
    console.log('Enter product information...');
    console.log('Name: ');
    var name = readlineSync.question('> ');
    console.log(name);
    console.log('Price: ');
    var price = readlineSync.question('> ');
    return new ProductModel_1.ProductModel(name, parseInt(price));
}
function queryForProduct() {
    console.log('Enter a product to find: ');
    var productName = readlineSync.question("> ");
    return productName;
}
