// =======================================================
// BUCLE FOR (EJERCICIOS 1 - 15)
// =======================================================

/*
1. Muestra los números del 1 al 10 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 1")
for (let i=1; i <= 10; i++) { // for (inicialización; condición; incremento)
    console.log(i);
}
/*
2. Muestra los números del 10 al 1 en orden descendente usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 2")
for (let i= 10; i > 0; i--) {
   console.log(i);
}
/*
3. Muestra solo los números pares del 1 al 20 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 3")
for (let i= 1; i <= 20; i++) {
   if (i % 2 == 0) {
      console.log(i);
   }
}
/*
4. Muestra solo los números impares del 1 al 20 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 4")
for (let i= 1; i <= 20; i++) {
   if (i % 2 != 0) {
      console.log(i);
   }
};
/*
5. Muestra la tabla de multiplicar del 5 (del 1 al 10).
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 5")
for (let i= 1; i <= 10; i++) {
   console.log(`5 x ${i} = ${5 * i}`);
};
/*
6. Calcula la suma de los números del 1 al 100 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 6")
let suma = 0;
for (let i= 1; i <= 100; i++) {
   suma += i;
};
console.log(`La suma es: ${suma}`)
/*
7. Muestra los múltiplos de 3 entre 1 y 30 usando un bucle for.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 7")
for (let i= 1; i <=30; i++) { //opcional i += 3
   if (i % 3 == 0) {
      console.log(i)
   }
}
/*
8. Calcula el factorial de un número (por ejemplo 5) usando for.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 8")
let num = 5;
let factorial = 1;

for (let i= 1; i <= num; i ++) {
   factorial *= i;
}

console.log(factorial);
/*
9. Muestra los primeros 10 números cuadrados (1², 2², 3²…).
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 9")

for (let i=1; i <= 10; i++) {
   let cuadrado = i ** 2
   console.log(cuadrado);
}

/*
10. Muestra los números del 1 al 50 y muestra "Múltiplo de 10" cuando corresponda.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 10")
for (let i=1; i<=50; i++) {
   if (i % 10 == 0) {
      console.log(`Multiplo de 10: ${i}`)
   } else {
      console.log(i)
   }
}
/*
11. Calcula la suma de los números pares entre 1 y 50.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 11")
let sumaPares = 0;
for (let i=1; i <=50; i++) { //opcional i += 2
   if (i % 2 == 0) {
      sumaPares += i;
   } 
}
console.log(`La suma de los numeros pares del 1 al 50 es: ${sumaPares}`)
/*
12. Calcula la suma de los números impares entre 1 y 50.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 12")
let sumaImpares = 0;
for (let i=1; i <=50; i++) { //opcional i += 2
   if (i % 2 != 0) {
      sumaImpares += i;
   } 
}
console.log(`La suma de los numeros impares del 1 al 50 es: ${sumaImpares}`)
/*
13. Muestra los números del 1 al 20 e indica si cada uno es "par" o "impar".
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 13")
for (let i=1; i <= 20; i++) {
   if (i % 2 == 0) {
      console.log(`${i} es par`)
   } else {
      console.log(`${i} es impar`)
   }
}
/*
14. Muestra los números del 1 al 30 e indica si son múltiplos de 3.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 14")
for (let i=1; i <= 30; i++) {
   if (i % 3 ==0) {
      console.log(`${i} es multiplo de 3`)
   } else {
      console.log(i)
   }
}
/*
15. Muestra un conteo regresivo desde 20 hasta 0.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 15")
for (let i = 20; i >= 0; i--) {
  console.log(i);
}
// =======================================================
// BUCLE WHILE (EJERCICIOS 16 - 25)
// =======================================================

/*
16. Muestra los números del 1 al 10 usando un bucle while.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 16")
let i = 1;
while (i <= 10) {
   console.log(i);
   i++;
}
/*
17. Muestra los números pares del 2 al 20 usando while.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 17")
let par = 2;
while (par <=20) {
   console.log(par)
   par += 2;
}
/*
18. Muestra los números del 10 al 1 usando while.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 18")
let num1 = 10;
while (num1 >= 1) {
   console.log(num1)
   num1--;
}
/*
19. Muestra los números del 1 al 30, pero solo los múltiplos de 5.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 19")
let contador = 1;
while (contador <= 30) {
   if (contador % 5 == 0) {
      console.log(contador);
   }
   contador++;
}
/*
20. Calcula la suma de los números del 1 al 20 usando while.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 20")
let j= 1;
let sumaNumeros = 0;
while (j <= 20) {
   sumaNumeros += j;
   console.log(sumaNumeros);
   j++;
}

/*
21. Muestra los números del 1 al 15 e indica si son pares o impares usando while.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 21")
let parImpar = 1;
while (parImpar <= 15) {
   if (parImpar % 2 ==0 ) {
      console.log(`${parImpar} es par`);
   } else {
      console.log(`${parImpar} es impar`);
   }
   parImpar++;
}
/*
22. Muestra la tabla de multiplicar del número 7 usando while.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 22")
let num7 = 1;
while (num7 <= 10) {
   console.log(`7 x ${num7} = ${num7 * 7}`)
   num7++;
}
/*
23. Muestra los múltiplos de 4 entre 1 y 40 usando while.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 23")
let no = 1;
while (no <= 40) {
   if (no % 4 == 0) {
      console.log(no)
   }
   no++;
}
/*
24. Calcula el factorial de un número (por ejemplo 6) usando while.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 24")
let fact = 1;
let a= 1;
while (a <= 6) {
   fact *= a;
   a++;
}
console.log(`El factorial de 6 es ${fact}`)

/*
25. Muestra un conteo regresivo desde 15 hasta 0 usando while.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 25")
let regresivo = 15;
while (regresivo >= 0) {
   console.log(regresivo);
   regresivo--;
}
// =======================================================
// BUCLE DO...WHILE (EJERCICIOS 26 - 30)
// =======================================================

/*
26. Muestra los números del 1 al 10 usando do...while.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 26")
let b = 1;
do {
   console.log(b);
   b++
} while (b <= 10);
/*
27. Pide un número y muestra su tabla de multiplicar usando do...while.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 27")
let numResp = parseInt(prompt("Ingresa un numero"))
let c = 1;
console.log(`Tabla de multiplicar del ${numResp}:`)
do {
   console.log(`${numResp} x ${c} = ${numResp * c}`)
   c++
} while (c <= 10);
/*
28. Muestra los números del 10 al 1 usando do...while.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 28")
let x = 10;
do {
   console.log(x);
   x--
} while (x > 0);
/*
29. Muestra los números del 1 al 30 y muestra un mensaje cuando sea múltiplo de 6.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 29")
let y = 1;
do {
   if (y % 6 == 0) {
      console.log(`${y} es multiplo de 6`);
   } else {
      console.log(y);
   }
   y++;
} while (y <= 30);
/*
30. Calcula la suma de los números del 1 al 50 usando do...while.
*/
// RESPUESTA AQUÍ 👇
console.log("ejercicio 30")
let z =1;
let sumas = 0;
do {
   sumas += z;
   z++;
} while (z <= 50);

console.log(`La suma del 1 al 50 es ${sumas}`)
// =======================================================
// COMBINACIÓN DE TEMAS (EJERCICIOS 31 - 40)
// =======================================================

/*
31. Pide un número y muestra todos los números desde 1 hasta ese número.
   Si es múltiplo de 3, muestra "Fizz", si es múltiplo de 5, muestra "Buzz".
*/
// RESPUESTA AQUÍ 👇

/*
32. Pide al usuario un número y calcula su factorial usando un bucle.
*/
// RESPUESTA AQUÍ 👇

/*
33. Pide nombre de usuario y contraseña.
   Si usuario es "Kevin" o "Belen" y contraseña es "1234",
   muestra "Acceso autorizado", de lo contrario "Denegado".
*/
// RESPUESTA AQUÍ 👇

/*
34. Pide un número y muestra todos los pares hasta ese número.
   Luego muestra la cantidad total de pares encontrados.
*/
// RESPUESTA AQUÍ 👇

/*
35. Calcula la suma de todos los múltiplos de 3 y 5 entre 1 y 100.
*/
// RESPUESTA AQUÍ 👇

/*
36. Pide un número y muestra si es primo o no, usando un bucle para verificar divisores.
*/
// RESPUESTA AQUÍ 👇

/*
37. Simula un inicio de sesión:
   Tienes 3 intentos para ingresar correctamente usuario="admin" y contraseña="1234".
   Si falla los 3 intentos, muestra "Acceso bloqueado".
*/
// RESPUESTA AQUÍ 👇

/*
38. Pide 5 números y calcula su suma total y promedio.
*/
// RESPUESTA AQUÍ 👇

/*
39. Muestra los números del 1 al 50.
   Si el número es divisible por 3 muestra "Fizz",
   si es divisible por 5 muestra "Buzz",
   si es divisible por ambos muestra "FizzBuzz".
*/
// RESPUESTA AQUÍ 👇

/*
40. Juego de adivinar número:
   Genera un número aleatorio entre 1 y 10.
   Usa un bucle para pedir al usuario que adivine.
   Da pistas si el número es mayor o menor.
   El juego termina cuando adivina.
*/
// RESPUESTA AQUÍ 👇
