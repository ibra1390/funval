/* mostrar mensajes en 
consola 
comentario en
multiples lineas*/


//comentarios en una sola linea

console.log("hola funval dia 11");

// TIPOS DE DATOS PRIMIVITOS
let nombre = "Kevin" //tipo string o cadena de texto
console.log(typeof nombre);
let edad = 27 //tipo number puede ser entero o decimal
let boliviano = true; //tipo boolean solo puede ser true o false
let salvado; //undefined cuando no esta definido el tipo de dato
let dinero = null; //cuando una variable es nula
let facturas = BigInt(123453453534346433543n); // para numeros grandes que exceden los 64 o 32 bits
let simbolico = Symbol('asd123'); // valores simbolicos
let apellido = ""

/* Como verificar que tipo de dato tiene una variable (typeof) */
console.log(typeof apellido);
console.log(typeof salvado);
console.log(typeof simbolico);


/* ----------CARACTERISTICAS IMPORTANTES DE JS ------------ */
//ES DE TIPADO DEBIL
//ES DE TIPADO DINAMICO
//ES UN LENGUAJE INTERPRETADO MAS NO COMPILADO


nombre = 123;
let resultado = edad + salvado; /* NaN Not a Number, cuando se suma un undefined */
console.log(typeof resultado);
console.log(typeof nombre);


/* ------------VARIABLES Y CONSTANTES-------------- */

var pepito = 123; //mala practica, obsoleto, se puede redeclarar y sobreescribir
let juanito = 321; //no se puede redeclarar pero si sobreescribir
const menganito = 3322; //no se puede redeclarar ni sobreescribir
//COnst no se puede usar con undefined

/*
    crear 7 variables con diferentes tipos de datos primitivos
    verificar el tipo de dato que tienen con type of y cambiar al menos 3
*/

let animal = "perro";
console.log(typeof animal);
let temperatura = 25.4;
console.log(typeof temperatura);
const altura = 50;
console.log(typeof altura);
let aprobado = true;
console.log(typeof aprobado);
let soltero = false;
console.log(typeof soltero);
const velocidad = 35;
console.log(typeof velocidad);
let jas = "pedro";
console.log(typeof jas);

animal = 4;
aprobado = "no";
temperatura = "25 centigrados"


/* -------------OPERADORES ARITMETICOS------------ */
let a = 3;
let b = 2;
let c = "5";
resultado = 0;

resultado = a + b; //suma
resultado = a - b; //resta
resultado = a * b; //multi
resultado = a / b; //division
resultado = a % b; //modulo
resultado = a ** b; //potencia

/* -----caso especial------ */
let estudiante = "Juan"
let estApellido = "Perez";
let nombreCompleto = estudiante + "" + estApellido;
console.log(nombreCompleto);


/* -----------OPERADORES DE COMPARACION---------- */
//RESULTADO DE TODO OPERADOR DE COMPARACION ES UN BOOLEAN
a = 33;
b = 44;
c = "33";
nombre;
let nombre2;
resultado = nombre === nombre2;
console.log(resultado);
resultado = a == b; //COMPARA SI LAS DOS VARIABLES SON IGUALES PERO SOLO EL CONTENIDO Y NO EL TIPO DE DATO
resultado = a === c; //COMPARA SI LAS DOS VARIABLES SON IGUALES Y EL TIPO DE DATO
resultado = a != c; //COMPARA SI LAS DOS VARIABLES SON DIFERENTES Y EL TIPO DE DATO NO LE IMPORTA
resultado = a !== c; //COMPARA SI LAS DOS VARIABLES SON DIFERENTES Y EL TIPO DE DATO LE IMPORTA
resultado = a > b; //COMPARA SI una variable es mayor a la otra
resultado = a >= b; //COMPARA SI una variable es mayor o igual a la otra
resultado = a < b; //COMPARA SI una variable es menor a la otra
resultado = a <= b; //COMPARA SI una variable es menor o igual a la otra

/* -------------------OPERADORES LOGICOS------------------------ */
//AND evalua si ambos comparadores son verdaderos, es verdadero...en los demas casos es falso
resultado = 2 < 3 && 3 > 5;
//OR evalua si ambos comparadores son falsos, es falso...en los demas casos es verdadero
resultado = 2 < 3 || 3 > 5;
//not - invierte el valor booleano
resultado = !(2 < 3);
// se puede unir mas de 2 conectores logicos en una misma proposicion
resultado = (2 < 3 && 3 > 5) || a==b;

/* ------------OPERADORES DE ASIGNACION---------- */
a = 12;
a++; // a = a + 1
a--; // a = a - 1
a+= 8; // a = a + 8
a-= 8; // a = a - 8
a *= 8; //a = a * 8
a /= 8; // a = a / 8
a %= 8; // a = a % 8
a **= 8; // a = a ** 8

/* ------------------------------OPERADOR TERNARIO (if abreviado)---------------------------------- */
/* 
    condicion
        ? codigo si la condicion es verdadera
        : codigo si la condicion es falsa
*/

edad = 15;

edad >= 18
  ? console.log("eres mayor de edad")
  : console.log("eres menor de edad");

/* ------------------------------------------------------------------------------ */
// =======================================================
// OPERADORES ARITMÉTICOS (EJERCICIOS 1 - 8)
// =======================================================

/*
1. Declara dos variables a y b con valores numéricos.
   Muestra en consola su suma, resta, multiplicación y división.
*/
// RESPUESTA AQUÍ 👇
let d = 10;
let e = 12;
console.log("ejercicio 1");
console.log( d + e);
console.log(d - e);
console.log(d * e);
console.log(d / e);

/*
2. Calcula el área de un rectángulo (base * altura).
   Muestra el resultado en consola.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 2")
let base = 6;
let altura2 = 2;
console.log(base * altura2);
/*
3. Calcula el área de un triángulo usando la fórmula (base * altura) / 2.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 3");
console.log((base * altura2) / 2);
/*
4. Calcula el módulo (resto) de dividir 25 entre 4.
   Usa el operador %.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 4");
console.log(25 % 4);
/*
5. Declara una variable "numero" y muestra su cuadrado y su cubo.
   Usa los operadores **2 y **3.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 5")
let numero = 5;
console.log(numero ** 2);
console.log(numero ** 3);
/*
6. Calcula el perímetro de un cuadrado con lado = 5.
   Fórmula: lado * 4
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 6")
let lado = 5;
console.log(lado * 4);
/*
7. Declara dos números y muestra si su suma es par o impar.
   Usa el operador % para comprobar si el resto es 0.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 7")
let numero1 = 5;
let numero2 = 8;
resultado = numero1 + numero2;
resultado % 2 === 0
  ? console.log("la suma es par")
  : console.log("la suma es impar");
/*
8. Calcula el promedio de tres notas y muestra el resultado en consola.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 8")
let nota1 = 9;
let nota2 = 6;
let nota3 = 10;
console.log((nota1 + nota2 + nota3) / 3);

// =======================================================
// OPERADORES DE ASIGNACIÓN (EJERCICIOS 9 - 12)
// =======================================================

/*
9. Declara una variable x = 10.
   Usa x += 5 y muestra el nuevo valor.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 9")
let x = 10;
console.log( x+=5);
/*
10. Declara una variable puntos = 100.
    Resta 20 puntos usando puntos -= 20 y muestra el resultado.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 10")
let puntos = 100;
console.log(puntos -= 20)
/*
11. Declara precio = 50.
    Duplica su valor usando precio *= 2 y muestra el resultado.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 11")
let precio = 50;
console.log(precio *= 2)
/*
12. Declara saldo = 200.
    Divide su valor entre 4 usando saldo /= 4 y muestra el nuevo saldo.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 12")
let saldo = 200;
console.log(saldo /=4)
// =======================================================
// OPERADORES DE COMPARACIÓN (EJERCICIOS 13 - 16)
// =======================================================

/*
13. Declara dos variables numéricas.
    Muestra si son iguales (==) o diferentes (!=).
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 13")
num1= 4;
num2= 5;
console.log(num1 == num2);
console.log(num1 != num2);
/*
14. Declara edad = 17.
    Muestra si es mayor o igual a 18 (edad >= 18).
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 14")
edad = 17;
console.log(edad >=18);
/*
15. Declara dos variables a = 10, b = "10".
    Muestra el resultado de a == b y a === b para ver la diferencia.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 15")
a = 10;
b = "10";
console.log(a == b);
console.log(a === b);
/*
16. Declara dos variables c = 15, d = 20.
    Muestra si c es menor que d y si c es mayor o igual que d.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 16")
c = 15;
d = 20;
console.log( (c < d) && (c >= d))

// =======================================================
// OPERADORES LÓGICOS (EJERCICIOS 17 - 20)
// =======================================================

/*
17. Declara tieneLicencia = true y tieneAuto = false.
    Usa && (AND) para verificar si puede conducir.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 17")
let tieneLicencia = true;
let tieneAuto = false;
console.log(tieneLicencia && tieneAuto);
/*
18. Declara esMayor = true y tieneEntrada = false.
    Usa || (OR) para verificar si puede entrar al cine.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 18")
esMayor = true;
tieneEntrada = false;
console.log(esMayor || tieneEntrada)
/*
19. Declara variable conectado = false.
    Usa ! (NOT) para mostrar el valor contrario.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 19")
conectado = false;
console.log(!conectado)
/*
20. Declara edad = 25 y nacionalidad = "boliviana".
    Usa operadores lógicos para verificar si puede votar
    (edad >= 18 && nacionalidad == "boliviana").
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 20")
edad = 25;
nacionalidad = "boliviana";
edad >= 18 && nacionalidad == "boliviana"
  ? console.log("puede votar")
  : console.log("no puede votar");

// =======================================================
// COMBINACIÓN DE TODOS LOS TEMAS (EJERCICIOS 21 - 30)
// =======================================================

/*
21. Declara dos números y muestra su suma.
    Luego, verifica si el resultado es mayor que 50.
*/
// RESPUESTA AQUÍ 👇

/*
22. Declara tres notas (nota1, nota2, nota3).
    Calcula el promedio y muestra si aprobó (promedio >= 60).
*/
// RESPUESTA AQUÍ 👇

/*
23. Declara nombre y edad.
    Muestra un mensaje como:
    "Hola Kevin, tienes 20 años. ¿Eres mayor de edad? true"
*/
// RESPUESTA AQUÍ 👇

/*
24. Declara precioProducto y dineroDisponible.
    Muestra si puedes comprar el producto (dineroDisponible >= precioProducto).
*/
// RESPUESTA AQUÍ 👇
let precioProducto = 500;
let dineroDisponible = 400;
dineroDisponible >= precioProducto
    ? console.log("Tienes disponible ", dineroDisponible, "entonces puedes comprar el producto")
    : console.log("No tienes el dinero disponible para comprar el producto")
/*
25. Declara base y altura.
    Calcula el área de un triángulo (base * altura) / 2.
*/
// RESPUESTA AQUÍ

/*
26. Declara edad, tieneCedula y tienePasaje.
    Usa operadores lógicos para saber si puede viajar.
    (edad >= 18 && tieneCedula && tienePasaje)
*/
// RESPUESTA AQUÍ 👇

/*
27. Declara saldo = 100 y gasto = 30.
    Usa operadores de asignación para restar el gasto y mostrar el nuevo saldo.
*/
// RESPUESTA AQUÍ 👇

/*
28. Declara a = 10, b = 5.
    Muestra si la suma es par o impar (usa %).
*/
// RESPUESTA AQUÍ 👇

/*
29. Declara usuario = "Kevin" y password = "1234".
    Usa && para verificar si ambos son correctos.
*/
// RESPUESTA AQUÍ 👇

/*
30. Ejercicio Final:
    Declara tus datos y calcula tu promedio.
    Luego, muestra un mensaje completo.

    let nombre = "Kevin";
    let edad = 28;
    let nota1 = 70;
    let nota2 = 80;

    let promedio = (nota1 + nota2) / 2;
    let aprobado = promedio >= 60;

    console.log(`Hola ${nombre}, tienes ${edad} años, tu promedio es ${promedio}, aprobado: ${aprobado}`);
*/
// RESPUESTA AQUÍ 👇
let hombre = true; //Solo pueden ingresar hombres
let edadCliente = 35; // No menores de 18 y hasta 35 
const precioHora = 5; //consumo por hora
let saldoCliente = 100;
let horas = 10;
let total = horas * precioHora
saldoCliente -= total

console.log("Eres hombre o mujer?")
hombre && edadCliente >= 18 && edadCliente <= 35
    ? console.log("Puedes entrar campeon")
    : console.log("No puedes ingresar")
console.log("Tu saldo disponible es:", saldoCliente)
console.log("Tus horas contratadas de juego son:", horas)
console.log("Costo:", total)
console.log("Saldo disponible despues de pago: ", saldoCliente)
saldoCliente <= 10 && saldoCliente > 0
    ? console.log("Saldo a punto de terminarse, favor de recargar")
    : console.log("Sigue disfrutando, te quedan:", horas -= horas, "horas")