class LocalStroeage{
    constructor(){
        this.keyName = 'products'
    }

    getProducts(){
        const productsLocal = localStorage.getItem(this.keyName)
        if(productsLocal !== null){
           return JSON.parse(productsLocal)
        }
        return []
    }
    addProducts(id){
        let isNew = false
        let products = this.getProducts()
        let index = products.indexOf(id)
        if(index === -1){
            products.push(id)
            isNew = true
        }
        else{
            products.splice(index,1)
        }
        localStorage.setItem(this.keyName,JSON.stringify(products))
        return isNew
    }
}

const localStorageEl = new LocalStroeage()
//console.log(localStorageEl.getProducts())\
//localStorageEl.addProducts('obj1')
//localStorageEl.addProducts('obj2')
console.log(localStorageEl.getProducts())