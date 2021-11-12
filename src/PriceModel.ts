import { timingSafeEqual } from "crypto";
import { ProductModel } from "./ProductModel";
import { ShopppingCartModel } from "./ShoppingCartModel";

export class PriceModel {

    private shoppingCart : ShopppingCartModel
    private subtotals : number[]
    private total : number 

    PriceModel(shoppingCart: ShopppingCartModel) {
        this.shoppingCart = shoppingCart
        this.subtotals = []
        this.total = 0.0
    }
    
    calculateSubtotals(): void{

    }

    calculateTotal() : void {

    }

    adjustSubtotal(product: ProductModel) : void {

    }
    
    clearSubtotals() : void {

    }

    resetTotal(): void {
        this.total = 0.0
    }

}