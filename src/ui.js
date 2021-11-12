"use strict";
//User Interface for The Shopping Cart 
//@author James Church
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
/**
 * Function to run the UI
 */
function start() {
    showMainMenu();
}
exports.start = start;
/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
    while (true) { //run until we exit
        console.log("\nWelcome to the Shape Store! We offer the best shapes around! \n\n\n  :-------: Pick an option :-------:\n\n  [1] - Add item to shopping cart\n  [2] - Remove an item to the cart.\n  [3] - iew the items in the cart.\n  [4] - View the price of all items\n  [5] - Leave Store");
        var response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break; //stop looping, thus leaving method
        }
        switch (response) { //handle each response
            case '1': //addItemToCart(); break;
            case '2': //removeItemFromCart(); break;
            case '3': //viewItemsInCart(); break;
            case '4': //viewCartTotal(); break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}
