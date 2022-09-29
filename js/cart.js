/* global Cart */
'use strict';

// let Cart2 = []; 

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log('finish loading cart')
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  console.log('hey')
  loadCart();
  clearCart();
  showCart();
}




// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tablerows = document.querySelectorAll ('#cart tbody tr');
  for(let i= 0; i < tablerows.length; i++){
    if(tablerows[i]){
      tablerows[i].remove();
    }
  }

}

// document.querySelector(‘table’).deleteTFoot();

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  
  // TODO: Find the table body
  let tableElem = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (let i = 0; i < cart.items.length; i++) {
    let storeElem = document.createElement('tr');
    tableElem.appendChild(storeElem);
    let td1 = document.createElement('td');
    td1.textContent = 'x';
    storeElem.appendChild(td1);
    let td2 = document.createElement('td');
    td2.textContent = `${cart.items.items[i].quantity}`;
    storeElem.appendChild(td2);
    let td3 = document.createElement('td');
    td3.textContent = `${cart.items.items[i].product}`;
    storeElem.appendChild(td3);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  Cart.splice(event.target.dataset.id, 1);
  console.log(Cart);
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart', JSON.stringify(Cart));
  // TODO: Re-draw the cart table

} 

// This will initialize the page and draw the cart on screen
renderCart();