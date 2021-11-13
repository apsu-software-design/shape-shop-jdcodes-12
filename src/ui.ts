//User Interface for The Shopping Cart 
//@author James Church

import readlineSync = require('readline-sync') //for easier repeated prompts
import { ShoppingCartModel } from './ShoppingCartModel'
import { ShoppingCartView } from './ShoppingCartView'
import { ProductModel } from './ProductModel'
import { ProductView } from './ProductView'
import { ProductCatalogModel } from './ProductCatalogModel'
import { ProductCatalogView } from './ProductCatalogView'
import { PriceModel } from './PriceModel'
import { PriceView  } from './PriceView'
import { clearScreenDown } from 'readline'

let shoppingCartModel : ShoppingCartModel
shoppingCartModel = new ShoppingCartModel()

let productCatalogModel : ProductCatalogModel
productCatalogModel = new ProductCatalogModel()

/**
 * Function to run the UI.
 */
export function start() {  
  showMainMenu();
}

/**
 * The main menu. Contains navigation to each UI of the
 * store system.
 */
function showMainMenu() {  
  while(true){ 
    console.log('----------------------------------------')
    console.log(`\n
    Welcome to the Shape Store! 
    Where would you like to go? \n\n

  :-------: Main Menu :-------:\n
  [1] - Go to shopping cart
  [2] - Go to product catalog
  [3] - Go to checkout
  [4] - Leave store`)

    let response = readlineSync.question('> ')
    if(response.slice(0,2).toLowerCase() === ':q'){
      break; 
    }
    console.log('');
    
    switch(response) { 
      case '1':
          displayShoppingCartUI()
          break

      case '2': 
          displayProductCatalogUI()
          break

      case '3':
          displayCheckoutUI()
          break

      case '4': 
          console.log('Thank you for visiting our shop!');
          process.exit(1)
          break;
      
      default: console.log('Invalid option!');
    }
    console.log('')
  }
}


/**
 * Display the shopping cart UI for customers.
 */
 function displayShoppingCartUI(){

  let shoppingCartView : ShoppingCartView

  while(true){ 
    console.log(`----------------------------------------`)
    console.log(`\n
    Welcome to your Shopping Cart! 
    What would you like to do? \n\n

  :-------: Your Cart :-------:\n
  [1] - Add a shape to shopping cart
  [2] - Remove an item from shopping cart
  [3] - View current items in shopping cart
  [4] - Proceed to checkout 
  [5] - Clear Cart
  [6] - Go back to home menu`)

    let response = readlineSync.question('> ')
    if(response.slice(0,2).toLowerCase() === ':q'){
      break; 
    }
    console.log('');
    
    switch(response) { 
      case '1': 
          let product = promptForProductInfo()
          shoppingCartModel.addProductToCart(product)
          console.log("Product added!")
          break

      case '2':
          let productName = queryForProduct()
          let productToRemove = new ProductModel()
          for(let i=0; i < shoppingCartModel.getShoppingCart().length; i++){
            if(shoppingCartModel.getShoppingCart()[i].getName().toLowerCase() == productName){
              productToRemove = shoppingCartModel.getShoppingCart()[i]
            }
          }
          shoppingCartModel.removeProductFromCart(productToRemove)
          console.log("Product removed!")
          break
          
      case '3':
          shoppingCartView = new ShoppingCartView(shoppingCartModel)
          shoppingCartView.displayCurrentCartState()
          break
          
      case '4':
          displayCheckoutUI()
          break

      case '5':
          shoppingCartModel.clearCart()
          break
          
      case '6': 
          showMainMenu()
          break

      default: console.log('Invalid option!');
    }
    console.log(''); 
  }
}


/**
 * Display the product catalog UI for users
 */
function displayProductCatalogUI(){

  while(true){ 
    console.log(`----------------------------------------`)
    console.log(`\n
    Welcome to our Product Catalog! 
    What would you like to do? \n\n

  :-------: Product Catalog :-------:\n
  [1] - Add an item to product catalog
  [2] - Remove an item from product catalog
  [3] - View current products in catalog
  [4] - Go back to home menu`)

    let response = readlineSync.question('> ')
    if(response.slice(0,2).toLowerCase() === ':q'){
      break; 
    }
    console.log('');
    

    switch(response) { 
      case '1': 
      case '2': //Remove item from shopping cart
      case '3': //Display items in cart
      case '4': //Display Product Cart
      case '5': 
          showMainMenu()
          break
      default: console.log('Invalid option!');
    }
    console.log('');
  }
}


/**
 * Display the Checkout UI for customers
 */
function displayCheckoutUI(){
  while(true){ 
    console.log(`----------------------------------------`)
    console.log(`\n
    Welcome to checkout! 
    What would you like to do? \n\n

  :-------: Checkout :-------:\n
  [1] - View cart subtotals per product
  [2] - Get cart total
  [3] - Go back to home menu`)

    let response = readlineSync.question('> ')
    if(response.slice(0,2).toLowerCase() === ':q'){
      break; 
    }
    console.log('');
    
    switch(response) { 
      case '1': 
      case '2': //Remove item from shopping cart
      case '3':
          showMainMenu()
          break
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
function promptForProductInfo() : ProductModel {
  console.log('\nPick a shape to add...')
  console.log('1) Triangle  - $3.50')
  console.log('2) Square    - $4.50')
  console.log('3) Pentagon  - $5.50')
  let choice = readlineSync.question('> ')
  let price = 0.0
  let name = ""

  switch(parseInt(choice)){
    case 1:
        price = 3.5
        name = 'Triangle'
        break
          
    case 2:
        price = 4.5
        name = 'Square'
        break

    case 3:
        price = 5.50
        name = "Pentagon"
        break
  }

  return new ProductModel(name, price)
}

/**
 * Helper function to query for product names -- used in remove functions
 * 
 * @returns product name to find
 */
function queryForProduct() : string {
    console.log('Enter a product to find: ')
    let productName = readlineSync.question(`> `)
    return productName.toLowerCase()
}

