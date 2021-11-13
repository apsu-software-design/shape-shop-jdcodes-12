import { ProductCatalogModel } from "./ProductCatalogModel"
export class ProductCatalogView {

    private productCatalog : ProductCatalogModel
    
    
    constructor(productCatalog: ProductCatalogModel){
        this.productCatalog = productCatalog
    }

    displayCurrentProductCatalogState() : void {
        console.log('Shape Shops Current Product Catalog...')
        this.displayCatalogContents(this.productCatalog)
    }

    private displayCatalogContents(productCatalog: ProductCatalogModel) : void {
        for(let i = 0; i < this.productCatalog.getProductCatalog().length; i++){
            console.log(`Name: ${this.productCatalog.getProductCatalog()[i].getName()}`)
            console.log(`Price: ${this.productCatalog.getProductCatalog()[i].getPrice()}`);
            console.log(`Description:\n ${this.productCatalog.getProductCatalog()[i].getDescription()}`);            
        }
    }
    
}