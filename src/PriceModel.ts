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
    
    calculateSubtotals(): void {
        this.shoppingCart.getShoppingCart().forEach(this.calcAllSubtotals(this.shoppingCart))
    }

    calculateTotal() : void {
        this.subtotals.forEach((subtotal) => this.total += subtotal)
    }

    //Inefficient
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
    
    clearSubtotals() : void {
        this.subtotals.forEach((subtotal)=> this.total = 0.0)
    }

    resetTotal() : void {
        this.total = 0.0
    }

    private calcAllSubtotals(shoppingCart: ShopppingCartModel) : any {
        
        if(this.subtotals.length !== 0){
            this.subtotals.splice(0)
        }
        else{
            for(let i=0; i < shoppingCart.getShoppingCart().length; i++){
                let sub = (shoppingCart.getShoppingCart()[i].getPrice() * 
                                shoppingCart.getShoppingCart()[i].getQuantity())
            
                this.subtotals.push(sub)
            }
        }   
    }

}