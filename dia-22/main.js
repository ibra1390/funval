/* let input = document.querySelector("#tarea");
let botoncito = document.querySelector("#adicionar");
let listado = document.querySelector(".tareas");

botoncito.addEventListener("click", ()=> {
    listado.innerHTML += `<li>${input.value} <button class="eliminar">X</button>
                            <button class="status">O</button></li>`;
    input.value = "";
});

listado.addEventListener("click",(e)=>{
    console.log(e.target); // a quien se le ha hecho click
    if (e.target.classList.contains("eliminar")) {
        console.log("encontre el boton");
        let padre = e.target.parentElement;
        console.log(e);
        padre.remove();
    }

    if (e.target.classList.contains("status")) {
        let padrecito = e.target.parentElement;
        if (padrecito.style.backgroundColor === "yellow") {
            padrecito.style.backgroundColor = "";
        } else {
            padrecito.style.backgroundColor = "yellow";
        }
    } 
});


let papa = document.querySelector(".padre");
let hijo = document.querySelector(".hijo");
let nieto = document.querySelector(".nieto");

papa.addEventListener("click",()=>{
    console.log("se hizo click en el papa");
});
hijo.addEventListener("click",()=>{
    console.log("se hizo click en el hijo");
});
nieto.addEventListener("click",()=>{
    console.log("se hizo click en el nieto");
}); */

let peliculas = [
  {
    id: 1,
    nombre: "Spiderman",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgKM88tLg8yO4GItvUqrfel2lbEFEviUdIg&s",
    año: 2002,
    descripcion:
      "spiderman es un superheroe q trabaja cm periodista peter parker",
    reparto: ["tobeymaguire", "kirsten dunst", "willem dafoe"],
  },
  {
    id: 2,
    nombre: "Batman",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNyGMawb0GHJfihSToAs1Sn7mI5ljaO2_SvQ&s",
    año: 2005,
    descripcion:
      "Batman es un superhéroe que lucha contra el crimen en Gotham City.",
    reparto: ["christian bale", "michael caine", "heath ledger"],
  },
  {
    id: 3,
    nombre: "Inception",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWnBnPN47nWvqWJAxw-vmchKc_2u1zkG6Bw&s",
    año: 2010,
    descripcion:
      "Inception es una película de ciencia ficción que explora el mundo de los sueños.",
    reparto: ["leonardo dicaprio", "joseph gordon-levitt", "ellen page"],
  },
  {
    id: 4,
    nombre: "Interstellar",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6O0pdx_hMlbIvVooTWrjlr726tc-CRLFUUA&s",
    año: 2014,
    descripcion:
      "Interstellar es una película que sigue a un grupo de exploradores que viajan a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
    reparto: ["matthew mcconaughey", "anne hathaway", "jessica chastain"],
  },
  {
    id: 5,
    nombre: "Dunkirk",
    img: "https://m.media-amazon.com/images/I/91J6Fn-q0EL.jpg",
    año: 2017,
    descripcion:
      "Dunkirk es una película bélica que narra la evacuación de las fuerzas aliadas de Dunkerque durante la Segunda Guerra Mundial.",
    reparto: ["fionn whitehead", "tom glynn-carney", "jack lowden"],
  },
];

let contenedor = document.querySelector(".pelicula-container");

peliculas.forEach(({ id, nombre, img, año, descripcion }) => {
  contenedor.innerHTML += `
<div class="max-w-sm flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="${img}" alt="" />
    </a>    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${nombre}-${año}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${descripcion}</p>
        <button id="${id}" class="botonModal inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            leer mas 
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div>
</div>
`;
});

let modal = document.querySelector(".modal");
contenedor.addEventListener("click", (e) => {
  modal.innerHTML = "";
  let superPapa = e.target.closest(".botonModal");
  if (superPapa) {
    peliculas.forEach(({ id, reparto, img }) => {
      if (id == superPapa.id) {
        modal.classList.remove("hidden");
        modal.innerHTML += `
      <div class="bg-white p-8 relative rounded-2xl">
      <img class="rounded-t-lg" src="${img}" alt="" />
      <button id="btn" class="absolute right-2 top-1 text-red-700 font-bold text-2xl">x</button>
        <p>
          <strong>reparto:</strong>${reparto}
        </p>
      </div>
    `;
        let botonCerrar = document.querySelector("#btn");
        botonCerrar.addEventListener("click", (e) => {
          modal.classList.add("hidden");
        });
      }
    });
  }
});
