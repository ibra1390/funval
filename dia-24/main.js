/* ====FETCH====== */
/* let contenedor = document.querySelector("#contenedor-usuarios"); */
let personajesContainer = document.querySelector("#contenedor-personajes");

/* fetch("https://jsonplaceholder.typicode.com/users")
.then((respuesta) => respuesta.json())
.then((data) => {
    console.log(data);
    data.array.forEach((name, email, phone) => {
        contenedor.innerHTML += `
        `    
    });
});
 */

fetch("https://api.api-onepiece.com/v2/characters/en")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.forEach(({id, name, age, bounty}) => {
            if(id <= 10) {
                personajesContainer.innerHTML += `
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${name}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Edad: ${age} Recompensa: ${bounty}</p>
                </a>
                `;
            }
        });
    })

/* ===============FUNCIONES ASYNC Y AWAIT=========== */
async function traerDatosAPI() {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await respuesta.json();
    console.log(data);
}

traerDatosAPI();

/* ==========AXIOS============== */

axios("https://www.demonslayer-api.com/api/v1/characters").then((respuesta)=> {
    console.log(respuesta.data);
})

/* ==========AXIOS FUNCIONES ASYNC Y AWAIT============== */
async function DatosAPI() {
    let respuesta = await axios("https://jsonplaceholder.typicode.com/users");
    // O TAMBIEN ----->>>> let {data} =await axios("https://jsonplaceholder.typicode.com/users")
}