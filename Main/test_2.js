let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Vera Pure',
        tag: 'aloe-01',
        price: 5,
        inCart: 0
    },
    {
        name: 'Vera Plus',
        tag: 'aloe-02',
        price: 5.5,
        inCart: 0
    },
    {
        name: 'Vera Max',
        tag: 'aloe-03',
        price: 5.8,
        inCart: 0
    },
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem
    ('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers +1);
        document.querySelector('.cart span').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log('my cartItems are', cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {
    //console.log('the product price is', product.price);
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null) {
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost", cartCost + 
        product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem('totalCost');
    //inCart = parseInt(inCart);
    //console.log(typeof "inCart");



    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="lineContainer">

                <div class="product">
                    <ion-icon name="close-circle"></ion-icon>
                    <img src="images/${item.tag}.jpg">
                    <span>${item.name}</span>
                </div>

                <div class="price">€${item.price}</div>

                <div class="quantity">
                    <span class="down" onClick='decreaseCount(event, this)'>
                    <ion-icon class="derease"
                    name="arrow-back-circle-outline"></ion-icon></span>
                    <input type="text" value="${item.inCart}">
                    <span class="up"  onClick='increaseCount(event, this)'>
                    <ion-icon class="increase" 
                    name="arrow-forward-circle-outline"></ion-icon></span>
                </div>

                <div class="total">
                €${item.inCart * item.price}
                </div>
            </div>
            `  
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    €${cartCost}
                </h4>
        `;

    }
}

onLoadCartNumbers();
displayCart();


/* <span>${item.price}</span>
<ion-icon class="derease"
name="arrow-back-circle-outline"></ion-icon>
<span>${item.inCart}</span>
<ion-icon class="increase" 
name="arrow-forward-circle-outline"></ion-icon> 
*/