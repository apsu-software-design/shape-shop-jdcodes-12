export class ProductModel {
    
    private name: string
    private unitPrice: number
    private description: string
    private quantity : number

    ProductModel(name: string, unitPrice: number, description: string){
        this.name = name
        this.unitPrice = unitPrice
        this.description = description
    }

    /**
     * Gets the product's current name
     * 
     * @returns product name
     */
    getProductName() : string { return this.name }

    /**
     * Gets the product's current unit price
     * 
     * @returns unit price
     */
    getProductUnitPrice() : number{ return this.unitPrice }

    /**
     * Gets the product's current item description
     * 
     * @returns description
     */
    getProductDescription() : string{ return this.description }

    /**
     * Gets the product's current quanitity 
     * 
     * @returns quantity
     */
    getProductQuanitity() : number { return this.quantity }

    /**
     * Set the product's current name to the new name
     * 
     * @param name - new name to give the product
     */
    setProductName(name: string) : void { this.name = name }
    
    /**
     * Sets the product's current unit price to the new unit price
     * 
     * @param unitPrice - new unit price to give the product
     */
    setProductUnitPrice(unitPrice: number) : void{ this.unitPrice = unitPrice }

    /**
     * Sets the products current description to the new description
     * 
     * @param description - new description to give the product
     */
    setProductDescription(description: string) : void { this.description = description }

    /**
     * Sets the current quantity to the new quanitity 
     * 
     * @param quanity - new quanity to give the product
     */
    setProductQuantity(quanity: number) : void { this.quantity = quanity }
}