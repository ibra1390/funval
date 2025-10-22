/* =====================SINCRONO=================== */
/* console.log("Juan")
console.log("Kevin")
console.log("David")
console.log("Alfredo")
console.log("Emanuel") */

/* ================ASINCRONO===================== */
/* console.log("Ibraim");

setTimeout(()=>{
    console.log("kevin");
}, 5000);

console.log("Belen");
console.log("Edmund");
setTimeout(() => {
    console.log("jorge");
}, 3000);
console.log("moises"); */


/* SINCRO */
/* console.log("dormir de 6 a 8 hrs")
console.log("tomar mi clase de frontend")
console.log("desayunar")
console.log("estudiar nuevos conceptos")
console.log("regresar a mi clase de frontend") */

/* ASINCRO */
/* setTimeout(()=> {console.log("lavar la ropa en la lavadora")}, 5000);
setTimeout(()=> {console.log("poner de fondo videos de youtube")}, 2000);
console.log("Barrer la casa");
console.log("Trapear la casa");
setTimeout(()=>{console.log("escuchar musica")},2000);
console.log("Realizar mi practica calificada")
setTimeout(()=>{console.log("ordenar comida")}, 1000);
 */
/* --------------------PROBLEMA DE TRABAJR CON ASINCRONIA----------------------- */

let estudiantes = [
  {
    nombre: "Juan",
    materia: "JavaScript",
    nota: 85,
  },
  {
    nombre: "Ana",
    materia: "JavaScript",
    nota: 92,
  },
  {
    nombre: "Luis",
    materia: "JavaScript",
    nota: 78,
  },
  {
    nombre: "Maria",
    materia: "JavaScript",
    nota: 90,
  },
];

/* console.log(estudiantes); */
/* aprender a crear una promesa */
const promesaEstudiantes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let resuelto = false;
    if (resuelto) {
      resolve(estudiantes);
    } else {
      reject("mala conexion del servidor");
    }
  }, 3000);
});
let contenedor = document.querySelector("#container");

for (let i = 1; i <= 4; i++) {
  contenedor.innerHTML += `
  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div role="status" class="max-w-sm animate-pulse">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <span class="sr-only">Loading...</span>
    </div>
  </a>
`;
}

/* -----CONSUME UNA PROMESA--- */
promesaEstudiantes
  .then((respuesta) => {
    contenedor.innerHTML = "";
    respuesta.forEach(({ nombre, materia, nota }) => {
      contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">materia:${materia}-nota:${nota}.</p>
</a>
`;
    });
  })
  .catch((err) => {
    contenedor.innerHTML = "";
    for (let i = 1; i <= 4; i++) {
      contenedor.innerHTML += `
  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <p class="font-normal text-gray-700 dark:text-gray-400">Error:MALA SEÑAL DE INTERNET</p>
  </a>
`;
    }
  });
/* 


/* ================CREAR PROMESA=================
    const promesaEstudiantes = new Promise((resolve, reject) => {
    setTimeout(() => {
        let resuelto = true;
        if (resuelto) {
            resolve(estudiantes);
        } else {
            reject("mala conexion del servidor");
        }
    }, 3000);
}); */

/* ------CONSUME UNA PROMESA----------- */
/* promesaEstudiantes
    .then((respuesta)=>{
        console.log(respuesta);
    })
    .catch((err) => {
        console.log(err);
    }); */

 
let juego = console.log(`El juego se pone bueno despues de 10h`);

const promesaJuego = new Promise((resolve, reject) => {
    setTimeout(() => {
        let resuelto = false;
        if (resuelto) {
            resolve(juego);
        } else {
            reject(`El juego no se pone bueno despues de 10h`);
        }
    }, 3000);
})

promesaJuego
    .then((respuesta)=>{
        console.log(respuesta);
    })
    .catch((err) => {
        console.log(err);
    });