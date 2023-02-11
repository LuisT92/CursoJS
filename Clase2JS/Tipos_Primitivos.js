// tipos primitivos

//number

const num1 = 10;

//string

const a = "hola";

//boolean

const b = true;
const f = false;

//null

const c = null;

//undefined

const d = undefined;

//Ejemplo de datos falsy y truthy

//dependiendo el valor que le pasemos se ejecutara una condicion u otra, las variables se definieron 
// en la parte superior del codigo para que no se confundan con los tipos de datos
const g = 0;

//boolean

if (b) {
  console.log("es verdadero");
}
else {
  console.log("es falso");
}

if (f) {
    console.log("es verdadero");
  }
  else {
    console.log("es falso");
  }

  //null

  if (c) {
    console.log("es verdadero");
  }
  else {
    console.log("es falso");
  }

//undefined

if (d) {
    console.log("es verdadero");
  }
  else {
    console.log("es falso");
  }

//0

if (g) {
    console.log("es verdadero");
  }
  else {
    console.log("es falso");
  }