/* funciones de orden superior - recibe otra funcion*/

function saludar(nombre) {
    console.log("hola amigo: " + nombre)
}

function despedir(nombre) {
    console.log("chau amigo " + nombre)
}

function contratar(nombre) {
    console.log("estas contratado:" + nombre)
}

//declaramos
function superSuperior(callback1, callback2, nombre) { //calback es para llamar otra funcion
    callback1(nombre);
    callback2(nombre);
}

//utilizamos
//funcion que recibe funcion1 funcion2 y un string
superSuperior(saludar, despedir, "Boren");
superSuperior(saludar, despedir, "Ibraim"); //cuando se llaman, son argumentos y cuando se crea la funcion son parametros

/* ------------------------------------------ */
function superior1(callback, nombre) {
    callback(nombre);
}

superior1(function (nombre) { //tambien se puede crear dentro de los argumentos una funcion, con una funcion anonima
    console.log("estoy aqui dentro" + nombre);
}, "David");

superior1((nombre) => {
    console.log("quiero una hamburguesa " + nombre); //funcion arrow
}, "Belen");


/* ----------------creacion de funcion de orden superior----------- */
function recorrido (array,callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

let notas = [34, 77, 55, 32, 82, 91];
let frutas = ["naranja", "manzana", "pera", "papaya"];

recorrido(notas, (nota) =>{
    if (nota >= 51) {
        console.log(nota);
    }
});

recorrido(frutas, (fruta)=>{
    if (fruta === "papaya") {
        console.log("la papaya esta aqui");
    }
});


/* ===================FOR EACH solo recorre el array, no modifica ni crea ===================== */
let estudiantes = ["Alfredo", "Belen", "Boren", "David"];

function mostrar(item) {
    console.log(item);
}

estudiantes.forEach(mostrar); //llamar funcion

estudiantes.forEach((estudianteItem) => {
    console.log(estudianteItem);
})


//  EJERCICIO 2: Sumar números
// Dado un array de números, usa forEach para sumar todos los valores y mostrar el resultado final en consola.
let numeros = [5, 10, 15, 20];

// Tu código aquí 👇
/* let suma = 0;

function sumaNumero(numero) {
    suma += numero;
}

numeros.forEach(sumaNumero);

console.log(`La suma de los numero es: ${suma}`); */

//  EJERCICIO 3: Mostrar índice y valor
// Dado un array de frutas, usa forEach para mostrar en consola:
// "En la posición X está la fruta Y"
let frutitas = ["Manzana", "Banana", "Pera", "Sandía"];

// Tu código aquí 👇
frutitas.forEach((itemFruta, indice, array) => {
    console.log(`En la posicion ${indice} esta la fruta ${itemFruta}`);
});

/* ====================MAP================ hace un nuevo array*/

let notasFunval = [35, 78, 22, 51, 67, 34, 98, 71];

//let arrayNuevo = notasFunval.map((nota) => nota *2)

let arrayNuevo = notasFunval.map((nota) => {
    if (nota>=51) {
        return nota;
    } else {
        return "no es mayor a 51";
    }
});

console.log(arrayNuevo);

let estudiantesFunval = [
    "David", 
    "Boren", 
    "Jose Pelico", 
    "Moises",
    "Belen",
    "Boren",
    "Edmund",
    "Jose Pelico",
    "Jose Pelico",
    "Alfredo",
]

/* utilizar map para que los lugares donde jose pelico
 puso su nombre puedan cambiarlo x estudiante no registrado
*/

let estudiantesNuevo = estudiantesFunval.map((estudiante) => {
    if (estudiante === "Jose Pelico") {
        return "estudiante no registrado"
    } else {
        return estudiante;
    }
});

console.log(estudiantesNuevo)

let numeroPrimos = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 13, 15, 17, 19];
/* 
    x error el profesor Kevin creo una lista de numeros primos pero algunos numeros
    se infiltraron a la lista cambiar los numeros q no son primos x el numero 1 para q todos
    los numeros sean primos
*/

/* -----------------FILTER------------------- */

notasFunval = [35, 78, 22, 51, 67, 34, 98, 71];

let notasResultado = notasFunval.filter((nota)=>{ //let notasResultado = 
    if(nota % 2 === 0) {
        return nota;
    }
})

console.log(notasResultado)

let marcas = [
  "toyota",
  "samsung",
  "lg",
  "sony",
  "paramount",
  "adidas",
  "nike",
  "funval",
];

/* 
    crear una lista nueva con las marcas q tengan mas de 4 letras 
*/
let marcasFiltrado = marcas.filter((marca) => {
    if (marca.length > 4) {
        return marca;
    }
})

console.log(marcasFiltrado);

/* =========FIND=========== */

let controllers = ["Jose", "Diego", "Juan", "Mario", "Marcos"];

let encontrado = controllers.find((controller)=> controller === "kevin");
console.log(encontrado);

/* ============findIndex=============== */
let indice = controllers.findIndex((controller)=> controller === "jose");
console.log(indice);

/* ============SOME----------------- */
let esta = controllers.some((con) => con === "Jose"); //regresa valor boolean
console.log(esta);


 /* ==============uniendo metodos=========== */
 let edades = [35,78,22,18,55,52,33,37,41];

 let arrayResultante = edades
    .map((edad) => edad * 3)
    .filter((edadItem)=> edadItem % 2 === 0);
console.log(arrayResultante);


