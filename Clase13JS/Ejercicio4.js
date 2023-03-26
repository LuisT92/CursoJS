let nombre = "Luis"
let apellido = "Torres"

let estudiante = `${nombre} ${apellido}`

console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let letras = estudiante.length
console.log(letras)

let firstLetter = estudiante.charAt(0)
console.log(firstLetter)

let lastLetter = estudiante.charAt(estudiante.length - 1)
console.log(lastLetter)

let sinEspacios = estudiante.replace(" ", "")
console.log(sinEspacios)

let contNombre = estudiante.includes(nombre)
console.log(contNombre)