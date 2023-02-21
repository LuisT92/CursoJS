// Trabajando con objetos y listas

const personaLuis = {
    nombre: 'Luis',
    apellido: 'Torres',
    edad: 30,
    altura: 1.70,
    eresDesarrollador: true,
}
//Una variable que obtenga tu edad a partir del objeto anterior

const edad = personaLuis.edad;
console.log(`La edad de Luis es: ${edad}`);

//2 mejores amigos de Luis

const amigoLuis1 = {...personaLuis};
const amigoLuis2 = {...personaLuis};

//Agregarle datos a los amigos de Luis

amigoLuis1.nombre = 'Juan';
amigoLuis1.apellido = 'Perez';
amigoLuis1.edad = 25;
amigoLuis1.altura = 1.80;
amigoLuis1.eresDesarrollador = false;

amigoLuis2.nombre = 'Pedro';
amigoLuis2.apellido = 'Gomez';
amigoLuis2.edad = 35;
amigoLuis2.altura = 1.70;
amigoLuis2.eresDesarrollador = true;

//Lista de los objetos

const amigos = [personaLuis, amigoLuis1, amigoLuis2];

//Imprimir la lista de amigos con los datos de cada uno

console.log(`Lista de amigos de Luis: `);

amigos.map((amigo) => {
    console.log(`Nombre: ${amigo.nombre} Apellido: ${amigo.apellido} Edad: ${amigo.edad} Altura: ${amigo.altura} Desarrollador: ${amigo.eresDesarrollador}`);
}
);

//Ordenar la lista de amigos por edad

console.log(`Lista de amigos de Luis por edad: `);

const amigosOrdenados = amigos.sort((a, b) => { return a.edad - b.edad; });
amigosOrdenados.map((amigo) => {
    console.log(`Nombre: ${amigo.nombre} Apellido: ${amigo.apellido} Edad: ${amigo.edad} Altura: ${amigo.altura} Desarrollador: ${amigo.eresDesarrollador}`);
}   
);