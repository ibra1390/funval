
/* -----------DESESTRUCTURACION DE ARRAYS---------------- */

let paises = ["Brasil", "Argentina", "Colombia", "Peru", "Venezuela"]

//let [pais2, , , , , pais6] si solo queremos valores especificos

let [pais2, pais3, pais1, pais4, pais5, pais6 = "pais no definido"] = paises;
console.log(pais6);

/* ---------------DESESTRUCTURACION DE OBJETOS------------- */
let computadora = {
    procesador: "ryzen 5 3500g",
    ram: "16gb",
    disco: "480gb ssd",
    fuente: "1200wts",
    tarjeta: "3060ti",
};

let {ram, procesador: cerebro, fuente, tarjeta, disco, gabinete = "sure" } = computadora;
console.log(ram);

/* --------------------EJEMPLO REAL------------------------------------- */
let tiendaPC = [
  {
    procesador: "ryzen 5 3500g",
    ram: "16gb",
    disco: "480gb ssd",
    fuente: "1200wts",
    tarjeta: "3060ti",
    gabinete: "asus",
    madre: "gigabite",
  },
  {
    procesador: "intel corei3 1000f",
    ram: "32gb",
    disco: "480gb ssd",
    fuente: "1200wts",
    gabinete: "asus",
    madre: "gigabite",
  },
  {
    procesador: "ryzen 3 3200g",
    ram: "16gb",
    disco: "480gb ssd",
    fuente: "1200wts",
    gabinete: "iris",
    madre: "aorus",
  },
  {
    procesador: "corei7",
    ram: "16gb",
    disco: "1tb hdd",
    fuente: "1000wts",
    tarjeta: "3080ti",
    madre: "gigabite",
  },
  {
    fuente: "1200wts",
    tarjeta: "3060ti",
    gabinete: "asus",
  },
];

let tabla = document.querySelector("#cuerpo-tabla");

tiendaPC.forEach(
  ({
    procesador = "componente no comprado",
    ram = "componente no comprado",
    disco = "componente no comprado",
    fuente = "componente no comprado",
    tarjeta = "componente no comprado",
    gabinete = "componente no comprado",
    madre = "componente no comprado",
  }) => {
    tabla.innerHTML += `          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ${procesador}
            </th>
            <td class="px-6 py-4">${ram}</td>
            <td class="px-6 py-4">${disco}</td>
            <td class="px-6 py-4">${fuente}</td>
            <td class="px-6 py-4">${tarjeta}</td>
            <td class="px-6 py-4">${gabinete}</td>
            <td class="px-6 py-4">${madre}</td>
          </tr>`;
  }
);

/* =================SPREAD OPERATOR================= */
//CUANDO QUEREMOS CREAR UNA COPIA DE UN ARRAY O UN OBJETO

/* =================ARRAYS============== */
let frutas = ["naranja", "papaya", "palta", "sandia", "manzana"];
let copiaFrutas = [...frutas];

/* =================OBJETOS============== */
let humano = {
    nombre: "peter parker",
    edad: 22,
    pais: "estados unidos",
};
let copiaObjeto = {...humano};
console.log(copiaObjeto);

//CUANDO A PARTIR DE UN OBJETO O UN ARRAY QUEREMOS CREAR UNO NUEVO CON ALGUNOS ATRIBUTOS ADICIONALES
let frutasCaras =[...frutas,"chirimoya","higo","ciruela"];
console.log(copiaFrutas);

/* =================OBJETOS============== */
let superHeroe = {
    ...humano,
    superNombre: "Spiderman",
    poder: "sentido aracnido",
    fuerza: 80,
}
console.log(superHeroe);

//CUANDO QUEREMOS UNIR O FUSIONAR 2 O MAS OBJETOS O ARRAYS EN UNO SOLO
let est= ["Jaime", "Alfredo", "Moises"];
let fusion = [...est,...frutas, "Kevin",...frutasCaras];
console.log(fusion)
/* =================OBJETOS============== */
//se mantienen los valores del ultimo objeto
let hero = {
    nombre: "steve rogers",
    nombreSuper: "Capitan America",
    fuerza: 90,
};
let agenteShield = {
    nombre: "Nick Fury",
    arma:"canon",
    nivel: "capitan",
    fuerza: 10,
};

let superFusion = {
    ...hero,
    ...agenteShield,
};
console.log(superFusion)

/* EJERCICIO */
let pokemon = {
    nombrePokemon: "charmander",
    nivel: 50,
    tipo: "fuego",
    naturaleza: "valiente",
};

let copiaPokemon = {...pokemon};
console.log(copiaPokemon)

let entrenador = {
    ...pokemon,
    nombreEntrenador: "Ash Ketchum",
    pokemonCapturados: 200,
    medallas: 20,
}
console.log(entrenador);

let pokemon1 = {
    nombre: "Magikarp",
    nivel: 20,
    tipo: "agua",
    naturaleza: "docil",
    ataque: "salpicadura"
}

let pokemon2 = {
    nombre: "Gyarados",
    nivel: 100,
    tipo: "agua/volador",
    naturaleza: "salvaje",
    ataque: "hiperrayo",
    entrenador: "Ash Ketchum",
    ubicacion: "Pueblo Paleta",
}

let evolucion = {
    ...pokemon1,
    ...pokemon2,
}

console.log(evolucion)


let estudiantesFunval =[
    {
        nombre: "alfredo",
        edad: 35,
        pais: "Mexico",
        notas: [35, 67, 89],
    },
    {
        nombre: "David",
        edad: 25,
        pais: "Chile",
        notas: [35, 67, 89],
    },
    {
        nombre: "Emmanuel",
        edad: 28,
        pais: "Peru",
        notas: [100, 67, 89],
    },
    {
        nombre: "Gerardo",
        edad: 22,
        pais: "El Salvador",
        notas: [89, 77, 65],
    },
];

let tabla2 = document.querySelector("#cuerpo-tabla");

function mostrarEstudiantes() {
    estudiantesFunval.forEach((estudiante) => {
        tabla.innerHTML +=``
    })
}