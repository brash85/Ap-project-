



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
