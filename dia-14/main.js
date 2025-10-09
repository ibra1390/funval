/* ------------------WHILE------------------ */
/* 
    while (condicion) {
    todo el codigo que se ejecutara 
    dentro del bucle
    }
*/
/* let n = 0;
while (n < 5){
console.log("hola hermano Jaime");
console.log("hola hermano Gerardo");
n++;
}
 */
/* Crear una app que permita ingresar
toda la cantidad de numeros que guste el cliente
hasta que se ingrese el 0
*/

/* let x = 1;

while(x !== 0) {
    x = parseInt(prompt(`ingresa cualquier numero para mostrarlo en consola
                        ingresa 0 para salir de la consulta.`
    ));
    console.log("el numero ingresado por el usuario es:" + x)
} */

/* -------------------DO-WHILE-------------------------- */

/* 
    do {
    TODO EL CODIGO QUE SE EJECUTARA 
    DENTRO DEL BUCLE PERO INGRESA AL MENOS 1 VEZ
    } WHILE (CONDICION)
*/

/* let n = 0;

do{
    console.log("entrando al bucle");
} while (n < 5);
 */
/* CREAR UNA APLICACION QUE PIDA EL NOMBRE DE USUARIO Y LA CONTRASENA 
SI ES INCORRECTA, VOLVER A PEDIR QUE INGRESE SUS DATOS
USERNAME == "ADMIN"
PASSWORD == 123456n
*/

/* let usuario = "";
let password = "";

do {
    usuario = prompt("Ingresa tu nombre de usuario");
    password = prompt("Ingresa tu password")

    if ((usuario.toLowerCase() != "admin") || (password !="123456n")) {
        console.log("Acceso Denegado");
    } else {
        console.log("Acceso autorizado");
    }
    
} while ((usuario.toLowerCase() != "admin") || (password !="123456n")); */


/* --------------------FOR------------------ */
/* for (let contador=1; contador <=7; contador++) {
    console.log("hola mundo");
} */

/* Crear una app que muestre los n terminos de la serie de los numeros
pares ejemplo:
si el cliente coloca n = 6
deberan mostrar en consola, 2,4,6,8,10,12
n=3
2,4,6
n=7
2,4,6,8,10,12,14
*/

/* let num = parseInt(prompt("Ingresa el numero de terminos que quieres mostrar de la serie de pares"));
for (let i = 1; i <= num; i++) {
    console.log(i*2);
}

let serie= 2;
let n = parseInt(prompt("Ingresa un numero"));

for (let i =1; 1 <= n; i++) {
    console.log(serie);
    serie += 2;
} */

/* crear un multiplicador sin usar el simbolo *
    4*5 = 4+4+4+4+4=20
    4*5 = 5+5+5+5 = 20
*/
/* 
let n1 = parseInt(prompt("ingresa el primer numero"));
let n2 = parseInt(prompt("ingresa el segundo numero"));
let resultado = 0;

for(let i=1; i <= n2; i++) {
    resultado += n1;
}

console.log(resultado); */

/* 
 crear el factorial de un numero y dar el resultado utilizando for
 ejemplo 5! = 1*2*3*4*5 = 120
 3! = 1*2*3 = 6
 0!= 1
*/
let factorial = 1;

let n = parseInt(prompt("Ingresa el numero del que quieras obtener su factorial"));
for (let i=1; i <=n; i++) {
    factorial *= i;
}
 console.log(`El factorial de ${n} es ${factorial}`);
 