/* -----------------------EJERCICIOS PRUEBAS TECNICAS--------------------- */
/*
1. Serie de Fibonacci
   Pide al usuario un número n y muestra en consola los primeros n números de la serie de Fibonacci.
   Ejemplo si n = 8 → 0 1 1 2 3 5 8 13

   Instrucciones:
   - Usa un bucle (for o while) para generar la serie.
   - Usa variables para almacenar los dos números anteriores.
   - Muestra cada número con console.log().
*/
// RESPUESTA AQUÍ 👇
console.log("Ejercicio 1");
let n = parseInt(prompt("Ingresa un numero para mostrar la serie de Fibonacci"));
let num1 = 0;
let num2 = 1;

for (let i = 0; i < n; i++) {
   console.log(num1);
   let num3 = num1 + num2;
   num1 = num2;
   num2 = num3;
}


/*
2. Números Primos
   Pide al usuario un número n y muestra todos los números primos desde 1 hasta n.
   Ejemplo si n = 10 → 2, 3, 5, 7

   Instrucciones:
   - Usa bucles anidados para verificar si un número es primo.
   - Un número primo es divisible solo por 1 y por sí mismo.
   - Usa if para verificar divisibilidad.
*/
// RESPUESTA AQUÍ 👇
console.log("Ejercicio 2");
let num = parseInt(prompt("Ingresa un numero para mostrar los numeros primos"));

for (let x = 1; x <= num; x++) {
   let primo = true;
   for (let divisor=2; divisor <= x-1; divisor++) {
      if ( x % divisor ===0) {
         primo = false;
      }
   }
   if (primo && x > 1) {
      console.log(x);
   }
}



/*
3. Suma de Dígitos
   Pide al usuario que ingrese un número y calcula la suma de todos sus dígitos.
   Ejemplo: si el número es 472, la suma es 4 + 7 + 2 = 13.

   Instrucciones:
   - Usa parseInt() para convertir el número.
   - Usa un bucle (while o do...while) para separar y sumar los dígitos.
   - Muestra el resultado con console.log().
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 3");
let number = prompt("Ingresa un numero para sumar sus digitos");
let sum = 0;

for (let j = 0; j < number.length; j++) {
   sum += parseInt(number[j]);
}

console.log(`La suma de los digitos es ${sum}`);

/*
4. Invertir un Número
   Pide al usuario un número y muestra su versión invertida.
   Ejemplo: si el número es 1234, la salida debe ser 4321.

   Instrucciones:
   - Usa un bucle (while o for) para extraer los dígitos.
   - Usa operaciones matemáticas (% y /) para obtener cada dígito.
   - Construye el número invertido y muéstralo en consola.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 4");
let resp = (prompt("ingresa un numero para invertirlo"));
let nuevoNumero = "";

for (let digito = resp.length -1; digito >= 0; digito--) {
   nuevoNumero = nuevoNumero + resp[digito];
}

console.log(nuevoNumero);
 


/*
5. Número Perfecto
   Un número perfecto es aquel que es igual a la suma de sus divisores positivos (excluyéndose a sí mismo).
   Ejemplo: 6 es perfecto porque sus divisores son 1, 2 y 3 → 1 + 2 + 3 = 6

   Pide al usuario un número y determina si es perfecto o no.

   Instrucciones:
   - Usa un bucle for para sumar los divisores del número.
   - Usa if para comparar la suma con el número original.
   - Muestra un mensaje indicando si es perfecto o no.
*/
// RESPUESTA AQUÍ 👇

console.log("Ejercicio 5");
let numPerfecto = parseInt(prompt("ingresa un numero para ver si es perfecto o no"));

let sumNumeros = 0;

for (let y = 1; y < numPerfecto; y++) {
   if (numPerfecto % y === 0) {
      sumNumeros += y;
   } 
}

if (sumNumeros === numPerfecto) {
   alert("Es un numero perf10ecto");
} else {
   alert("No es un numero perfecto");
}