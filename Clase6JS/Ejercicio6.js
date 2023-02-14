//Lista de compras

let listaDeCompras = [
    { nombre: "Arroz", cantidad: 2},
    { nombre: "Papa", cantidad: 3},
    { nombre: "Carne", cantidad: 1},
    { nombre: "Leche", cantidad: 4},
    { nombre: "Coca Cola", cantidad: 6},
    { nombre: "Fideos", cantidad: 1},
    { nombre: "Galletitas", cantidad: 3},
    { nombre: "Jugo", cantidad: 2},
];

console.log("Lista de compras: ");
console.log(listaDeCompras);

//Añadir un elemento a la lista de compras

listaDeCompras.push({ nombre: "Aceite de Girasol", cantidad: 1});

console.log("Añadimos un elemento a la lista de compras:");
console.log(listaDeCompras);

//Eliminar un elemento de la lista de compras

listaDeCompras.splice(7);

console.log("Eliminamos un elemento de la lista de compras:");
console.log(listaDeCompras);

//Lista peliculas 

let listaDePeliculas = [
    { titulo: "El señor de los anillos", director: "Peter Jackson", estreno: 2001},
    { titulo: "El padrino", director: "Francis Ford Coppola", estreno: 1972},
    { titulo: "El Padrino 2", director: "Francis Ford Coppola", estreno: 1974},
];

console.log("Lista de peliculas: ");
console.log(listaDePeliculas);
//Posteriores a 2010

let peliculasPosteriores = listaDePeliculas.filter(function(pelicula){
    return pelicula.estreno > 2010;
        } 
    );

console.log("Peliculas posteriores a 2010: ");

console.log(peliculasPosteriores);

//Directores

let directores = listaDePeliculas.map(function(pelicula){
    return pelicula.director;
        }
    );

console.log("Directores: ");
console.log(directores);

//Titulos

let titulos = listaDePeliculas.map(function(pelicula){
    return pelicula.titulo;
        }
    );

console.log("Titulos: ");
console.log(titulos);

//Concatenar

let concatenar = directores.concat(titulos);

console.log("Concatenar: ");
console.log(concatenar);

//concatenar con factor de propagacion

let concatenar2 = [...directores, ...titulos];


console.log("Concatenar con factor de propagacion: ");
console.log(concatenar2);