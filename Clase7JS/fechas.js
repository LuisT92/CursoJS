//Trabajando con fechas

let fecha = new Date();

console.log("La fecha de hoy es: " + fecha.toLocaleDateString("es-ES"));

let fechaNacimientoLuis = new Date(1992, 5,6); 
console.log("La fecha de nacimiento de Luis es: " + fechaNacimientoLuis.toLocaleDateString("es-ES"))

//comparar fechas

let validacion = fecha > fechaNacimientoLuis;
    if(validacion){
        console.log("La fecha de hoy es mayor a la fecha de nacimiento de Luis");
        }
    else{ 
        console.log("La fecha de hoy es menor a la fecha de nacimiento de Luis");
        }

//Variables

let diaNacimientoLuis = fechaNacimientoLuis.getDate();
console.log("El dia de nacimiento de Luis es: " + diaNacimientoLuis);

let mesNacimientoLuis = fechaNacimientoLuis.getMonth();

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("El mes de nacimiento de Luis es: " + meses[mesNacimientoLuis]);

let anioNacimientoLuis = fechaNacimientoLuis.getFullYear();
console.log("El año en el que nacio Luis es: " + anioNacimientoLuis);