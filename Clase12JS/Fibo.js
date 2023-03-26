// let num = parseInt(prompt("Ingrese un numero"));

let num = 6;

function fibo(num) {
    let a = 0, b = 1, c;
    for (let i = 0; i < num; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}