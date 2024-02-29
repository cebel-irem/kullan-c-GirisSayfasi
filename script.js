let login = document.getElementById("login"); //verilen idleri let ile tanımladık
let singup = document.getElementById("signup"); //bu idler artık fonksiyon görevi görecek
let shade = document.getElementById("switch");

//sağa kaydırma efekti
login.addEventListener("click", function () {
  shade.classList.remove("toRight");
  shade.classList.add("toLeft");
});

//sola kaydırma efekti
singup.addEventListener("click", function () {
  shade.classList.remove("toLeft");
  shade.classList.add("toRight");
});
