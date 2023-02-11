//Trabajando con tipos de datos no primitivos o complejos en JavaScript

const Persona = {
    nombre: "Luis",
    edad: 30,
    developer: true,
    "fecha de nacimiento": new Date("1992-07-07"),
    "Libro-favorito": {
        titulo: "El señor de los anillos - La comunidad del anillo",
        autor: "J.R.R. Tolkien",
        "fecha de publicación": new Date("1954-07-29"),
        url: "https://www.amazon.com.mx/Se%C3%B1or-Anillos-Comunidad-Anillo-Booket/dp/8445000667/ref=sr_1_1?keywords=el+se%C3%B1or+de+los+anillos+libros&qid=1676094140&sprefix=el+se%2Caps%2C289&sr=8-1"
    }
}

console.log("Nombre: " + Persona.nombre);
console.log("Edad: " + Persona.edad);
if (Persona.developer){
    console.log("Es desarrollador");
}
else{
    console.log("No es desarrollador");
}
console.log("Fecha de nacimiento: "+Persona["fecha de nacimiento"].getDate()+" del mes "+Persona["fecha de nacimiento"].getMonth()+" del año "+Persona["fecha de nacimiento"].getFullYear());
console.log("Libro favorito: " + Persona["Libro-favorito"].titulo);
console.log("Autor: " + Persona["Libro-favorito"].autor);
console.log("Año de publicaion del libro: " + Persona["Libro-favorito"]["fecha de publicación"].getFullYear());
console.log("Enlace al libro: " + Persona["Libro-favorito"].url);
