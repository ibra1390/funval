let contenedor = document.querySelector("#contenedor-est");
let botoncito = document.querySelector("#btn");

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
    let resuelto = true;
    if (resuelto) {
      resolve(estudiantes);
    } else {
      reject("mala conexion del servidor");
    }
  }, 3000);
});
/* --------------------FUNCION ASINCRONA Y AWAIT DENTRO DE ALA FUNCION------------- */
/* async function traerPromesa() {
  try {
    let respuesta = await promesaEstudiantes;
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
} */
botoncito.addEventListener("click", async (e) => {
  try {
    contenedor.innerHTML = "";
    let respuesta = await promesaEstudiantes;
    contenedor.classList.replace("h-96", "grid");
    contenedor.classList.add(
      "grid-col-1",
      "md:grid-cols-2",
      "place-items-center",
      "gap-4",
      "p-8"
    );
    respuesta.forEach(({ nombre, materia, nota }) => {
      contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">materia:${materia}-nota:${nota}</p>
</a>
`;
    });

    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
});
