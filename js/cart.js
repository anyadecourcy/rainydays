const cartSection = document.querySelector("#cartSection");
const cartButton = document.querySelector("#cartButton");
const span = document.querySelector(".close");


cartButton.onclick = function() {
    cartSection.style.display = "block";
}

span.onclick = function() {
    cartSection.style.display = "none";
}

document.onclick = function(event) {
  if (event.target === cartSection) {
    cartSection.style.display = "none";
  }
}

