import { ShoppingCartModel } from "./ShoppingCartModel";
export class ShoppingCartView{
    
    private cart : ShoppingCartModel
    ShopingCartView(shoppingCart : ShoppingCartModel){ 
        this.cart = shoppingCart
    }

    /**
     * Displays current cart contents to user
     */
    displayCart(){
        console.log('\t===== Current items in cart =====\n')
        for(let i=0; i < 4; i++){   //Fix later
            console.log(`Item ${i+1} --\n`)
            console.log('Name: ')
            console.log('Price: ')
            console.log('Description:\n')
        }
        console.log('\n')
    }
}