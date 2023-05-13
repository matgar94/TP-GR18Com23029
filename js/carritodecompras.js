const itemsList = document.getElementById('items-list');
const totalPrice = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-button');
const totalp= document.getElementById('total-price'); ;
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
  { name: 'Media pension - 3 dias (x persona)', price: 1000 },//10
  { name: 'Pension completa - 3 dias (x persona)', price: 1750 },//11
  { name: 'Media pension - 7 dias (x persona)', price: 2000 },//12
  { name: 'Pension completa - 7 dias (x persona)', price: 3250 },//13
  { name: 'Paseo Parque Nacional Cataratas - (x persona)', price: 400 },//14
  { name: 'Visita ciudad del este - (x persona)', price: 1000 },//15
  { name: 'Visita represa Itaipú - (x persona)', price: 280 },//16
  { name: 'Conoce ciudad del este - (x persona)', price: 600 },//17
  { name: 'ALLINCLUSIVE - (x persona)', price: 5000 },//18
  { name: 'Media pension - 3 dias (x persona)', price: 750 },//19
  { name: 'Pension completa - 3 dias (x persona)', price: 1200 },//20
  { name: 'Media pension - 7 dias (x persona)', price: 2000 },//21
  { name: 'Pension completa - 7 dias (x persona)', price: 3500 },//22
  { name: 'Ruta del vino de Mendoza - (x persona)', price: 750 },//23
  { name: 'Parque Provincial Aconcagua - (x persona)', price: 1350 },
  { name: 'Conoce el puente del Inca - (x persona)', price:400 }, //24
  { name: 'ALLINCLUSIVE - (x persona)', price: 4500 }, //25
   
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
   totalp = totalPrice.innerText = total;
}

checkoutButton.addEventListener('click', () => {
  console.log(totalPrice.innerText);
  if(totalPrice.innerText==0){
    alert("No ha agragado nada al carrito!");
  }else{
    let email = prompt("Por favor ingrese su correo electrónico:");
    alert("Su correo electrónico es: " + email);
    alert (`¡Gracias por su compra! Le llegara un email de "Turismo viajes" con todos los detalles de la misma. Total: $${totalPrice.innerText}`);
}
   
    
});

showCart();
