



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

function colors() {
  var color = ["RED", "TAN", "WHITE", "BLACK", "GREY"];
  var option = document.createElement("option");
  option.innerHTML = (color[0]);
  var dropbox = document.getElementById("color-select");
  dropbox.appendChild(option);
  for (var i = 1; i < color.length; i++) {
    option = document.createElement("option");
    option.innerHTML = (color[i]);
    dropbox.append(option);
  }

}
colors();

{var cart = [];
}

function addItem() {
var item = {
name: "shirt"
};
cart.push(item);
renderCart();
}

function removeItem() {
  cart.pop();
  renderCart();
}

function renderCart(){
  var cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  for(var i = 0; i < cart.length; i++){
    var item = cart[i];

    var itemElement = document.createElement("div");
    itemElement.innerHTML = item.name + "- $" + item.price + "color" + item.color + "size" + item.size;
    cartContainer.appendChild(itemElement);
  }




}



