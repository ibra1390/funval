/* let titulo = document.querySelector(".titulo");

titulo.textContent = "HOLA FUNVAL CURSO DE DESARROLLO WEB";
titulo.style.color = "red";
console.log(titulo.classList);
titulo.classList.add("kevin");
console.log(titulo.classList);
console.log(titulo); */
/* -------------------------------------------------------- */
/* ============================
 🟢 BLOQUE 1: SELECTORES + MODIFICADORES (Nivel Básico)
 Duración sugerida: 30 minutos
============================ */

/* 1. Selecciona un elemento por ID y cambia su color de fondo a rojo. */
let titulo = document.querySelector("#titulo");
titulo.classList.add("bg-red-600", "text-white");
/* 2. Selecciona un elemento por clase y cambia su texto por "Modificado". */
let titulo2 = document.querySelector(".titulo2");
titulo2.textContent = "Modificado";
//document.querySelector(".titulo2").textContent = "Modificado";

/* 3. Selecciona un párrafo y cambia el tamaño de su fuente. */
document.querySelector(".parrafo2").style.fontSize = "25px";
/* 4. Selecciona una imagen por su ID y cambia su atributo "src". */
document.querySelector("#gatito").setAttribute("src","https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2F0aXRvfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000");
/* 5. Selecciona todos los elementos con una misma clase y cambia su color de texto. */
let listaClase = document.querySelectorAll(".boku");
listaClase.forEach((elemeto) => {
    elemeto.classList.add("text-green-600");
});
/* 6. Cambia el contenido de un div usando innerHTML. */
document.querySelector("#contenedor-parrafo").innerHTML=`
<button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
`
/* 7. Cambia el contenido de un párrafo usando textContent. */
document.querySelector(".parrafo2").textContent =
"suscribanse a Gemini usando su cuenta institucional recibiran gemini"
/* 8. Añade una nueva clase CSS a un elemento usando classList.add(). */
let clasePrueba = document.querySelector(".prueba");
clasePrueba.classList.add("bg-red-500", "text-white", "p-4", "mt-5", "w-50")

/* 9. Elimina una clase existente usando classList.remove(). */
document.querySelector("#superParrafo").classList.remove("font-bold", "bg-slate-900");
/* 10. Alterna una clase (toggle) en un elemento. */
const elementoToggle = document.querySelector("#btn");
if (elementoToggle) {
    elementoToggle.classList.toggle("opacity-50")
}
/* ============================
 🟡 BLOQUE 2: NAVEGACIÓN ENTRE NODOS (Nivel Intermedio)
 Duración sugerida: 30 minutos
============================ */

/* 11. Selecciona un elemento y accede a su elemento padre con parentNode. */
let hijo = document.querySelector(".hijo-parrafo");
let padre = hijo.parentNode;
padre.classList.add("bg-slate-900", "text-white");
console.log(padre);
/* 12. Selecciona un elemento y accede a su primer hijo usando firstElementChild. */
let papa = document.querySelector(".papa")
let hijito = papa.firstElementChild;
console.log(hijito);
/* 13. Selecciona un contenedor y accede a su último hijo con lastElementChild. */
let ultimo = papa.lastElementChild;
ultimo.classList.add("bg-red-700", "text-white", "font-bold");
console.log(ultimo);
/* 14. Selecciona un elemento de una lista y navega a su siguiente hermano con nextElementSibling. */
let siguiente = papa.nextElementSibling;
siguiente.classList.add("bg-blue-500");
console.log(siguiente);
/* 15. Selecciona un elemento de una lista y navega a su hermano anterior con previousElementSibling. */
let medio = document.querySelector(".hermano-medio");
//let mayor = medio.previousElementSibling;
//console.log(mayor);
/* 16. Muestra en consola el número de hijos que tiene un contenedor usando children.length. childElementCount*/
let hijos= document.querySelector(".papa").children.length;
console.log(hijos);
/* 17. Accede a todos los hijos de un contenedor usando children y cambia el color de cada uno. */

/* 18. Usa firstChild para mostrar en consola el primer nodo hijo (puede ser texto o elemento). */

/* 19. Accede al nodo padre de un párrafo y cambia su color de fondo. */

/* 20. Selecciona un elemento y recorre sus hijos con un bucle for para cambiarles el estilo. */

/* ============================
 🔴 BLOQUE 3: COMBINADOS (Selectores + Modificadores + Navegación)
 Duración sugerida: 30 minutos
============================ */

/* 21. Selecciona un contenedor, accede a su primer hijo y cambia su texto. */

/* 22. Selecciona una lista (ul), accede al segundo li y cámbiale el color de fondo. */

/* 23. Selecciona el tercer hijo de un contenedor y elimina una clase de él. */

/* 24. Selecciona un contenedor y cambia el texto de todos sus hijos. */

/* 25. Selecciona un div, accede a su padre y cambia su borde. */

/* 26. Selecciona el primer elemento de una lista y cambia el texto de su siguiente hermano. */

/* 27. Selecciona un elemento, navega a su padre y luego a su primer hijo para cambiarle el estilo. */

/* 28. Selecciona un contenedor con varios elementos y alterna una clase en cada uno de sus hijos. */

/* 29. Usa innerHTML para insertar una etiqueta <strong> dentro de un párrafo hijo. */

/* 30. Recorre todos los hijos de un contenedor y cambia el contenido de cada uno con un texto numerado. */
