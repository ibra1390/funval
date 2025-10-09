/* ===========STRINGS CASO ESPECIAL================== */
let nombre = "KEVIN";
for(let i=0; i<nombre.length; i++) {
    console.log(nombre[i]);
    if (nombre[i] === "A" || nombre[i] === "a") {
        console.log("La vocal A esta presente en este string")
    }
}

/* ======================FUNCIONES===================== */
// (1) declar una funcion que no recibe ni retorna nada
function saludar(){
    //todo el codigo que se ejecutara dentro de la caja magica
    console.log("Hola amigos de funval");
}
//llamar la funcion
saludar();

// (2) funciones que reciben parametros pero no retornan nada
function saludarEstudiante(nombre, edad) {
    console.log("hola amigo" + nombre + " de edad: " + edad);
}

let nombreEstudiante = "juan";
let anos = 28;
//llamar la funcion
saludarEstudiante(nombreEstudiante, anos);
saludarEstudiante("Boren", 33);
saludarEstudiante("Moises", 18);
saludarEstudiante("Jaime", 24);

// (3) funciones que reciben parametros y retornan un valor
function sumarNumeros (a, b, c) {
    let resultado = 0;
    resultado = a + b + c;
    return resultado;
}
//llamar funcion
let respuestaFuncion = sumarNumeros(14,30,70);
console.log(respuestaFuncion);
console.log(sumarNumeros(15,53,21));

// (4) funcion que no recibe nada pero retorna un valor 
function devolverSaludo() {
    return "chau amigo";
}

//llamar la funcion
console.log(devolverSaludo());


/* ----------------------------------------------- */
let palabra = prompt(
  "ingresa la palabra que verificaremos como palindroma o no"
);
//llamando la funcion
let palabraNueva = sinespacio(palabra);
palabraNueva = palabraNueva.toLocaleLowerCase();
let copia = darVuelta(palabraNueva);
console.log(copia);
if (copia === palabraNueva) {
  console.log("la palabra es palindroma");
} else {
  console.log("la palabra no es palindroma");
}

//crear una funcion q reciba un string y me retorne el mismo string sin espacios vacios
function sinespacio(texto) {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " ") {
      resultado = resultado + texto[i];
    }
  }
  return resultado;
}
//crar una funcion q reciba un string y retorne otro string pero al reves
function darVuelta(texto) {
  let respuesta = "";
  for (let index = texto.length - 1; index >= 0; index--) {
    respuesta = respuesta + texto[index];
  }
  return respuesta;
}
