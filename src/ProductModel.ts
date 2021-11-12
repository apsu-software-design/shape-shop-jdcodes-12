import { stringify } from "querystring"

export class ProductModel {
    private name : string 
    private price : number 
    private description : string 
    private quantity : number 


    ProductModel(name: string, price: number, description: string, quantity: number){
        this.name = name
        this.price = price
        this.description = description
        this.quantity = quantity
    }

    getName() : string {
        return this.name
    }

    getPrice() : number {
        return this.price
    }

    getDescription() : string {
        return this.description
    }

    getQuantity() : number {
        return this.quantity
    }
    
    setName(name: string) : void{
        this.name = name
    }

    setPrice(price: number) : void {
        this.price = price
    }

    setDescription(description: string) : void {
        this.description = description
    }
    
    setQuantity(quantity: number) : void {
        this.quantity = quantity
    }
}