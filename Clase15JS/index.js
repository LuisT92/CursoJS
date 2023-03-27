var nombre = "luis";
var apellido = "torres";

let nombreCompleto = {
    nombre,
    apellido,
}

sessionStorage.setItem("nombreCompleto", JSON.stringify(nombreCompleto));

localStorage.setItem("nombreCompleto", JSON.stringify(nombreCompleto));

document.cookie = "nombreCompleto=" + JSON.stringify(nombreCompleto) + "; expires" + 120;
