/* ----------------EJERCICIOS PROMESAS---------------- */
// 1. Promesa que retorna un array de productos
const getProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    const productos = [
      { id: 1, nombre: "Laptop", precio: 1200 },
      { id: 2, nombre: "Mouse", precio: 25 },
      { id: 3, nombre: "Teclado", precio: 45 },
    ];
    resolve(productos);
  }, 1000);
});

let productos = document.querySelector("#productos-container");
//Consumir promesa
getProductos
    .then((respuesta) => {
        respuesta.forEach(({id, nombre, precio}) => {
            productos.innerHTML += `
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${nombre}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Precio: </strong>${precio.toFixed(2)}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
          `
        });
    })
    .catch((err) => {
        console.log(err);
    });

// 2. Promesa que retorna un array de notas de estudiantes
const getNotas = new Promise((resolve, reject) => {
  setTimeout(() => {
    const notas = [
      { estudiante: "Ana", notas: [18, 15, 19] },
      { estudiante: "Luis", notas: [12, 14, 16] },
      { estudiante: "María", notas: [20, 19, 18] },
    ];
    resolve(notas);
  }, 1500);
});

let notas = document.querySelector("#notas-container");
//Consumir promesa
getNotas
    .then((respuesta) => {
        respuesta.forEach(({estudiante, notas}) => {
            productos.innerHTML += `
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Notas: </strong>${notas}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
          `
        });
    })
    .catch((err) => {
        consonsole.log(err);
    });

// 3. Promesa que puede fallar aleatoriamente
const getUsuarios = new Promise((resolve, reject) => {
  setTimeout(() => {
    const exito = Math.random() > 0.3; // 70% de éxito
    if (exito) {
      resolve([
        { id: 1, nombre: "Kevin" },
        { id: 2, nombre: "Carla" },
        { id: 3, nombre: "Diego" },
      ]);
    } else {
      reject("Error al obtener usuarios 😢");
    }
  }, 1200);
});

async function traerPromesa() {
  try {
    let respuesta = await getUsuarios;
    console.log(respuesta);
  } catch(error) {
    console.log(error);
  }
}

traerPromesa()

// 4. Promesa que retorna un array de cursos
let contenedor = document.querySelector("#contenedor-curso");
let botoncito = document.querySelector("#btn");

const getCursos = new Promise((resolve) => {
  setTimeout(() => {
    const cursos = [
      { codigo: "INF101", nombre: "Programación I" },
      { codigo: "INF202", nombre: "Estructuras de Datos" },
      { codigo: "INF303", nombre: "Base de Datos" },
    ];
    resolve(cursos);
  }, 800);
});

botoncito.addEventListener("click", async(e) => {
  try {
    contenedor.innerHTML = "";
    let respuesta2 = await getCursos;
    contenedor.classList.replace("h-96", "grid");
    contenedor.classList.add(
      "grid-col-1",
      "md:grid-cols-2",
      "gap-4",
      "p-8"
    );
    respuesta2.forEach(({codigo, nombre})=> {
        contenedor.innerHTML = `
        `;
    });
    console.log(respuesta2);
  } catch (error) {
    console.log(error);
  }
});

// 5. Promesa que retorna un array de tareas
const getTareas = new Promise((resolve) => {
  setTimeout(() => {
    const tareas = [
      { id: 1, titulo: "Estudiar Promesas", completada: false },
      { id: 2, titulo: "Hacer ejercicio", completada: true },
      { id: 3, titulo: "Leer un libro", completada: false },
    ];
    resolve(tareas);
  }, 2000);
});
