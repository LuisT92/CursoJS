const boton1 = document.querySelector("#ev1")

boton1.addEventListener("click", () => {
    console.log('Click');
    alert('click en el botón')
})


$(document).ready(() => {
    $(".Hola").click(() => {
        console.log('Click');
        alert('click en el botón')
    });
  });
