/* =====CREAR O DECLARAR UN ARRAY O VECTOR======*/

let frutas = ["banana", "frutillas", "papaya", "chirimoya", "uvas", "palta"];
console.log(frutas[4]);

/* METODOS BASICOS ARRAYS */
let cantidadFrutas = frutas.length; //cantidad de elementos que tiene la lista
console.log(cantidadFrutas);

frutas.push("sandia, IGO"); //agrega un elemento o mas al final de la lista

frutas.unshift("naranja", "mandarina"); //agrega un elemento o mas al inicio de la lista

let frutaEliminada = frutas.pop(); //elimina el ultimo elemento de la lista o retornarlo

let frutaEliminadaPrimer = frutas.shift(); //elimina el primer elemento de la lista o retorna

/*--------- REGLA DE ORO----------- */

//ITERAR CON UN FOR
//for normal  si trabaja  con el indice y posicion
frutas.push("guayaba");
for (let index = 0; index < frutas.length; index++) {
    if("guayaba"=== frutas[index]) {
        console.log("la guayaba esta en la lista");
    }   
}
//for of no trabaja el indice o posicion del array solo el elemento
for (const fruta of frutas) {
    console.log(fruta);
    if ("papaya" === fruta) {
        console.log("la papaya esta aqui");
    }
}


/* =========EJERCICICOS======= */

/* 
dado un array de notas, sacar el promedio y verificar si esta aprobado o reprobado 
let notas = [90.23,65,0,90]
*/

let notas = [90,23,65,0,90];
let promedio = 0;

for (let i = 0; i < notas.length; i++) {
    promedio += notas[i];
}

promedio /= notas.length;

if (promedio > 50) {
        console.log(`tu promedio es de ${promedio.toFixed(2)}, estas aprobado`);
    } else {
        console.log(`tu promedio es de ${promedio.toFixed(2)}, estas reprobado`);
    }

/* 
    dado una lista de edades de la compañia funval 
    let edades=[65,26,33,20,35,67,78]
    funval quiere saber la cantidad de personas q deben recibir el bono antiguedad
    este bono se da a las personas q tiene mas de 34 años 
    crear una lista de las edades q ingresan a el bono
    resl=[65,35,67,78]
*/

let edades = [65,26,33,20,35,67,78];
let beneficiados = []

for (let index = 0; index < edades.length; index++) {
    if (edades[index] > 34) {
    beneficiados.push(edades[index]);
    }
}
console.log(beneficiados)

/* -------------DECLARAR MATRICES-------- */   

let matrizEstudiantes = [
    ["Boren", "Alfredo", "Jaime"],
    ["Mario", "Jesus", "Luis"],
    ["Juan", "Diego", "Jorge"],
]
console.log(matrizEstudiantes[2][2]);

/*======RECORRER MATRIZ========= */
for (let i = 0;  i < matrizEstudiantes.length; i++) {
    //console.log(matrizEstudiantes[i]);
    for (let j = 0; j < matrizEstudiantes[i].length; j++) {
        console.log(matrizEstudiantes[i][j]);
    }
}

/* 
    crear un programa q reciba una matriz cuadrada de cualquier dimensaion ejemplo
    let mat=[[2,3,7],[35,78,2],[57,35,28]]
    y realizar la suma de la diagonal principal y en otra variable la diagonal secundaria
*/

let mat=[
    [2,3,7],
    [35,78,2],
    [57,35,28]
];



