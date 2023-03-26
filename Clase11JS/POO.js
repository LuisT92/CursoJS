class Estudiante {
    nombre;
    asignaturas = ["Javascript", "HTML", "CSS"];
    constructor(nombre) {
        this.nombre = nombre;
    }

    obtenDatos() {
        return `El estudiante ${this.nombre} esta cursando ${this.asignaturas[0]}, ${this.asignaturas[1]} y ${this.asignaturas[2]}`;
    }
}

let estudiante1 = new Estudiante("Juan");
console.log(estudiante1.obtenDatos());