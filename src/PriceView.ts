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
     * Displays the subtotals of all items in the cart
     */
    displaySubtotals() : void{
        console.log('=== Subtotals Per Product ===\n')
        this.displaySubTotals()
        
        
    }
    /**
     * Displays the total of the cart
     */
    displayTotalPrice() : void {
        this.prices.calculateTotal();
        console.log(`Shopping Cart Total: ${this.prices.getTotal()}`);
    }   

    /**
     * Displays the subtotals of the cart
     */
    private displaySubTotals() : void {
        for(let i=0; i < this.prices.getSubtotal().length; i++){
            console.log(`Product: ${this.shoppingCart.getShoppingCart()[i].getName()}`)
            console.log(`Quantity: ${this.shoppingCart.getShoppingCart()[i].getQuantity()}`)
            console.log(`Subtotal: ${this.prices.getSubtotal()[i]}\n`); 
        }
    }
}
