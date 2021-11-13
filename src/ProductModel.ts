import { stringify } from "querystring"

export class ProductModel {
    private name : string 
    private price : number 
    private description : string 
    private quantity : number 

    /**
     * Sets up a new product with a quanity. 
     * If no quantity proviuded, defaults to 1 product bought.
     * If no description provided, defaults to empty string
     * 
     * @param name name of product
     * @param price price of product
     * @param description description of the product
     * @param quantity how many products to buy
     */
    ProductModel(name: string, price: number, description: string | "", quantity: number | 1){
        this.name = name
        this.price = price
        this.description = description
        this.quantity = quantity
    }

    /**
     * Returns a product's name
     * 
     * @returns name of the product
     */
    getName() : string {
        return this.name
    }

    /**
     * Returns a product's price
     * 
     * @returns price of the product
     */
    getPrice() : number {
        return this.price
    }

    /**
     * Returns a product's description
     * 
     * @returns description of the product
     */
    getDescription() : string {
        return this.description
    }

    /**
     * Returns a product's quantity
     * 
     * @returns quantity of a product
     */
    getQuantity() : number {
        return this.quantity
    }
    
    /**
     * Sets a product's name
     * 
     * @param name new name to give a product
     */
    setName(name: string) : void{
        this.name = name
    }

    /**
     * Sets a product's price
     * @param price new price to give a product
     */
    setPrice(price: number) : void {
        this.price = price
    }

    /**
     * Sets a product's description
     * 
     * @param description new description to give a product
     */
    setDescription(description: string) : void {
        this.description = description
    }
    
    /**
     * Sets a product's quantity 
     * 
     * @param quantity new quantity to give a product
     */
    setQuantity(quantity: number) : void {
        this.quantity = quantity
    }
}