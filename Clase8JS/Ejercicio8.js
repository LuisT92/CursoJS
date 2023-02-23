//Funcion sin parametros 

function sinParametros(){
    return true;
}

console.log("Aqui se ejecuta la funcion sin parametros: "+ sinParametros());

//Funcion Asincrona 

function timeAs(){
    setTimeout(function(){
        console.log("Hola soy una promesa");
    }, 5000);
}

timeAs();

//Funcion generadora

function* generadoraIdAuto(){
    let id = 0;
    while(true){
        yield id;
        id += 2;
        if(id === 10){
            break;
        }
    }
    yield id;
}

let gen = generadoraIdAuto();

console.log("Aqui se ejecuta la funcion generadora");
console.log("ID: " + gen.next().value);
console.log("ID: " + gen.next().value);
console.log("ID: " + gen.next().value);
console.log("ID: " + gen.next().value);
console.log("ID: " + gen.next().value);
console.log("ID: " + gen.next().value);

console.log("Aqui se ejecuta la funcion asincrona por el tiempo de espera");