//store the products array in localstorage as "products"
function data(type,desc,price,image){
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;
}
let mybtn=document.querySelector('#add_product');
mybtn.addEventListener('click',func);
let store=JSON.parse(localStorage.getItem('products'))||[];
function func(){
    event.preventDefault();
    let type=products.type.value;
    let desc=products.desc.value;
    let price=products.price.value;
    let image=products.image.value;

    let obj=new data(type,desc,price,image);
    store.push(obj);
    localStorage.setItem('products',JSON.stringify(store));   
}