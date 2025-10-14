import {promedio, suma, kev} from "./funciones.js";

/* =============CREACION Y DECLARACION DE OBJETOS============= */

let estudianteObj = {
    nombre: "Kevin",
    edad: 28,
    matricula: 1701212,
    pais: "Bolivia",
    altura: 1.60,
    varo: true,
    empresa: {
        nombre: "Funval",
        anoFunvadion: 2005,
    },
    notas: [45, 78, 0, 32, 25, 34],
};

/* =========Acceder a valores de un objeto=========== */

console.log(estudianteObj.nombre);
console.log(estudianteObj);
/* -------------agregar o quitar pares de la llave valor------------- */
estudianteObj.edad = 18; //modificar un valor existente
estudianteObj.numeroDeCelular = 78768016; //creacion de un par llave valor
delete estudianteObj.altura; //eliminar un par de llave valor existente


let peliculaObj = {
    titulo: "matrix",
    año: 1998,
    director: "Lilly y Lana Wachowski",
    duracion: 131,
    genero: "ciencia ficcion",
    actor: "Keanu Reeves"
};

console.log(peliculaObj)
peliculaObj.año = 1999; //modificar
peliculaObj.pais = "Estados Unidos"; //creacion
delete peliculaObj.actor;
/* ==================================== */
console.log(estudianteObj.empresa.anoFunvadion);
console.log(estudianteObj.notas[2]);

/* 
    quiero q puedan extraer el promedio de nuestro estudiante y puedan determinar
    si esta aprobado o reprobado
    en caso de estar aprobado mostrar un mensaje q diga
    "el estudiante nombre de la empresa funval tiene un promedio de promedio por lo tanto esta aprobado"
    "el estudiante nombre de la pais Bolivia tiene un promedio de promedio por lo tanto esta reprobado"
*/

/* let promedio = 0;
let suma = 0;

for (let i = 0; i < estudianteObj.notas.length; i++) {
    suma += estudianteObj.notas[i];
}

promedio = suma / estudianteObj.notas.length;
if (promedio > 50) {
    console.log(`El estudiante ${estudianteObj.nombre} de la empresa ${estudianteObj.empresa.nombre} tiene un promedio de ${promedio.toFixed(2)} por lo tanto esta aprobado`);
} else {
    console.log(`El estudiante ${estudianteObj.nombre} de la empresa ${estudianteObj.empresa.nombre} tiene un promedio de ${promedio.toFixed(2)} por lo tanto reprobado`);
} */

let estudiantesFunvalN1 = [
    {
        nombre: "Alfredo",
        edad: 25,
        pais: "Mexico",
        notas: [5, 62, 37, 8, 22],
        celular: 12356234,
    },
    {
        nombre: "Belen",
        edad: 22,
        pais: "Bolivia",
        notas: [47, 100, 0],
        celular: 12356234,
    },
    {
        nombre: "Boren",
        edad: 25,
        pais: "Colombia",
        notas: [77, 89, 35, 21],
        celular: 12356234,
    },
    {
        nombre: "David",
        edad: 33,
        pais: "Chile",
        notas: [100, 56, 37, 2, 77],
        celular: 12356234,
    },
];

let n2Funval = [];
for (let i = 0; i < estudiantesFunvalN1.length; i++) {
    console.log(estudiantesFunvalN1[i]);
    if (promedio(estudiantesFunvalN1[i].notas) >= 75) {
        n2Funval.push(estudiantesFunvalN1[i]);
    }  
}
console.log(n2Funval);
