import { PriceModel } from "./PriceModel"
import { ShoppingCartModel } from "./ShoppingCartModel"

export class PriceView {

    private prices : PriceModel
    private shoppingCart : ShoppingCartModel

    /**
     * Setup a PriceView to an existing PriceModel and ShoppingCartModel
     * 
     * @param prices 
     * @param shoppingCart 
     */
    constructor(prices: PriceModel, shoppingCart: ShoppingCartModel){
        this.prices = prices
        this.shoppingCart = shoppingCart
    }

    /**
     * Displays the total of the cart
     */
    displayTotalPrice() {
        this.prices.calculateTotal();
        console.log(`Shopping Cart Total: ${this.prices.getTotal()}`);
    }   

    /**
     * Displays the subtotals of the cart
     */
    private displaySubTotals(){
        for(let i=0; i < this.prices.getSubtotal().length; i++){
            console.log(`Product: ${this.shoppingCart.getShoppingCart()[i].getName()}`)
            console.log(`Quantity: ${this.shoppingCart.getShoppingCart()[i].getQuantity()}`)
            console.log(`Subtotal: ${this.prices.calculateSubtotals()}`); 
        }
    }
}

/*
    TODO 
        -> private displaySubTotals() --- Should return the subtotals of an item
        -> displaySubtotals() --- creat the public method

*/
