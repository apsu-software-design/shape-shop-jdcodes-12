
import { ProductModel } from "./ProductModel"
export class ProductCatalogModel {
    private productCatalog : ProductModel[]

    /**
     * Initialize a new product catalog with 3 shapes:
     * Square   - 3.5
     * Circle   - 4.5
     * Triangle - 5.5 - 
     */
    constructor(){
    
        this.productCatalog = []
        this.productCatalog.push(new ProductModel('Square', 3.5, 'Three Sided Glory'))
        this.productCatalog.push(new ProductModel('Circle', 4.5, 'Well-rounded!'))
        this.productCatalog.push(new ProductModel('Triangle', 5.5, ''))
    }

    /**
     * Adds a product to the product catalog
     * 
     * @param product product to add to catalog
     */
    addProductToCatalog(product: ProductModel) : void {
        this.productCatalog.push(product)
    }

    /**
     * Removes a produt from the product catalog.
     * 
     * @param product product to remove from catalog
     */
    removeProductFromCatalog(product : ProductModel) : void {
        this.removeProductHelper(product)
    }   
    
    /**
     * Updates the name of the passed product
     * 
     * @param product the product to find
     * @param newName the new name to give product
     */
    updateProductNameInCatalog(product: ProductModel, newName: string) : void  {
        let productToFind = product.getName().toLowerCase()
        for(let i=0; i < this.productCatalog.length; i++){
            if(this.productCatalog[i].getName().toLowerCase() === productToFind)
            {
                this.productCatalog[i].setName(newName);
            }
        }
    }

    /**
     * Updates the price of the passed product
     * 
     * @param product the product to find
     * @param newPrice the new price to give product
     */
    updateProductPriceInCatalog(product: ProductModel, newPrice: number) : void {
        let productToFind = product.getName().toLowerCase()
        for(let i=0; i < this.productCatalog.length; i++){
            if(this.productCatalog[i].getName().toLowerCase() === productToFind){

                this.productCatalog[i].setPrice(newPrice)
            }
        }
    }

    /**
     * Updates the description of the passed product
     * 
     * @param product the product to find
     * @param newDescription the new description to give product
     */
    updateProductDescriptionInCatalog(product: ProductModel, newDescription : string) : void{
        let productToFind = product.getName().toLowerCase()
        for(let i=0; i < this.productCatalog.length; i++){
            if(this.productCatalog[i].getName().toLowerCase() === productToFind){

                this.productCatalog[i].setDescription(newDescription)
            }
        }
    }

    /**
     * Clears the entire product catalog
     */
    clearProductCatalog() : void {
        this.productCatalog.splice(0)
    }

    /**
     * Returns the product catalog
     * 
     * @returns the current product catalog
     */
    getProductCatalog(): ProductModel[] {
        return this.productCatalog
    }

    /**
     * Helper function to remove a product from the catalog. Used in
     * removeProductFromCatalog() 
     * 
     * @param product the product to remove
     */
    private removeProductHelper(product: ProductModel) {
        this.productCatalog.forEach((value,index)=>{
            if(value==product) this.productCatalog.splice(index,1)})
    }
}