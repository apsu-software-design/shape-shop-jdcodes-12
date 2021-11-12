
import { ProductModel } from "./ProductModel"
export class ProductCatalogModel {
    private productCatalog : ProductModel[]

    ProductCatalogModel(){
        this.productCatalog = []
    }

    addProductToCatalog(product: ProductModel) : void {
        this.productCatalog.push(product)
    }

    removeProductFromCatalog(product: ProductModel) : void {
        this.removeProduct(product)
    }   
    
    updateProductNameInCatalog(product: ProductModel, newName: string) : void  {
        let productToFind = product.getName().toLowerCase()
        for(let i=0; i < this.productCatalog.length; i++){
            if(this.productCatalog[i].getName().toLowerCase() === productToFind)
            {
                this.productCatalog[i].setName(newName);
            }
        }
    }

    updateProductPriceInCatalog(product: ProductModel, newPrice: number) : void {
        let productToFind = product.getName().toLowerCase()
        for(let i=0; i < this.productCatalog.length; i++){
            if(this.productCatalog[i].getName().toLowerCase() === productToFind){

                this.productCatalog[i].setPrice(newPrice)
            }
        }
    }

    updateProductDescriptionInCatalog(product: ProductModel, newDescription : string) : void{
        let productToFind = product.getName().toLowerCase()
        for(let i=0; i < this.ProductCatalogModel.length; i++){
            if(this.productCatalog[i].getName().toLowerCase() === productToFind){

                this.productCatalog[i].setDescription(newDescription)
            }
        }
    }

    clearProductCatalog() : void {
        this.productCatalog.splice(0)
    }

    getProductCatalog(): ProductModel[] {
        return this.productCatalog
    }
    private removeProduct(product: ProductModel) {
        this.productCatalog.forEach((value,index)=>{
            if(value==product) this.productCatalog.splice(index,1)})
    }
}