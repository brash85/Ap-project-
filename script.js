



var dropdown = document.getElementById("size");
function shirts() {
  var size = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  var option = document.createElement("option");
  option.innerHTML = (size[0]);
  var dropbox = document.getElementById("size-select");
  dropbox.appendChild(option);
  for (var i = 1; i < size.length; i++) {
    option = document.createElement("option");
    option.innerHTML = (size[i]);
    dropbox.appendChild(option);
  }
}
shirts();

var dropdown = document.getElementById("color");
function colors() {
  var color = ["RED","TAN","BLACK","WHITE"];
  var option = document.createElement("option");
  option.innerHTML = (color[0]);
  var dropbox = document.getElementById("color-select");
  dropbox.appendChild(option);
  for (var i = 1; i < color.length; i++) {
    option = document.createElement("option");
    option.innerHTML = (color[i]);
    dropbox.appendChild(option);
  }
}


let cartItems = [];
let cartTotal = 0;

function addItem(){
const selectElement = document.getElementById("color-select");
const selectedProductId = selectElement.value;

};

function updateCart(){
  const cartItemsElement = document.getElementById("colors");
  const cartTotalElement = document.getElementById("cart-total");

  cartItemsElement.innerHTML = "";

}