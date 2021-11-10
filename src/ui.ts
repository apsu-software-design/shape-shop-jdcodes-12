//User Interface for The Shopping Cart 
//@author James Church

import readlineSync = require('readline-sync'); //for easier repeated prompts
import {Product} from './products';

// Hey look. It's a global variable. This is totally cool, right?
let shopping_cart: Product[] = [];
let quantity_cart: number[] = [];

/**
 * Function to run the UI
 */
export function start() {
  showMainMenu();
}

/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
  while(true){ //run until we exit
    console.log(`Welcome to the Shape Store! We offer the best shapes! Pick an option:
  1. Add an item to the cart.
  2. Remove an item to the cart.
  3. View the items in the cart.
  4. View the price of all items.
  5. Quit.`);

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; //stop looping, thus leaving method
    }

    switch(response) { //handle each response
      case '1': //addItemToCart(); break;
      case '2': //removeItemFromCart(); break;
      case '3': //viewItemsInCart(); break;
      case '4': //viewCartTotal(); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
  }
}