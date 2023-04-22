console.log("Hola IT desde un archivo externo de JS");

// DOM
// querySelector / querySelectorAll
/*
let container = document.querySelector(".container");
let links = document.querySelectorAll("a");

links.forEach(function(link) {
  console.log(link);
});
*/

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td) {
  td.addEventListener('click',function(){
    console.log(this);
  }
)
});

// Obtener los elementos de la clase .cloese
/* let links = document.querySelectorAll(".close")

//Recorlos
links.forEach(function(link) {
    // Agregar un evento click a cada uno
    link.addEventListener('click',function(){
      console.log(":)");
    });
});
*/

// Obtener los elementos de la clase .cloese
let links = document.querySelectorAll(".close")

//Recorlos
links.forEach(function(link) {
    // Agregar un evento click a cada uno
    link.addEventListener("click",function(ev){
      ev.preventDefault();

      let content = document.querySelector('.content');

      // Quitar las clases de animacion
      content.classList.remove("animate__fadeInDown");
      content.classList.remove("animate__animated");

      // Agregar clases para animar la salida faceOutUp
      content.classList.add("animate__fadeOutUp");
      content.classList.add("animate__animated");

      setTimeout(function(){
        location.href = "/";
      },600);
      // setInterval

      return false;
    });
});
