/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let products = [];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
let cherry = {
  name: "Cherry",
  price: 15,
  quantity: 0,
  productId: 1,
  image: "images/cherry.jpg"
};

let orange = {
  name: "Orange",
  price: 18,
  quantity: 0,
  productId: 2,
  image: "images/orange.jpg"
};

let strawberry = {
  name: "Strawberry",
  price: 21,
  quantity: 0,
  productId: 3,
  image: "images/strawberry.jpg"
};

products.push(cherry);
products.push(orange);
products.push(strawberry);

let remainBalance;

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = []
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function getIdxByProductId(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].productId == value) return i;
  };
};

function addProductToCart(productId) {
  let numProducts = products.length;
  let chooseProduct = products[getIdxByProductId(products, productId)];

  if(cart.includes(chooseProduct)) {
    // increase product quantity if in cart
    chooseProduct.quantity += 1;
  } else {
    // add it to the cart if not already in the cart
    cart.push(chooseProduct);
    chooseProduct.quantity += 1;
  };
};
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  let numProdsInCart = cart.length;
  let chooseProdInCart = cart[getIdxByProductId(cart, productId)];
  chooseProdInCart.quantity += 1;
};

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  let numProdsInCart = cart.length;
  let idx = getIdxByProductId(cart, productId);
  let chooseProdInCart = cart[idx];
  chooseProdInCart.quantity -= 1;

  if (chooseProdInCart.quantity == 0) {
    cart.splice(idx, 1);
  };
};

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  let numProdsInCart = cart.length;
  let idx = getIdxByProductId(cart, productId);
  let chooseProdInCart = cart[idx];
  
  chooseProdInCart.quantity = 0;
  cart.splice(idx, 1);
};

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal() {
  let numProdsInCart = cart.length;
  let totalCost = 0;
  for (let i = 0; i < numProdsInCart; i++) {
    totalCost += cart[i].price * cart[i].quantity;
  }
  
  return totalCost;
};

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart.splice(0, cart.length);
};

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
function pay (amount) {
  let totalCost = cartTotal();
  let result = 0;
  
  if (remainBalance == null) {
    remainBalance = totalCost - amount;
  } else {
    remainBalance -= amount;
  };

  if (remainBalance < 0) {
    result = -remainBalance;
    remainBalance = null;
    return result;
  } else {
    return -remainBalance;
  }  
};
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
