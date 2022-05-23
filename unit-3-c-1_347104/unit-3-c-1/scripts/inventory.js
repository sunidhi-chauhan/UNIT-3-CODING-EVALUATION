let store = JSON.parse(localStorage.getItem('products'));
func()
function func() {
    store.forEach(function (ele, index) {
        let card = document.createElement('div');
        card.setAttribute('id', 'div');
        let img = document.createElement('img');
        img.setAttribute('src', ele.image);
        let type = document.createElement('p');
        type.innerText = ele.type;
        let desc = document.createElement('p');
        desc.innerText = ele.desc;
        let price = document.createElement('p');
        price.innerText = `Price ${ele.price}`;
        let btn = document.createElement('button');
        btn.innerText = 'Remove';
        btn.setAttribute('id', 'remove_product');
        btn.addEventListener('click', myFunc);
        function myFunc() {
            store.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(store));
            window.location.reload();
        }


        card.append(img, type, desc, price, btn);
        document.querySelector('#all_products').append(card);
    });
}