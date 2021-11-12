import { ShopppingCartModel } from "./ShoppingCartModel";

export class ShoppingCartView {
    private shoppingCart : ShopppingCartModel

    ShoppingCartView(shoppingCart : ShopppingCartModel) {
        this.shoppingCart = shoppingCart
    }

    displayCurrentCartState() {
        console.log("Current Items In Cart...")
        for(let i=0; i < this.shoppingCart.getShoppingCart().length; i++){
            console.log(`Name: ${this.shoppingCart.getShoppingCart()[i].getName()}`)
            console.log(`Price: ${this.shoppingCart.getShoppingCart()[i].getPrice()}`)
            console.log(`Quantity: ${this.shoppingCart.getShoppingCart()[i].getQuantity()}`)
        }
    }
}