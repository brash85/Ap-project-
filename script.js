var color = ["RED","TAN","BLACK","WHITE"];
var size = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

// function that connected to drop down 
var dropdown = document.getElementById("size");
function shirts() {
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
// function that connected to drop down 
var dropdown = document.getElementById("color");
function colors() {
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
colors[0] = 10;
var cart = [];