import { timingSafeEqual } from "crypto";
import { ProductModel } from "./ProductModel";
import { ShoppingCartModel } from "./ShoppingCartModel";

export class PriceModel {

    private shoppingCart : ShoppingCartModel
    private subtotals : number[]
    private total : number 
    private productSubtotals : number

    /**
     * Initialize a new PriceModel to a current shopping cart
     * 
     * @param shoppingCart a shopping cart to manipulate
     */
    constructor(shoppingCart: ShoppingCartModel) {
        this.shoppingCart = shoppingCart
        this.subtotals = []
        this.total = 0.0
    }
    
  

    /**
     * Calculates the total for a shopping cart
     */
    calculateTotal() : void {
        this.subtotals.forEach((subtotal) => this.total += subtotal)
    }

    /**
     * Adjust the subtotal for a product
     * 
     * @param product 
     * @param productUnitPrice 
     * @param quantityBuying 
     */
    /*
    adjustSubtotal(product: ProductModel, productUnitPrice: number, quantityBuying: number) : void {
        let productToFind = product.getName().toLowerCase()
        for(let i=0; i < this.shoppingCart.getShoppingCart().length; i++){

            if(this.shoppingCart.getShoppingCart()[i].getName().toLowerCase() === productToFind){

                let foundProudct = this.shoppingCart.getShoppingCart()[i]
                foundProudct.setPrice(productUnitPrice)
                foundProudct.setQuantity(quantityBuying)

                this.calcAllSubtotals(this.shoppingCart) 
            }
        }
    }
    */
    
    /**
     * Clears the subtotals, defaults all to 0.0
     */
    clearSubtotals() : void {
        this.subtotals.forEach((subtotal)=> this.total = 0.0)
    }

    /**
     * Resets the total of this PriceModel. Total set to 0.0
     */
    resetTotal() : void {
        this.total = 0.0
    }

    /**
     * Returns the subtotals of all products in the cart
     * 
     * @returns cart subtotals
     */
    getSubtotal() : number[] {
        return this.subtotals
    }

    /**
     * Returns the total of the shopping cart
     * 
     * @returns the total of cart
     */
    getTotal(){
        return this.total;
    }

    calculateSubtotals(shoppingCartModel: ShoppingCartModel) : void {
        for(let i=0; i < shoppingCartModel.getShoppingCart().length; i++){
           this.subtotals.push(shoppingCartModel.getShoppingCart()[i].getPrice() *
            shoppingCartModel.getShoppingCart()[i].getQuantity())
        }
    }
}