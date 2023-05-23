



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
    dropbox.append(option);
  }
}
shirts();

const ptoducts = [
  { id: "product1", name: "RED", price: 10.00},
  {id: "product2", name: "TAN", price: 10.00},
  {id: "product3", name: "RED", price: 10.00},
  {id: "product4", name: "RED", price: 10.00}
];
let cartItems = [];
let cartTotal = 0;

function addItem(){
const selectElement = document.getElementById("color-select");
const selectedProductId = selectElement.value;

if (selectedProductId){
  const selectedProduct = products.find((product) => product.id === selectedProductId);

  if (selectedProduct) {
    cartItems.push(selectedProduct);
    cartTotal += selectedProduct.price;
    updateCart();
  }
}
};

function updateCart(){
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  cartItemsElement.innerHTML = "";


  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = '${item.name} - $${item.price.toFixed(2)}';
    cartItemsElement.appendChild(li);
  });
  

}