const itemsList = document.getElementById('items-list');
const totalPrice = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-button');

const products = [
  { name: 'Media pension - 3 dias (x persona)', price: 2000 },
  { name: 'Pension completa - 3 dias (x persona)', price: 3500 },
  { name: 'Media pension - 7 dias (x persona)', price: 4000 },
  { name: 'Pension completa - 7 dias (x persona)', price: 6500 },
  { name: 'Crucero "Islas Mujeres" - (x persona)', price: 750 },
  { name: 'Submarino en Cozumel - (x persona)', price: 1250 },
  { name: 'Buceo por los arrecifes - (x persona)', price: 400 },
  { name: 'Paseo nocturno (fiestas) - (x persona)', price: 600 },
  { name: 'ALLINCLUSIVE - (x persona)', price: 8500 },
  { name: 'Media pension - 3 dias (x persona)', price: 1000 },
  { name: 'Pension completa - 3 dias (x persona)', price: 1750 },
  { name: 'Media pension - 7 dias (x persona)', price: 2000 },
  { name: 'Pension completa - 7 dias (x persona)', price: 3250 },
  { name: 'Paseo con los monos titi - (x persona)', price: 400 },
  { name: 'Saltos del mocona kayak - (x persona)', price: 1000 },
  { name: 'Tour en garganta del diablo - (x persona)', price: 980 },
  { name: 'Conoce ciudad del este - (x persona)', price: 600 },
  { name: 'ALLINCLUSIVE - (x persona)', price: 5000 },
  { name: 'Media pension - 3 dias (x persona)', price: 750 },
  { name: 'Pension completa - 3 dias (x persona)', price: 1200 },
  { name: 'Media pension - 7 dias (x persona)', price: 2000 },
  { name: 'Pension completa - 7 dias (x persona)', price: 3500 },
  { name: 'Ruta del vino de Mendoza - (x persona)', price: 750 },
  { name: 'Parque Provincial Aconcagua - (x persona)', price: 1350 },
  { name: 'Conoce el puente del Inca - (x persona)', price: 400 },
  { name: 'Paseo nocturno (fiestas) - (x persona)', price: 600 },
  { name: 'ALLINCLUSIVE - (x persona)', price: 4500 },
   
];

const cart = [];

function addToCart(index) {
  cart.push(products[index]);
  showCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  showCart();
}

function showCart() {
  let html = '';
  let total = 0;
  cart.forEach((product, index) => {
    html += `<div>${product.name} - $${product.price} <button onclick="removeFromCart(${index})">Eliminar</button></div>`;
    total += product.price;
  });
  itemsList.innerHTML = html;
  totalPrice.innerText = total;
}

checkoutButton.addEventListener('click', () => {
  let email = prompt("Por favor ingrese su correo electrónico:");
  alert("Su correo electrónico es: " + email);
    alert (`¡Gracias por su compra! Le llegara un email de "Turismo viajes" con todos los detalles de la misma. Total: $${totalPrice.innerText}`);
});

showCart();
