import { ProductModel} from './ProductModel'
export class ShoppingCartModel {
    private shoppingCart : ProductModel[]
    //Quantity

    ShoppingCartModel(){
        this.shoppingCart = []
    }

    /**
     * Adds a product to the shopping cart
     * 
     * @param product the product to add to the shopping cart
     * @returns void if successfully added, an error message if product exists already
     */
    addProduct(product : ProductModel) : void | string {
        
        for (let i=0; i < this.shoppingCart.length; i++){
            if(product.getProductName() == this.shoppingCart[i].getProductName()){
                return `${product.getProductName} is already in the cart!`
            }
        }
    }

    removeProduct(product : ProductModel) {
        //Iterate & remove ith element
    }

    /**
     * Adjusts a product's quantity
     * 
     * @param product the product to update
     */
    adjustProductQuantity(product : ProductModel){
        //adjust the quantity
    }

    /**
     * Adjusts a product's name
     * @param product the product to update
     */
    adjustProductName(product : ProductModel){

    }

    /**
     * Adjusts a product's description
     * 
     * @param product  the product to update
     */
    adjustProductDescription(product : ProductModel){

    }

    /**
     * Clears the entire shopping cart
     */
    clearCart() : void {
        for(let i=0; i < this.shoppingCart.length; i++){
            this.shoppingCart.pop()
        }
    }

    
}