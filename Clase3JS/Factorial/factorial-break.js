/* Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y 
una sentencia break */

let n = 10;
let i = n;

while(i > 0){
    if(i === 1){
        break;
    }
    n = n * i;
    i--;
}

console.log(`El factorial de 10 es:  ${n}`);