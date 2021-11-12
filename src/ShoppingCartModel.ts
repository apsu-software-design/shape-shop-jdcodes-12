
import { ProductModel } from "./ProductModel"
export class ShopppingCartModel {
    
    private shoppingCart : ProductModel[]

    ShoppingCartModel(){
        this.shoppingCart = []
    }

    adddProductToCart(product: ProductModel) : void {

    }

    removeProductFromCart(product: ProductModel) : void {

    }

    clearCart() : void {
    
    }
}