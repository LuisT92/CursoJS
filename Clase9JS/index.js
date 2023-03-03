const logger = require('./logger');

console.log("Hola, en este programa vamos a sumar 2 numeros");

let primerNumero = 0;
let segundoNumero = 0;

try {
    primerNumero = prompt('Ingrese un numero inicial');
    segundoNumero = prompt('Ingrese un numero final');
} catch (error) {
    logger.error('Error al ingresar los numeros');
    console.log('Error al ingresar los numeros, por favor intente nuevamente');
    console.log("Error: " + error);
}