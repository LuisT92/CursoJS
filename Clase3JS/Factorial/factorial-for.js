//Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

let n = 10;

for(let i = n; i > 0; i--){
    n = n * i;
}

console.log(`El factorial de 10 es:  ${n}`);