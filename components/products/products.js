




class Prodects{
    setbtn(el,id){
        //console.log('123')
        const res = localStorageEl.addProducts(id)
        if(res === true){
            el.innerHTML = 'delete'
        }
        else{
            el.innerHTML = 'add'
        }
        console.log(localStorageEl.getProducts())
}  



    show(){
        let prodectsStore = localStorageEl.getProducts()
        let html_catalog = '';
        CATALOG.forEach(({ id, name, price, in_shop,img }) => {
            let addText = ''
            if(prodectsStore.indexOf(id)===-1){
                addText = 'add'
            }
            else{
                addText = 'delete'
            }
            html_catalog += `
            <li class = 'products-element'>
                <span class = 'products-element-name'>${name}</span>
                <img class = 'products-element-img' src="${img}" />
                <span class = 'products-element-in-shop'>${in_shop}</span>
                <span class = 'products-element-price'>${price}</span>
                <button class = 'products-element-add' onclick="ProdectsP.setbtn(this,'${id}')">${addText}</button>
                
            </li>
        `;
        })
        const html = `
        <ul class='products-container'>
            ${html_catalog}
        </ul>
        `;

    ROOT_PRODUCTS.innerHTML = html;
    }

}

const ProdectsP = new Prodects()
ProdectsP.show()