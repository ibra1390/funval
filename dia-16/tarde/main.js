/* ---------------------EJERCICIOS----------------------------------- */
// 1. Crea un array con 5 nombres y muestra el primero y el último elemento en consola.
let nombres = ["Juan", "Pedro", "Carlos", "Martin", "Fernando"];
/* console.log(nombres[0]);
console.log(nombres[nombres.length - 1]); */

// 2. Agrega un elemento al final del array usando push y muestra el nuevo array.
nombres.push("Mario");
//console.log(nombres);

// 3. Quita el último elemento usando pop y muestra el elemento eliminado y el array final.
let ultimo = nombres.pop();
console.log(ultimo);
console.log(nombres);

// 4. Agrega un elemento al inicio del array usando unshift y muestra el resultado.
let animales = ["gato", "perro", "pajaro", "pez"];
animales.unshift("gallina");
console.log(animales);

// 5. Elimina el primer elemento con shift y muestra el elemento eliminado.
let primero = nombres.shift();
console.log(primero);

// 6. Crea un array de números y muestra cuántos elementos tiene con length.
let numeros = [1, 2, 3, 4, 5, 8, 10, 64];
console.log(numeros.length)

// 7. Recorre un array de frutas con un bucle for y muestra cada fruta en consola.
let canastaFrutas = ["naranja", "guayaba", "manzana"]
for (let j= 0; j < canastaFrutas.length; j++) {
    console.log(canastaFrutas[j]);
}
// 8. Recorre un array de números con for of y muestra el doble de cada número.
for (const numero of numeros) {
    console.log(numero * 2);  
}
// 9. Crea un array de colores y muestra el índice y el valor de cada elemento usando for.
let colores = ["rojo", "azul", "verde", "morado", "amarillo"];

for (let j = 0; j < colores.length; j++) {
    console.log("el indice es" + j + " y el valor que tienes es: " + colores[j]);
}

// 10. Crea un array vacío y agrega 5 elementos con push dentro de un bucle for.
let vacio = [];

for (let v =0 ; v < 5; v++) {
    //let elemento = prompt("Ingresa un elemento: ")
   //vacio.push(elemento);
    //console.log(vacio);
}

// 11. Crea un array de 5 números y suma todos sus valores usando un bucle for.
let numeritos = [322, 89, 15, 4, 2025];

let respuesta = 0;
for (let i = 0; i < numeritos.length; i++) {
    respuesta += numeritos[i];
}

console.log(respuesta);
// 12. Crea un array de palabras y cuenta cuántas tienen más de 4 letras.
let palabras = ["buro", "casa", "arbol", "tacos", "canasta", "torre"];
let contador = 0;

for (let p = 0; p < palabras.length; p++) {
    if (palabras[p].length > 4) {
        contador++;
    }
}
console.log (`numero de palabras con mas de 4 letras: ${contador}`);

// 13. Crea un array con nombres y verifica si existe un nombre específico recorriéndolo.
nombres = ["kevin", "mario", "hugo", "hernan", "ramiro"];
let pepe = false;
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === "moises") {
        pepe = true;
    }
    
}

if (pepe) {
    console.log("el nombre esta aqui");
} else {
    console.log("el nombre no fue encontrado");
}

// 14. Crea un array con edades y muestra solo las edades mayores a 18.
let edad = [30, 16, 45, 18, 12, 15];

for (let x = 0; x < edad.length; x++) {
    if (edad[x] >= 18) {
        console.log(`tu edad es de ${edad[x]} años por lo tanto eres mayor de edad`)
    }
}

// 15. Crea un array de números y crea un nuevo array con el triple de cada número.
// 16. Crea un array de precios y calcula el total sumando todos sus elementos.
// 17. Crea un array de 10 números y cuenta cuántos son pares.
// 18. Crea un array con nombres y agrega uno nuevo solo si no está repetido.
// 19. Crea un array con números y muestra cuál es el mayor (sin usar Math.max).
// 20. Crea un array con números y muestra cuál es el menor (sin usar Math.min).
// 21. Crea un array con nombres y elimina el último elemento si hay más de 5 elementos.
// 22. Crea un array con 5 nombres y usa un bucle para mostrar cada nombre en mayúsculas.
// 23. Crea un array con 5 números y crea otro array con los números invertidos.
// 24. Crea un array de 5 números y calcula el promedio.
// 25. Crea un array con nombres y elimina un nombre específico recorriéndolo.
// 26. Crea un array de notas (0 a 100) y cuenta cuántos aprobaron (>= 51).
// 27. Crea un array con varios animales y muestra en qué posición está “perro”.
// 28. Crea un array de frutas y cambia el valor de la segunda fruta por otra nueva.
// 29. Crea un array con 5 números y muestra solo los que estén en posiciones pares.
// 30. Crea un array con nombres y forma una cadena con todos los nombres separados por coma.


// 4. Crea un array con números y elimina los números repetidos dejando solo uno de cada valor (sin usar Set).
