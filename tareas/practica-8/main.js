/* Ejercicio 1 — Tarjetas de Usuarios
Crea una función que reciba un objeto usuario con propiedades:
{ nombre, edad, pais, ...resto }.

Desestructura las propiedades principales y usa el operador rest para capturar el resto.

Genera dinámicamente una tarjeta en el DOM mostrando todos los datos.

Cada vez que se invoque la función con un nuevo usuario, debe agregarse una nueva tarjeta al contenedor. */

let usuarios = [
    {
        nombre: "Pedro",
        edad: 55,
        pais: "Colombia",
        id: 432164,
        nivel: "basico",
        sexo: "masculino"
    },
    {
        nombre: "Ana",
        edad: 30,
        pais: "México",
        id: 532167,
        nivel: "intermedio",
        sexo: "femenino"
    }
];

let tarjetaContainer = document.querySelector("#tarjeta");
let btnUsuario = document.querySelector("#btn");


function mostrarUsuarios() {
    tarjetaContainer.innerHTML = "";
    usuarios.forEach(({nombre, edad, pais, ...rest}) => {
        let restoHTML = "";
        for (let propiedad in rest) {
            restoHTML += `<p>${propiedad}: ${rest[propiedad]}</p>`
        }
        
        let tarjeta = `
        <div class="bg-white p-4 m-2 rounded-lg shadow-md border">
            <h2 class="text-xl font-bold">${nombre}</h2>
            <p>Edad: ${edad}</p>
            <p>País: ${pais}</p>
            ${restoHTML}
        </div>
        `;
        tarjetaContainer.innerHTML += tarjeta;
    });
};

btnUsuario.addEventListener("click", ()=> {
    let nuevoUsuario = {
        nombre: "Carlos",
        edad: 21,
        pais: "Argentina",
        id: 32764111,
        nivel: "avanzado",
        sexo: "masculino"
    }
    usuarios = [...usuarios, nuevoUsuario];
    mostrarUsuarios();
})

mostrarUsuarios();


/* Ejercicio 2 — Tabla de Productos
Crea una función renderProducto que reciba un objeto producto con propiedades:
{ nombre, precio, stock, ...rest }.

Inserta en el DOM una fila en una tabla mostrando nombre, precio, stock y las propiedades adicionales.

Agrega varios productos para mostrar la funcionalidad.
 */

let productos = [
    { 
        nombre: "Laptop", 
        precio: 15000, 
        stock: 5, 
        marca: "Dell", 
        categoria: "Electronica",
        color: "gris"
    },
    { 
        nombre: "Celular", 
        precio: 8500, 
        stock: 10, 
        marca: "Samsung", 
        categoria: "Telefonia",
        color: "azul"
    },
];

let tablaContainer = document.querySelector("#cuerpo-tabla");
let btnTabla = document.querySelector("#btn2");

function renderProducto() {
    tablaContainer.innerHTML = "";
    productos.forEach(({nombre, precio, stock, ...rest}) => {
        let tabla = `
        <tr class="border-b border-gray-200 hover:bg-gray-50">
          <td class="px-6 py-4 font-semibold">${nombre}</td>
          <td class="px-6 py-4">${precio}</td>
          <td class="px-6 py-4">${stock}</td>
          <td class="px-6 py-4">${rest.marca}</td>         
          <td class="px-6 py-4">${rest.categoria}</td>      
          <td class="px-6 py-4">${rest.color}</td>          
        </tr>
        `;

        tablaContainer.innerHTML += tabla;
    });
};

btnTabla.addEventListener("click", () => {
      let nuevoProducto = {
        nombre: "Mouse",
        precio: 450,
        stock: 25,
        marca: "Logitech",
        categoria: "Accesorios",
        color: "negro"
      };
      productos = [...productos, nuevoProducto];
      renderProducto(); 
    });

renderProducto();


/* Ejercicio 3 — Lista de Tareas
Crea una función agregarTarea que reciba un objeto { titulo, descripcion, ...extra }.

La función debe crear un <li> con la información principal y un botón “Ver más”.

Al hacer clic en “Ver más”, mostrar en consola las propiedades adicionales (...extra).

Mantén un array de tareas usando spread para no mutar el original. */
/* Ejercicio 3 — Lista de Tareas */
let tareas = [
    {
        titulo: "Estudiar JavaScript",
        descripcion: "Repasar desestructuración y operador rest",
        prioridad: "alta",
        categoria: "estudio",
        fecha: "2024-01-15"
    },
    {
        titulo: "Hacer ejercicio", 
        descripcion: "Ir al gimnasio por la tarde",
        prioridad: "media",
        categoria: "salud",
        duracion: "1 hora"
    }
];

let listaContainer = document.querySelector("#lista-tareas");
let btnTarea = document.querySelector("#btn3");

function agregarTarea({titulo, descripcion, ...extra}) {
    let li = document.createElement("li");
    li.className = "bg-white p-4 m-2 rounded-lg shadow-md border";

    
    li.innerHTML = `
        <h3 class="text-lg font-bold">${titulo}</h3>
        <p class="text-gray-600">${descripcion}</p>
    `;

    // Botón "Ver más"
    let btn = document.createElement("button");
    btn.textContent = "Ver más";
    btn.className = "mt-2 bg-blue-500 text-white px-3 py-1 rounded";
    btn.addEventListener("click", () => {
        console.log(extra); 
    });

    li.append(btn);
    listaContainer.append(li);
}

function mostrarTareas() {
    listaContainer.innerHTML = "";
    [...tareas].forEach(tarea => agregarTarea(tarea));
}

btnTarea.addEventListener("click", () => {
    let nuevaTarea = {
        titulo: "Comprar víveres",
        descripcion: "Ir al supermercado", 
        prioridad: "baja",
        categoria: "compras",
        presupuesto: 500
    };
    tareas = [...tareas, nuevaTarea];
    agregarTarea(nuevaTarea);
});

mostrarTareas();

/* Ejercicio 4 — Tabla de Estudiantes
Crea una función mostrarEstudiantes(...estudiantes) que reciba varios objetos estudiantes.

Cada estudiante tiene { nombre, edad, notas }.

Desestructura para calcular el promedio de notas y genera dinámicamente una tabla en el DOM.

Usa spread para agregar estudiantes sin mutar el array original.

Bonus: agrega un botón que actualice la edad o las notas de un estudiante y vuelva a renderizar la tabla. */
let estudiantes = [
    {
        nombre: "Jair",
        edad: 35,
        notas: [89, 67, 100],
    },
    {
        nombre: "Mario",
        edad: 25, 
        notas: [56, 98, 64],
    }
];

let tablaContainer2 = document.querySelector("#cuerpo-tabla-estudiantes");
let btnEstudiante = document.querySelector("#btn-estudiante");

function mostrarEstudiantes(...estudiantesArray) {
    tablaContainer2.innerHTML = "";
    estudiantesArray.forEach(estudiante => {
        const { nombre, edad, notas } = estudiante;
        let promedio = (notas.reduce((acumulador, notaActual) => acumulador + notaActual, 0) / notas.length).toFixed(2);
        
        tablaContainer2.innerHTML += `
        <tr class="border-b border-gray-200">
            <td class="px-6 py-4">${nombre}</td>
            <td class="px-6 py-4">${edad}</td>
            <td class="px-6 py-4">${promedio}</td>
        </tr>
        `;
    });
}

btnEstudiante.addEventListener("click", () => {
    let nuevoEstudiante = {
        nombre: "Kevin",
        edad: 28,
        notas: [89, 77, 98],
    };
    estudiantes = [...estudiantes, nuevoEstudiante];
    mostrarEstudiantes(...estudiantes);
});

mostrarEstudiantes(...estudiantes);

/* Ejercicio 5 — Configuración de App
Crea una función configurarApp que reciba un objeto { titulo, version, ...resto }.

Desestructura las propiedades principales y usa rest para capturar las adicionales.

Muestra en el DOM el título y versión, y lista las propiedades adicionales.

Permite actualizar la configuración creando un nuevo objeto con spread y re-renderiza la información sin recargar la página. 
*/


let configuracion = {
    titulo: "Mi App",
    version: "1.0.0",
    tema: "oscuro",
    idioma: "es",
    notificaciones: true,
};

let configContainer = document.querySelector("#config-app");

function configurarApp({ titulo, version, ...resto }) {
    let restoHTML = "";
    for (let propiedad in resto) {
        restoHTML += `<p><strong>${propiedad}:</strong> ${resto[propiedad]}</p>`;
    }
    
    configContainer.innerHTML = `
    <div class="bg-white p-6 rounded-lg shadow-md border">
        <h2 class="text-2xl font-bold mb-4">Configuración de la App</h2>
        <div class="mb-4">
            <p><strong>Título:</strong> ${titulo}</p>
            <p><strong>Versión:</strong> ${version}</p>
        </div>
        <div class="border-t pt-4">
            <h3 class="text-lg font-semibold mb-2">Otras configuraciones:</h3>
            ${restoHTML}
        </div>
        <button id="btn-actualizar" class="mt-4 bg-green-600 text-white p-3 rounded-lg">
            Actualizar Configuración
        </button>
    </div>
    `;

    document.querySelector("#btn-actualizar").addEventListener("click", () => {
        let nuevoTitulo = prompt("Nuevo título:", titulo);
        let nuevaVersion = prompt("Nueva versión:", version);
        
        configuracion = {
            ...configuracion,
            titulo: nuevoTitulo,
            version: nuevaVersion
        };
        
        configurarApp(configuracion);
    });
}

configurarApp(configuracion);