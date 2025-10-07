console.log("esta funcionando");

/* ------------------- IF ------------- */
/* 
    if(CONDICION){
    TODO CODIGO QUE SE EJECUTARA SI LA 
    CONDICION ES VERDADERA
    }
 */

if ( 5 > 4){
    console.log("5 siempre sera mayora 4")
}

/* ----------------IF-ELSE----------------- */
/* 
    IF(CONDICION) {
    TODO EL CODIGO QUE SE EJECUTARA
    SI LA CONDICION ES VERDADERA
    } ELSE {
     TODO EL CODIGO QUE SE EJECUTARA
     SI LA CONDICION ES FALSA
     }
 */

if((5 >= 2 && 3 == "3") || 0 < 7 ){
    console.log("codigo verdadero");
} else {
    console.log("codigo falso");
}

let condicioncita = 0; //El 0 lo toma como falso
/* El null se toma como valor negativo (falso) */

if (condicioncita) {
    console.log("kevin");
} else {
    console.log("andres");
}

/* -----------IF-ELSE-IF----------- */
/* 
    IF(CONDICION) {
    TODO EL CODIGO QUE SE EJECUTARA
    SI LA CONDICION ES VERDADERA
    } ELSE IF (CONDICION2) {
     TODO EL CODIGO QUE SE EJECUTARA
     SI LA CONDICION1 ES FALSA
     Y LA CONDICION2 ES VERDADERA
     }
*/

if (1 > 5) {
    console.log("condicion 1 verdadero")
} else if (2 > 3) {
    console.log("condicion 1 falso pero condicion 2 verdadero");
} else if (5 > 2) {
    console.log("condicion 2 es falsa pero condicion 3 verdadera");
}

/* 
evalular si el clima del dia 0-10 hace frio
si esta entre 11 y 24 hace buen clima
y si es mayor a 25 hace calor
*/

let clima = 14;
if (clima >=0 && clima <=10) {
    console.log("hace frio")
} else if (clima >= 11 && clima <= 24) {
    console.log("hace buen clima");
} else if (clima >= 25) {
    console.log("hace calor");
} else {
    console.log("clima fuera de los parametros");
}

/* 
   crear una app que nos permita determinar que mes estamos
   del año, el cliente debera ingresar el mes en un formato numerico
   si coloca 2, el resultado deberia ser febrero
*/

let mes = "13";
if (mes == 1) {
    console.log("es enero")
} else if (mes == 2) {
    console.log("es febrero")
} else if (mes == 3) {
    console.log("es marzo")
} else if (mes == 4) {
    console.log("es abril")
} else if (mes == 5) {
    console.log("es mayo")
} else if (mes == 6) {
    console.log("es junio")
} else if (mes == 7) {
    console.log("es julio")
} else if (mes == 8) {
    console.log("es agosto")
} else if (mes == 9) {
    console.log("es septiembre")
} else if (mes == 10) {
    console.log("es octubre")
} else if (mes == 11) {
    console.log("es noviembre")
} else if (mes == 12) {
    console.log("es diciembre")
} else {
    console.log("mes no reconocido")
};

/* ----------PROMPT--------------- */

/* let resultadoCliente = parseInt(prompt("ingresa tu nombre"));  *///valor de tipo string o se coloca parseInt para cambiarlo a valor numerico
//console.log(resultadoCliente);
/* let resultadoNumero = parseFloat(prompt("ingresa un numero decimal")); *///valor de tipo numerico
//console.log(resultadoNumero);

/* ===========SWITCH CASE================== */

/* let mesecillo = parseInt(prompt("ingresa el mes de nacimiento")) */
/* switch (mesecillo) {
    case 1:
        console.log("enero");
        break;
    case 2:
        console.log("febrero");
        break;
    case 3:
        console.log("marzo");
        break;
    case 4:
        console.log("abril");
        break;
    case 5:
        console.log("mayo");
        break;
    case 6:
        console.log("junio");
        break;
    case 7:
        console.log("julio");
        break;
    case 8:
        console.log("agosto");
        break;
    case 9:
        console.log("septiembre");
        break;
    case 10:
        console.log("octubre");
        break;
    case 11:
        console.log("noviembre");
        break;
    case 12:
        console.log("diciembre");
        break;
    default:
        console.log("No reconocido");
        break;
} */

/* ----------------------------------------------------------------------- */
// =======================================================
// IF SIMPLE (EJERCICIOS 1 - 5)
// =======================================================

/*
1. Pide al usuario un número con prompt.
   Muestra "Positivo" si el número es mayor que 0.
*/
// RESPUESTA AQUÍ 👇
/* let num = parseInt(prompt("ingresa un numero"));
if (num > 0) {
    console.log("numero positivo")
};
 */
/*
2. Pide la edad del usuario.
   Si la edad es mayor o igual a 18, muestra "Eres mayor de edad".
*/
// RESPUESTA AQUÍ 👇
/* let edad = parseInt(prompt("ingresa tu edad"));
if (edad >= 18) {
    console.log("eres mayor de edad")
} else {
    console.log("eres menor de edad")
}; */
/*
3. Pide un número y verifica si es par.
   Usa el operador % y un if.
*/
// RESPUESTA AQUÍ 👇
/* let num1 = parseInt(prompt("ingresa un numero"));
if (num1 % 2 === 0) {
    console.log("este es un numero impar")
} else {
    console.log("este es un numero impar")
}; */
/*
4. Pide una contraseña con prompt.
   Si la contraseña es "admin123", muestra "Acceso permitido".
*/
// RESPUESTA AQUÍ 👇
/* let password = prompt("ingresa tu password");
if (password == "admin123") {
    console.log("Acceso permitido")
} else {
    console.log("Acceso denegado")
}; */
/*
5. Pide un número.
   Si el número es igual a 100, muestra "Número exacto".
*/
// RESPUESTA AQUÍ 👇
/* let num2 = parseInt(prompt("ingresa un numero"));
if (num2 === 100) {
    console.log("Numero exacto")
} else {
    console.log("Numero incorrecto")
}; */
// =======================================================
// IF - ELSE (EJERCICIOS 6 - 10)
// =======================================================

/*
6. Pide un número.
   Si es mayor que 50 muestra "Número alto", caso contrario "Número bajo".
*/
// RESPUESTA AQUÍ 👇
/* let num3 = parseInt(prompt("ingresa un numero de nuevo"));
if (num3 > 50) {
    console.log("Numero alto")
} else {
    console.log("Numero bajo")
}; */
/*
7. Pide la edad del usuario.
   Si es mayor o igual a 18 muestra "Bienvenido",
   caso contrario "Acceso denegado".
*/
// RESPUESTA AQUÍ 👇
/* let edad2 = parseInt(prompt("ingresa tu edad de nuevo"));
if (edad2 >= 18) {
    console.log("Bienvenido")
} else {
    console.log("Acceso denegado")
}; */
/*
8. Pide una nota entre 0 y 100.
   Si la nota es mayor o igual a 60 muestra "Aprobado", de lo contrario "Reprobado".
*/
// RESPUESTA AQUÍ 👇
/* let nota = parseInt(prompt("ingresa una nota entre 0 y 100"));
if (nota >= 60) {
    console.log("Aprobado")
} else {
    console.log("Reprobado")
}; */
/*
9. Pide un nombre.
   Si el nombre es "Kevin" muestra "Hola Kevin",
   de lo contrario "Hola invitado".
*/
// RESPUESTA AQUÍ 👇
/* let nombre3 = prompt("Ingresa tu nombre");
if (nombre3 == "Kevin") {
    console.log("Hola Kevin")
} else {
    console.log("Hola invitado")
}; */
/*
10. Pide un número y muestra si es par o impar usando if-else.
*/
// RESPUESTA AQUÍ 👇
/* let num4 = parseInt(prompt("ingresa un numero de nuevo"))
if (num4 % 2 == 0) {
    console.log("numero par")
} else {
    console.log("numero impar")
}; */
// =======================================================
// IF - ELSE IF (EJERCICIOS 11 - 15)
// =======================================================

/*
11. Pide una nota (0 a 100) e imprime:
   - "Excelente" si es mayor o igual a 90
   - "Bueno" si está entre 70 y 89
   - "Regular" si está entre 50 y 69
   - "Insuficiente" si es menor a 50
*/
// RESPUESTA AQUÍ 👇
/* let nota1 = parseInt(prompt("ingresa una nota de 0 a 100"));
if (nota >= 90) {
    console.log("Excelente")
} else if (nota >=70 && nota <=89) {
    console.log("Bueno")
} else if (nota >=50 && nota <=69) {
    console.log("Regular")
} else if (nota < 50) {
    console.log("Insuficiente")
};
 */
/*
12. Pide la temperatura (en grados Celsius).
   Muestra:
   - "Frío" si es menor a 15
   - "Templado" si está entre 15 y 25
   - "Caluroso" si es mayor a 25
*/
// RESPUESTA AQUÍ 👇
/* let temp = parseInt(prompt("Ingresa una temperatura"));
if (temp < 15) {
    console.log("Frio")
} else if (temp >=15 && temp <=25) {
    console.log("Templado")
} else if (temp > 25) {
    console.log("Caluroso")
}; */
/*
13. Pide una hora (0 a 23).
   Muestra:
   - "Buenos días" si está entre 6 y 11
   - "Buenas tardes" si está entre 12 y 18
   - "Buenas noches" si está entre 19 y 23
   - "Durmiendo" si está entre 0 y 5
*/
// RESPUESTA AQUÍ 👇
/* let hora = parseInt(prompt("Ingresa una hora de 0 a 23"));
if (hora >=6 && hora <=11) {
    console.log("Buenos dias")
} else if (hora >=12 && hora <=18) {
    console.log("buenas tardes")
} else if (hora >=19 && hora <=23) {
    console.log("buenas noches")
} else if (hora >=0 && hora <=5) {
    console.log("Durmiendo")
}; */
/*
14. Pide un número del 1 al 3 y muestra un mensaje distinto para cada uno.
*/
// RESPUESTA AQUÍ 👇
/* let num5 = parseInt(prompt("Ingresa un numero del 1 al 3"))
if (num5 === 1) {
    console.log("Felicidades")
} else if (num5 === 2) {
    console.log("Casi ganas")
} else if (num5 === 3) {
    console.log("Por poco")
} else {
    console.log("Mala suerte")
}; */
/*
15. Pide un número y muestra:
   - "Negativo" si es menor que 0
   - "Cero" si es igual a 0
   - "Positivo" si es mayor que 0
*/
// RESPUESTA AQUÍ 👇
/* let num6 = parseInt(prompt("Ingresa un numero"))
if (num6 < 0) {
    console.log("Negativo")
} else if (num6 === 0) {
    console.log("Cero")
} else if (num6 > 0) {
    console.log("Positivo")
} */
// =======================================================
// IF ANIDADO (EJERCICIOS 16 - 20)
// =======================================================

/*
16. Pide una edad.
   Si es mayor o igual a 18 muestra "Mayor de edad".
   Dentro del mismo if, si es mayor o igual a 60 muestra "Adulto mayor".
*/
// RESPUESTA AQUÍ 👇
/* let edad3 = parseInt(prompt("Ingresa una edad"))
if (edad3 >= 18) {
    console.log("Mayor de edad")
    if (edad3 >= 60) {
        console.log("Adulto mayor");
    }
    
} */
/*
17. Pide una nota.
   Si es mayor o igual a 60 muestra "Aprobado".
   Dentro de ese if, si la nota es mayor o igual a 90 muestra "Excelente".
*/
// RESPUESTA AQUÍ 👇
/* let nota4 = parseInt(prompt("Ingresa una nota"))
if (nota4 >= 60) {
    console.log("Aprobado")
    if (nota4 >= 90) {
        console.log("Excelente")
    }
}; */
/*
18. Pide un número.
   Si es positivo, dentro del if verifica si es par o impar.
*/
// RESPUESTA AQUÍ 👇
/* let num7 = parseInt(prompt("ingresa un numero"))
if (num7 % 2 == 0) {
    console.log("Numero par")
    if (num7 % 2 != 0)
        console.log("Numero impar")
}; */
/*
19. Pide usuario y contraseña.
   Si usuario es "admin", dentro del mismo if verifica si la contraseña es "1234".
   Si ambos coinciden, muestra "Acceso concedido".
*/
// RESPUESTA AQUÍ 👇
/* let usuario = prompt("ingresa tu usuario")
let password2 = prompt("ingresa tu password")
if (usuario == "admin") {
    if (password == "1234")
        console.log("Acceso concedido")
}; */
/*
20. Pide dos números.
   Si el primero es mayor, muestra "El primero es mayor".
   Dentro de ese if, verifica si la diferencia es mayor a 10 y muestra "Diferencia grande".
*/
// RESPUESTA AQUÍ 👇
/* let num8 = parseInt(prompt("ingresa un numero"))
let num9 = parseInt(prompt("ingresa un numero"))
if (num8 > num9) {
    console.log("El primero es mayor")
    if ((num8 - num9) > 10) {
        console.log("Diferencia grande")
    }
}  */
// =======================================================
// SWITCH CASE (EJERCICIOS 21 - 22)
// =======================================================

/*
21. Pide un número del 1 al 7 y muestra el día correspondiente.
   1 = Lunes, 2 = Martes, ..., 7 = Domingo
*/
// RESPUESTA AQUÍ 👇
/* let numero3 = parseInt(prompt("Ingresa un numero del 1 al 7"))
switch (numero3) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("No reconocido");
        break;
}  */
/*
22. Pide un número del 1 al 12 y muestra el mes correspondiente.
*/
/* let mesillo = parseInt(prompt("Ingresa un numero del 1 al 12"))
switch (mesillo) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 10:
        console.log("Noviembre");
        break;
    case 10:
        console.log("Diciembre");
        break;
    default:
        console.log("Mes no reconocido");
        break;
}  */
// =======================================================
// COMBINACIÓN DE TODOS LOS TEMAS (EJERCICIOS 23 - 35)
// =======================================================

/*
23. Pide dos números.
   Usa if-else para mostrar si su suma es par o impar.
*/
// RESPUESTA AQUÍ 👇
/* let no1 = parseInt(prompt("Ingresa un numero"))
let no2 = parseInt(prompt("Ingresa otro numero"))
if ((no1 + no2) % 2 == 0) {
    console.log("la suma es un numero par")
} else {
     console.log("la suma es un numero impar")
}; */
/*
24. Pide tres notas, calcula el promedio.
   Usa if-else-if para mostrar:
   - "Excelente" si es mayor a 90
   - "Aprobado" si es mayor o igual a 60
   - "Reprobado" si es menor a 60
*/
// RESPUESTA AQUÍ 👇
/* let note1 = parseInt(prompt("Ingresa una nota"))
let note2 = parseInt(prompt("Ingresa segunda nota"))
let note3 = parseInt(prompt("Ingresa tercera nota"))
promedio = (note1 + note2 + note3) / 3
if promedio > 90) {
    console.log("Excelente")
} else if (promedio >= 60) {
    console.log("Aprobado")
} else if (promedio < 60) {
    console.log("Reprobado")
}; */

/*
25. Pide nombre y edad.
   Usa un if anidado para mostrar:
   - "Hola [nombre], eres mayor de edad"
   - Si tiene 60 o más, agrega también "y adulto mayor"
*/
// RESPUESTA AQUÍ 👇
/* let name = prompt("Ingresa tu nombre");
let age = parseInt(prompt("Ingresa tu edad"));
if (age >= 18) {
    console.log("Hola ", name, "eres mayor de edad")
    if (age >= 60) {
        console.log("Hola", name, "eres mayor de edad y adulto mayor")
    }
} else {
    console.log("Hola", name, "eres menor de edad")
}; */
/*
26. Pide un número del 1 al 5 y usa switch para mostrar una calificación:
   1 = Muy malo, 2 = Malo, 3 = Regular, 4 = Bueno, 5 = Excelente.
*/
// RESPUESTA AQUÍ 👇
/* let number3 = parseInt(prompt("Ingresa un numero del 1 al 5"))
switch (number3) {
    case 1: 
        console.log("Muy malo");
        break;
    case 2:
        console.log("Malo");
        break;
    case 3:
        console.log("Regular");
        break;
    case 4:
        console.log("Bueno");
        break;
    case 5:
        console.log("Excelente");
        break;
    default:
        console.log("numero no valido");
        break;
} */
/*
27. Pide una letra y determina si es vocal o consonante usando switch.
*/
// RESPUESTA AQUÍ 👇
/* let letra = prompt("introduce una letra");
switch (letra) {
    case "a":
        console.log("es una vocal");
        break;
    case "e":
        console.log("es una vocal");
        break;
    case "i":
        console.log("es una vocal");
        break;
    case "o":
        console.log("es una vocal");
        break;
    case "u":
        console.log("es una vocal");
        break;
    default:
        console.log("es una consonante");
        break;
} */
/*
28. Pide dos números y una operación ("sumar", "restar", "multiplicar", "dividir").
   Usa switch para realizar la operación correspondiente.
*/
// RESPUESTA AQUÍ 👇
console.log("EJERCICIO 28")
let number1 = parseInt(prompt("Ingresa el primer numero"));
let number2 = parseInt(prompt("Ingresa el segundo numero"));
let operacion = prompt(`Que operacion quieres realizar? 
                        Suma
                        Resta
                        Multiplicacion
                        Division`)
switch (operacion.toLowerCase()) {
    case "suma":
        console.log("Resultado: ", number1 + number2);
        break;
    case "resta":
        console.log("Resultado: ", number1 - number2);
        break;
    case "multiplicacion":
        console.log("Resultado: ", number1 * number2);
        break;
    case "division":
        console.log("Resultado: ", number1 / number2);
        break;
    default:
        console.log("operacion no reconocida");
        break;
}
/*
29. Pide edad y país.
   Si el país es "Bolivia" y la edad es mayor o igual a 18, muestra "Puede votar".
   Caso contrario, muestra "No puede votar".
*/
// RESPUESTA AQUÍ 👇
let nombrePais ="Bolivia";
let cantidadLetras =nombrePais.length; //CANTIDAD DE LETRAS
let letrita = nombrePais[0]; //devuelve la letra segun su posicon
console.log(letrita);
console.log(cantidadLetras);
/*
30. Pide tres números.
   Determina cuál es el mayor de los tres usando if-else-if.
*/
// RESPUESTA AQUÍ 👇

/*
31. Pide un número y determina:
   - Si es múltiplo de 3 muestra "Fizz"
   - Si es múltiplo de 5 muestra "Buzz"
   - Si es múltiplo de ambos muestra "FizzBuzz"
*/
// RESPUESTA AQUÍ 👇

/*
32. Pide una nota (0 a 100) y muestra:
   "A" si es >= 90
   "B" si es >= 80
   "C" si es >= 70
   "D" si es >= 60
   "F" si es menor de 60
*/ 
// RESPUESTA AQUÍ 👇

/*
33. Pide nombre de usuario y contraseña.
   Si usuario es "Alfredo" o "Moises" y contraseña es "1234",
   muestra "Acceso autorizado", de lo contrario "Denegado".
*/
// RESPUESTA AQUÍ 👇

/*
34. Pide la cantidad de artículos comprados y el precio por unidad.
   Si compró más de 10 artículos, aplica 10% de descuento.
   Muestra el total a pagar.
*/
// RESPUESTA AQUÍ 👇

/*
35. Ejercicio Final:
   Pide nombre, edad y tres notas.
   Calcula el promedio, determina si aprueba y muestra:
   "Hola [nombre], tienes [edad] años y tu promedio es [promedio]. Aprobado/Reprobado."
   Usa if-else-if o anidado.
*/
// RESPUESTA AQUÍ 👇
