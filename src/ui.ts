//User Interface for The Shopping Cart 
//@author James Church

import readlineSync = require('readline-sync') //for easier repeated prompts
import { ShoppingCartModel } from './ShoppingCartModel'
import { ShoppingCartView } from './ShoppingCartView'
import { ProductModel } from './ProductModel'
import { ProductView } from './ProductView'
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
  while(true){ 
    console.log(`\nWelcome to the Shape Store! We offer the best shapes around! \n\n
  :-------: Pick an option :-------:\n
  [1] - Add item to shopping cart
  [2] - Remove an item to the cart
  [3] - View all items in cart 
  [4] - Checkout
  [5] - View shop's product catalog
  [6] - Leave Store`)

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; 
    }

    switch(response) { 
      case '1': //Add item to shopping cart
      case '2': //Remove item from shopping cart
      case '3': //Display items in cart
      case '4': //Display Product Cart
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
  }
}