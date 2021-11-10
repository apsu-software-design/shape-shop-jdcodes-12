export class ProductModel {
    
    private name: string
    private unitPrice: number
    private description: string

    ProductModel(name: string, unitPrice: number, description: string){
        this.name = name
        this.unitPrice = unitPrice
        this.description = description
    }

    getProductName() : string {
        return this.name
    }

    getProductUnitPrice() : number{
        return this.unitPrice
    }

    getProductDescription() : string{
        return this.description
    }

    setProductName(name: string) : void {
        this.name = name
    }
    
    setProductUnitPrice(unitPrice: number) : void{
        this.unitPrice = unitPrice
    }

    setProductDescription(description: string) : void {
        this.description = description
    }
}