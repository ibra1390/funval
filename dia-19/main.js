/* EJEMPLO BASICO */
let superTitulo = document.querySelector("#titulo");
console.log(superTitulo);
superTitulo.textContent = "HOLA AMIGOS DE FUNVAL";

/* =========SELECCIONADORES DE ELEMENTOS============ */
let seleccion1 = document.getElementById("titulo"); //regresa solo 1 elemento
let seleccion2 = document.getElementsByClassName("titu"); //regresa una lista de elementos
let seleccion3 = document.getElementsByTagName("h1"); //regresa una lista de elementos
let seleccion4 = document.querySelector("#titulo"); //regresa el primer elemento que coincidencia
let seleccion5 = document.querySelectorAll(".titu"); //regresa lista de elementos

console.log(seleccion1);
console.log(seleccion2);
console.log(seleccion3);
console.log(seleccion4);
console.log(seleccion5);

//className y TagName regresa listado de elementos
for (let i = 0; i < seleccion2.length; i++) {
    seleccion2[i].textContent = "Kevin";
}

/* MODIFICAR TEXTO */
seleccion4.textContent = "Kevin";

/* MODIFICADOR DE CSS IN-LINE */
seleccion4.style.backgroundColor= "red";
seleccion4.style.fontSize ="100px";

/* MODIFICADOR DE CLASES */
seleccion4.classList.add("p-4","text-blue-500", "bg-slate-900");

/* MODIFICANDO ATRIBUTOS */
let imagenSud = document.querySelector("#imagen");
imagenSud.setAttribute("src","https://www.churchofjesuschrist.org/imgs/b42d9ffa435e5c5fc642fecffbb8a53d85d3a1d4/full/%21500%2C/0/default")

imagenSud.setAttribute("width", "100px");
console.log(imagenSud.getAttribute("alt"));

/* ==============MODIFICACION DE TODO EL HTML INTERIOR============= */
let contenendor = document.querySelector("#contenedor-card");
contenendor.innerHTML = `<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>`;

/* ==========CREAR ELEMENTOS O NODOS PARA PODER INSERTARLOS========== */
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
li1.textContent = "Boren";
li2.textContent = "David";
li3.textContent = "Alfredo";
ul.append(li1,li2,li3);
contenendor.append(ul); //appendChild solo agrega un elemento

let estudiantesFunval = [
    {
        nombre: "Alfredo",
        pais: "Mexico",
        edad: 28,
    },
    {
        nombre: "Belen",
        pais: "Bolivia",
        edad: 28,
    },
    {
        nombre: "Boren",
        pais: "Colombia",
        edad: 28,
    },
    {
        nombre: "David",
        pais: "Chile",
        edad: 28,
    },
    {
        nombre: "Ibraim",
        pais: "Mexico",
        edad: 28,
    },
]
let contenedor = document.querySelector("#contenedor-estudiante");

estudiantesFunval.forEach((estudiante) => {
    contenedor.innerHTML += `
    `

});

/* el profesor kevin necesita ver la lista de estudiantes en una tabla 
    q tendra las siguientes columnas
    nombre edad y pais crear una tabla de forma dinamica q cargue los datos 
    de los objetos de la lista estudiantes Funval */