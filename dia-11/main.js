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