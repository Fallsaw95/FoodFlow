let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let isLoggedIn = document.querySelector('.login-page');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Cold Brew',
        image: 'cold-brew.jpg',
        price: 950
    },
    {
        id: 2,
        name: 'Expresso',
        image: 'espresso.jpg',
        price: 120
    },
    {
        id: 3,
        name: 'Flat-White',
        image: 'flat-white.jpg',
        price: 100
    },
    {
        id: 4,
        name: 'Iced coffee',
        image: 'iced-coffee.jpg',
        price: 200
    },
    {
        id: 5,
        name: 'Macchiato',
        image: 'macchiato.jpg',
        price: 250
    },
    {
        id: 6,
        name: 'Latte',
        image: 'latte.jpg',
        price: 150
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="/img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="/img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
//for payment button 
document.getElementById("payButton").addEventListener("click", function() {
    // Perform the payment process here
 
 function checkLogin() {
    // Check if the user is logged in
    if (!isLoggedIn()) {
      // Redirect to the login page
      window.location.href = "./html/login.html";
    } else {
      // Proceed to the payment page
      window.location.href = "/payment";
    }
  }
  
  function isLoggedIn() {
    // Check if the user is logged in
    // Return true if the user is logged in, false otherwise
    // You can use cookies or local storage to store the login status
    // Here is an example using cookies:
    return document.cookie.indexOf("loggedIn=true") !== -1;
  }
   
  alert("Payment initiated!");
});