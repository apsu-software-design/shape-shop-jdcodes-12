
import { ProductModel } from "./ProductModel"
export class ShoppingCartModel {
    
    private shoppingCart : ProductModel[]

    /**
     * Initialize an empty shopping cart 
     */
    constructor(){
        this.shoppingCart = []
    }

    /**
     * Adds a product to the shopping cart
     * 
     * @param product the product to add
     */
    addProductToCart(product: ProductModel) : void {
        this.shoppingCart.push(product)
    }

    /**
     * Removes a product from the shopping cart
     * 
     * @param product the product to be removed
     */
    removeProductFromCart(product: ProductModel) : void {
        this.removeProductHelper(product)
    }
 
    /**
     * Returns the shopping cart
     * 
     * @returns the current shopping cart
     */
    getShoppingCart() {
        return this.shoppingCart
    }

    /**
     * Clears the current cart
     */
    clearCart() : void {
        this.shoppingCart.splice(0);
    }

    /**
     * private helper function for removeProductFromCart()
     * 
     * @param product the product to remove
     */
    private removeProductHelper(product: ProductModel) : void {
            let productToRemove = product.getName().toLowerCase()

           this.shoppingCart.forEach((value, index) => {
           if(value.getName().toLowerCase() == productToRemove) this.shoppingCart.splice(index, 1)});
    }
}