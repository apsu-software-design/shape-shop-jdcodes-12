import { ProductModel } from "./ProductModel"
export class ProductCatalogView{
    
    private productCatalog : ProductModel[]

    ProductCatalogView(productCatalog : ProductModel[] ){
        this.productCatalog = []
     }

    /**
     * Display the product catalog to the user
     */
    displayProductCatalog(){
        console.log('\t=== Shape Shop Currently Sells ===\n')
        for(let i=0; i < this.productCatalog.length; i++){
            console.log(`Product ${i+1} --\n`)
            console.log(`\tName: ${this.productCatalog[i].getProductName()}`)
            console.log(`\tPrice: ${this.productCatalog[i].getProductUnitPrice()}`)
            console.log(`\tDescription:\n\t${this.productCatalog[i].getProductDescription()}`) //Maybe fix spacing
        }
    }
}