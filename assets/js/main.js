// menambahkan hover
let list = document.querySelectorAll(".navigasi li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Navbar
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigasi");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};



