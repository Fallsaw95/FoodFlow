let openShopping = document.querySelector ('.shopping');
let closeShopping = document.querySelector ('.closeShopping');
let list = document.querySelector ('.list');
let listCard = document.querySelector ('.listCard');
let body = document.querySelector ('body');
let total = document.querySelector ('.total');
let quantity = document.querySelector ('.quantity');
let isLoggedIn = document.querySelector ('.form');

openShopping.addEventListener ('click', () => {
  body.classList.add ('active');
});
closeShopping.addEventListener ('click', () => {
  body.classList.remove ('active');
});

let products = {
  cafe: [
    {
      category: 'Cafe',
      name: 'Espresso',
      image: 'img/espresso.jpg',
      price: 2.5,
    },
    {
      category: 'Cafe',
      name: 'Americano',
      image: 'img/americano.jpg',
      price: 2.75,
    },
    {
      category: 'Cafe',
      name: 'Cappuccino',
      image: 'img/cappuccino.jpg',
      price: 3.5,
    },
    {
      category: 'Cafe',
      name: 'Latte',
      image: 'img/latte.jpg',
      price: 4.0,
    },
    {
      category: 'Cafe',
      name: 'Mocha',
      image: 'img/mocha.jpg',
      price: 4.25,
    },
    {
      category: 'Cafe',
      name: 'Macchiato',
      image: 'img/macchiato.jpg',
      price: 3.75,
    },
    {
      category: 'Cafe',
      name: 'Flat White',
      image: 'img/flat_white.jpg',
      price: 4.25,
    },
    {
      category: 'Cafe',
      name: 'Cortado',
      image: 'img/cortado.jpg',
      price: 3.75,
    },
    {
      category: 'Cafe',
      name: 'Drip Coffee',
      image: 'img/drip_coffee.jpg',
      price: 2.0,
    },
    {
      category: 'Cafe',
      name: 'Iced Coffee',
      image: 'img/iced_coffee.jpg',
      price: 3.0,
    },
    {
      category: 'Cafe',
      name: 'Iced Latte',
      image: 'img/iced_latte.jpg',
      price: 3.5,
    },
    {
      category: 'Cafe',
      name: 'Chai Latte',
      image: 'img/chai_latte.jpg',
      price: 4.0,
    },
    {
      category: 'Cafe',
      name: 'Herbal Tea',
      image: 'img/herbal_tea.jpg',
      price: 2.75,
    },
    {
      category: 'Cafe',
      name: 'Green Tea',
      image: 'img/green_tea.jpg',
      price: 2.75,
    },
    {
      category: 'Cafe',
      name: 'Black Tea',
      image: 'img/black_tea.jpg',
      price: 2.75,
    },
    {
      category: 'Cafe',
      name: 'Milk Tea',
      image: 'img/milk_tea.jpg',
      price: 3.0,
    },
    {
      category: 'Cafe',
      name: 'Hot Chocolate',
      image: 'img/hot_chocolate.jpg',
      price: 4.25,
    },
    {
      category: 'Cafe',
      name: 'Caramel Macchiato',
      image: 'img/caramel_macchiato.jpg',
      price: 4.25,
    },
    {
      category: 'Cafe',
      name: 'Affogato',
      image: 'img/affogato.jpg',
      price: 4.5,
    },
    {
      category: 'Cafe',
      name: 'French Press Coffee',
      image: 'img/french_press_coffee.jpg',
      price: 3.0,
    },
    {
      category: 'Cafe',
      name: 'Turkish Coffee',
      image: 'img/turkish_coffee.jpg',
      price: 3.5,
    },
    {
      category: 'Cafe',
      name: 'Cold Brew',
      image: 'img/cold_brew.jpg',
      price: 3.5,
    },
    {
      category: 'Cafe',
      name: 'Decaf Coffee',
      image: 'img/decaf_coffee.jpg',
      price: 2.5,
    },
    {
      category: 'Cafe',
      name: 'Irish Coffee',
      image: 'img/irish_coffee.jpg',
      price: 5.0,
    },
    {
      category: 'Cafe',
      name: 'Ristretto',
      image: 'img/ristretto.jpg',
      price: 3.0,
    },
    {
      category: 'Cafe',
      name: 'Vienna Coffee',
      image: 'img/vienna_coffee.jpg',
      price: 4.5,
    },
  ],
  bakery: [
    {
      category: 'Bakery',
      name: 'Croissant',
      image: 'img/croissant.jpg',
      price: 2.0,
    },
    {
      category: 'Bakery',
      name: 'Baguette',
      image: 'img/baguette.jpg',
      price: 2.5,
    },
    {
      category: 'Bakery',
      name: 'Danish Pastries',
      image: 'img/danish_pastry.jpg',
      price: 2.75,
    },
    {
      category: 'Bakery',
      name: 'Lemon Blueberry Scones',
      image: 'img/scones.jpg',
      price: 2.25,
    },
    {
      category: 'Bakery',
      name: 'Cinnamon Rolls',
      image: 'img/cinnamon_rolls.jpg',
      price: 3.0,
    },
    {
      category: 'Bakery',
      name: 'Chocolate Chip Muffin',
      image: 'img/muffins.jpg',
      price: 2.5,
    },
    {
      category: 'Bakery',
      name: 'Cookies',
      image: 'img/cookies.jpg',
      price: 1.5,
    },
    {
      category: 'Bakery',
      name: 'Fudgy Brownies',
      image: 'img/brownies.jpg',
      price: 2.5,
    },
    {
      category: 'Bakery',
      name: 'Fruit Tarts',
      image: 'img/fruit_tarts.jpg',
      price: 3.5,
    },
    {
      category: 'Bakery',
      name: 'Chocolate Cupcakes',
      image: 'img/cupcakes.jpg',
      price: 2.75,
    },
    {
      category: 'Bakery',
      name: 'Strawberry Glazed Jimmies Sprinkled Doughnuts',
      image: 'img/doughnuts.jpg',
      price: 1.75,
    },
    {
      category: 'Bakery',
      name: 'Quiches',
      image: 'img/quiches.jpg',
      price: 4.0,
    },
    {
      category: 'Bakery',
      name: 'Buttermilk Biscuits',
      image: 'img/biscuits.jpg',
      price: 2.0,
    },
    {
      category: 'Bakery',
      name: 'Eclairs',
      image: 'img/eclairs.jpg',
      price: 3.5,
    },
    {
      category: 'Bakery',
      name: 'Cheesecake',
      image: 'img/cheesecake.jpg',
      price: 4.25,
    },
    {
      category: 'Bakery',
      name: 'Apple Strudel',
      image: 'img/apple_strudel.jpg',
      price: 3.0,
    },
    {
      category: 'Bakery',
      name: 'Banana Bread',
      image: 'img/banana_bread.jpg',
      price: 2.5,
    },
    {
      category: 'Bakery',
      name: 'Pound Cake',
      image: 'img/pound_cake.jpg',
      price: 3.0,
    },
    {
      category: 'Bakery',
      name: 'Brioche',
      image: 'img/brioche.jpg',
      price: 2.75,
    },
    {
      category: 'Bakery',
      name: 'Pretzels',
      image: 'img/pretzels.jpg',
      price: 2.25,
    },
    {
      category: 'Bakery',
      name: 'Pies',
      image: 'img/pies.jpg',
      price: 3.5,
    },
    {
      category: 'Bakery',
      name: 'Coffee Cake',
      image: 'img/coffee_cake.jpg',
      price: 2.75,
    },
    {
      category: 'Bakery',
      name: 'Macarons',
      image: 'img/macarons.jpg',
      price: 2.5,
    },
    {
      category: 'Bakery',
      name: 'Tiramisu',
      image: 'img/tiramisu.jpg',
      price: 4.25,
    },
    {
      category: 'Bakery',
      name: 'Cannoli',
      image: 'img/cannoli.jpg',
      price: 3.75,
    },
    {
      category: 'Bakery',
      name: 'Puddings',
      image: 'img/puddings.jpg',
      price: 3.0,
    },
    {
      category: 'Bakery',
      name: 'Panna Cotta',
      image: 'img/panna_cotta.jpg',
      price: 3.25,
    },
    {
      category: 'Bakery',
      name: 'Chocolate Truffles',
      image: 'img/chocolate_truffles.jpg',
      price: 4.0,
    },
  ],
};

let listCards = [];
function initApp () {
  // Sort products in ascending order
  products.cafe.sort ((a, b) => a.name.localeCompare (b.name));
  products.bakery.sort ((a, b) => a.name.localeCompare (b.name));

  // Display products by category
  displayProducts (products.cafe);
  displayProducts (products.bakery);
}

function displayProducts (products) {
  products.forEach (product => {
    let newDiv = document.createElement ('div');
    newDiv.classList.add ('item');
    newDiv.innerHTML = `
            <div class="category">${product.category}</div>
            <img src="${product.image}">
            <div class="title">${product.name}</div>
            <div class="price">${product.price.toLocaleString ()}</div>
            <button>Add To Cart</button>`;
    list.appendChild (newDiv);
  });
}

initApp ();
function addToCard (category, key) {
  if (!listCards[category]) {
    listCards[category] = {};
  }

  if (!listCards[category][key]) {
    // copy product from list to list card
    listCards[category][key] = JSON.parse (
      JSON.stringify (products[category][key])
    );
    listCards[category][key].quantity = 1;
  } else {
    listCards[category][key].quantity += 1;
  }

  reloadCard ();
}
function reloadCard () {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;

  Object.keys (listCards).forEach (category => {
    Object.keys (listCards[category]).forEach (key => {
      let value = listCards[category][key];
      totalPrice += value.price * value.quantity;
      count += value.quantity;
      if (value != null) {
        let newDiv = document.createElement ('li');
        newDiv.innerHTML = `
                  <div><img src="/img/${value.image}"/></div>
                  <div>${value.name}</div>
                  <div>${value.price.toLocaleString ()}</div>
                  <div>
                      <button onclick="changeQuantity('${category}', '${key}', ${value.quantity - 1})">-</button>
                      <div class="count">${value.quantity}</div>
                      <button onclick="changeQuantity('${category}', '${key}', ${value.quantity + 1})">+</button>
                  </div>`;
        listCard.appendChild (newDiv);
      }
    });
  });

  total.innerText = totalPrice.toLocaleString ();
  quantity.innerText = count;
}

function changeQuantity (category, key, quantity) {
  if (quantity == 0) {
    delete listCards[category][key];
  } else {
    listCards[category][key].quantity = quantity;
    listCards[category][key].price = quantity * products[category][key].price;
  }
  reloadCard ();
}

//for payment button

// Add an event listener to the payment button
document.getElementById ('payButton').addEventListener ('click', function () {
  // Check if the user is logged in
  if (
    sessionStorage.getItem ('loggedIn') ||
    document.cookie.indexOf ('loggedIn=true') !== -1
  ) {
    // User is logged in, process payment
    processPayment ();
  } else {
    alert ('Please login First');
    // User is not logged in, redirect to login page
    window.location.href = './login.html';
  }
});

// Function to process payment
function processPayment () {
  // Check if the "Cash on Delivery" option is selected
  if (document.getElementById ('cashOnDelivery').checked) {
    // Send the order to the database
    sendOrderToDatabase ();

    // Alert the user
    alert ('Your order has been sent!');
  }
}

function sendOrderToDatabase () {
  // Code to send the order to the database goes here
}
