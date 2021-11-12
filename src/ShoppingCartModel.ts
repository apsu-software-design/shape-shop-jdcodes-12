
import { ProductModel } from "./ProductModel"
export class ShopppingCartModel {
    
    private shoppingCart : ProductModel[]

    ShoppingCartModel(){
        this.shoppingCart = []
    }

    addProductToCart(product: ProductModel) : void {
        this.shoppingCart.push(product)
    }

    removeProductFromCart(product: ProductModel) : void {
        
        this.shoppingCart.forEach(this.removeProduct(product))
    }
 
    getShoppingCart() {
        return this.shoppingCart
    }

    clearCart() : void {
        this.shoppingCart.splice(0);
    }

    private removeProduct(product: ProductModel) : any {
            this.shoppingCart.forEach((value,index)=>{
                if(value==product) this.shoppingCart.splice(index,1)})
    }
}