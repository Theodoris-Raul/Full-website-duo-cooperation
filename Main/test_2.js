let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Vera Pure',
        tag: 'aloebottle1',
        price: 5,
        inCart: 0
    },
    {
        name: 'Vera Plus',
        tag: 'aloebottle2',
        price: 5.5,
        inCart: 0
    },
    {
        name: 'Vera Max',
        tag: 'aloebottle3',
        price: 5.8,
        inCart: 0
    },
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers +1);
        document.querySelector('.cart span').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    
}

onLoadCartNumbers();