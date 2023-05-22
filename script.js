



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
  var color = ["RED", "TAN", "WHITE", "BLACK", ];
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
var size = [
  {id: 1, name: 'Red-shirt', price: 10},
  {id: 2, name: 'Tan-shirt', price: 10},
  {id: 3, name: 'white-shirt', price: 10},
  {id: 4, name: 'black-shirt', price: 10},
]

function populateColorSelect(){
  var select = document.getElementById('color-select');
  select.innerHTML = '';
  for (var i = 1; i < color.length; i++) {
    option = document.createElement("option");
    option.value = size[i].id;
    option.innerHTML = size[i].name;
    dropbox.append(option);
  }
}

function addToCart(){
var select = document.getAnimations('size-select');

}