// trabajando con SETS

const familia = new Set();

// Agregando Nombres de mi familia

familia.add("Fernando Torres");
familia.add("Luis Torres");
familia.add("Lilia Escogido");
familia.add("Martin Torres");

console.log("Los miembros de mi familia son: ");
console.log(familia);

//Agregar un elemento que ya existe

familia.add("Luis Torres");
console.log("Los miembros de mi familia son: ");
console.log(familia);

// Agregar un elemento nuevo

familia.add("JavaScript");

console.log("Los miembros de mi familia son: ");
console.log(familia);