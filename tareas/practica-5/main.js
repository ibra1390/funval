/* ====================EJERCICIO 1======================== */
/* Pide al usuario cuatro notas (del 0 al 100).
Calcula el promedio y muestra un mensaje según el resultado:

“Excelente” si el promedio es mayor o igual a 90
“Bueno” si es mayor o igual a 75
“Regular” si es mayor o igual a 60
“Insuficiente” en caso contrario

Instrucciones:
Usa if-else-if y operadores lógicos para determinar el mensaje.
Muestra el resultado con console.log() o alert(). */

console.log("Ejercicio 1");

let num1 = parseFloat(prompt("Ingresa la primer nota del 0 al 100"));
let num2 = parseFloat(prompt("Ingresa la segunda nota del 0 al 100"));
let num3 = parseFloat(prompt("Ingresa la tercera nota del 0 al 100"));
let num4 = parseFloat(prompt("Ingresa la cuarta nota del 0 al 100"));
let promedio = (num1 + num2 + num3 + num4) / 4;

if (promedio >= 90) {
    console.log(`Excelente! Tu promedio es de ${promedio}`);
} else if (promedio >= 75) {
    console.log(`Bueno! Tu promedio es de ${promedio}`);
} else if (promedio >= 60) {
    console.log(`Regular, tu promedio es de ${promedio}`);
} else {
    console.log("Insuficiente");
};



/* ====================EJERCICIO 2======================== */
/* El programa debe pedir al usuario:

Su edad
Si es estudiante (“sí” o “no”)
La distancia que recorrerá (en kilómetros)

Reglas del costo:
Menores de 18 pagan 50% del precio base
Estudiantes pagan 75% del precio base
Mayores de 60 pagan 40% del precio base
Si el viaje es mayor a 30 km, se agrega un 10% adicional al total

Instrucciones:
Usa condiciones anidadas (if, else if, else) y operadores lógicos para determinar el costo final. */

console.log("Ejercicio 2")

let precio = 20;
let subtotal = 0;
let edad = parseInt(prompt("Ingresa tu edad"));
let estudiante = prompt("Eres estudiante? Si/No");
let distancia = parseFloat(prompt("Que distancia recorreras en km?"));

if (edad < 18) { 
    subtotal = precio * 0.5;
    console.log(`Tu descuento por ser menor de edad es del 50%. Subtotal: ${subtotal.toFixed(2)}`);
} else if (edad > 60) {
    subtotal = precio * 0.4;
    console.log(`Tu descuento por ser Adulto Mayor es del 60%. Subtotal: ${subtotal.toFixed(2)}`);
}  else if (estudiante.toLowerCase() == "si") {
    subtotal = precio * 0.75
    console.log(`Tu descuento por ser estudiante es del 25%. Subtotal: ${subtotal.toFixed(2)}`)
    }
else {
    subtotal = precio;
    console.log(`No tienes descuentos. Subtotal: ${subtotal.toFixed(2)}`);
};

if (distancia > 30) {
    let total = subtotal * 1.10;
    console.log(`Recargo del 10% por distancia mayor a 30km. Total: ${total.toFixed(2)}`);
} else {
    console.log(`Costo total: ${subtotal.toFixed(2)}`);
}



/* ====================EJERCICIO 3======================== */
/* Muestra un menú con 4 opciones:

Convertir de Celsius a Fahrenheit
Convertir de Fahrenheit a Celsius
Convertir de Metros a Kilómetros
Convertir de Kilómetros a Metros

El usuario debe elegir una opción y escribir el valor a convertir.
El programa mostrará el resultado correspondiente.

Instrucciones:
Usa switch-case para realizar las conversiones y prompt() para las entradas. */

console.log("Ejercicio 3")

let resultado = 0;

let opcion = parseInt(prompt
    (`Selecciona el numero de la conversion que deseas realizar
        OPCIONES
    (1) Convertir de Celsius a Fahrenheit
    (2) Convertir de Fahrenheit a Celsius
    (3) Convertir de Metros a Kilómetros
    (4) Convertir de Kilómetros a Metros 
    `));
let valor = parseFloat(prompt("Escribe el valor a convertir"));

switch (opcion) {
    case 1:
        resultado = (valor * 9/5) + 32;
        console.log(`${valor}°C equivale a ${resultado.toFixed(2)}°F`);
        break;
    case 2:
        resultado = (valor -32) * 5/9;
        console.log(`${valor}°F equivale a ${resultado.toFixed(2)}°C`);
        break;
    case 3:
        resultado = valor / 1000;
        console.log(`${valor}m equivale a ${resultado.toFixed(2)}km`);
        break;
    case 4:
        resultado = valor * 1000;
        console.log(`${valor}km equivale a ${resultado.toFixed(2)}m`);
        break;
    default:
        console.log("valor no reconocido");
        break;
}

/* ====================EJERCICIO 4======================== */
/* El usuario debe ingresar:
El precio total de su compra
Si tiene tarjeta de cliente frecuente (“sí” o “no”)

Reglas:
Si el total es mayor a 500, aplica un 10% de descuento
Si además tiene tarjeta, aplica un 5% adicional
Si el total es menor o igual a 100, aplica un recargo del 5%

El programa debe mostrar el precio final y un mensaje indicando qué descuento se aplicó.

Instrucciones:
Utiliza operadores de asignación y condiciones anidadas para determinar el total.
 */

console.log("Ejercicio 4");

let subtotalCliente = 0;
let precioTotal = parseFloat(prompt("Ingresa el precio total de tu compra"));
let tarjeta = prompt("Tienes tarjeta de cliente frecuente? Si/No")

if (precioTotal > 500) {
    subtotalCliente = precioTotal * 0.9;
    if (tarjeta.toLowerCase() == "si") {
        subtotalCliente *= 0.95;
        console.log(`Se te ha aplicado un 10% de descuento + 5% adicional por tu tarjeta de cliente frecuente, precio final: ${subtotalCliente.toFixed(2)}`); 
    } else {
        console.log(`Se te ha aplicado un 10% de descuento, precio final: ${subtotalCliente.toFixed(2)}`); 
    }
} else if (precioTotal <= 100) {
    subtotalCliente = precioTotal * 1.05;
    console.log(`Se ha aplicado un recargo del 5%, precio final: ${subtotalCliente.toFixed(2)}`);
} else {
    subtotalCliente = precioTotal;
    console.log(`No se aplicó ningún descuento ni recargo, precio final: ${subtotalCliente.toFixed(2)}`);
};

/* ====================EJERCICIO 5======================== */
/* Pide al usuario:

Su año de nacimiento
El año actual

Calcula su edad y muestra un mensaje según el rango:

Menor de edad: menos de 18 años
Adulto joven: entre 18 y 30 años
Adulto: entre 31 y 59 años
Adulto mayor: 60 años o más

BONUS:
Pregunta además si ya cumplió años este año (“sí” o “no”) y ajusta la edad si es necesario.

Instrucciones:
Usa operadores de comparación, if-else-if, y parseInt() para convertir los datos numéricos.
 */


console.log("Ejercico 5");

let año = parseInt(prompt("Cual es tu año de nacimiento?"));
let añoActual = parseInt(prompt("Que año es actualmente?"));
let age = añoActual - año;
let cumple = prompt("Ya cumpliste años este año?? Si/No");

if (cumple.toLowerCase() == "no") {
    age -=1;
}

if (age < 18) {
    console.log(`Tienes ${age} años. Eres menor de edad.`);
} else if (age >=18 && age <= 30) {
    console.log(`Tienes ${age} años. Eres un adulto joven.`);
} else if (age >=31 && age <= 59) {
    console.log(`Tienes ${age} años. Eres un adulto.`);
} else {
    console.log(`Tienes ${age} años. Eres un adulto mayor.`);
};