import { ShoppingCartModel } from "./ShoppingCartModel"

export class ShoppingCartView {

    private shoppingCart : ShoppingCartModel
    
    /**
     * Initialize a shopping cart to the shopping cart view
     * 
     * @param shoppingCart shopping cart to link with View
     */
    constructor(shoppingCart : ShoppingCartModel) {
        this.shoppingCart = shoppingCart
    }

    /**
     * Displays current cart information: Product name, Product Price, Quantity in Cart
     */
    displayCurrentCartState() {
        console.log("Current Items In Cart...")
        for(let i=0; i < this.shoppingCart.getShoppingCart().length; i++){
            console.log(`Name: ${this.shoppingCart.getShoppingCart()[i].getName()}`)
            console.log(`Price: ${this.shoppingCart.getShoppingCart()[i].getPrice()}`)
            console.log(`Quantity: ${this.shoppingCart.getShoppingCart()[i].getQuantity()}`)
        }
    }
}