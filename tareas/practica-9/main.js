let tareas = [];
let filtroActual = "todas";
let contadorId = 1;

// Delegacion de eventos
document.addEventListener("click", (e) => {
    // Agregar tarea
    if (e.target.id === "agregarBtn") {
        let input = document.querySelector("#tareaInput");
        if (input.value.trim() !== "") {
            tareas.push({
                id: contadorId,
                texto: input.value,
                completada: false,
                editando: false,
            });
            contadorId++;
            input.value = "";
            mostrarTareas();
        }
    }

    // Filtrar tareas
    if (e.target.classList.contains("filtro-todas")) {
        filtroActual = "todas";
        actualizarBotones();
        mostrarTareas();
    }
     if (e.target.classList.contains("filtro-pendientes")) {
        filtroActual = "pendientes";
        actualizarBotones();
        mostrarTareas();
    }
    if (e.target.classList.contains("filtro-completadas")) {
        filtroActual = "completadas";
        actualizarBotones();
        mostrarTareas();
    }

    // Completar tarea
    if (e.target.classList.contains("completarBtn")) {
        let tareaDiv = e.target.closest(".tarea");
        let id = tareaDiv.dataset.id;
        tareas = tareas.map(tarea => {
            if (tarea.id == id) {
                return {...tarea, completada: !tarea.completada};
            } else {
                return tarea;
            }
        });
        mostrarTareas();
    }

    // Editar tarea
    if (e.target.classList.contains("editarBtn")) {
        let tareaDiv = e.target.closest(".tarea");
        let id = tareaDiv.dataset.id;
        tareas = tareas.map(tarea => {
            if (tarea.id == id) {
                return {...tarea, editando: true};
            } else {
                return tarea;
            }
        });
        mostrarTareas();
    }

    // Guardar edicion
    if (e.target.classList.contains("guardarBtn")) {
        let tareaDiv = e.target.closest(".tarea");
        let id = tareaDiv.dataset.id;
        let input = tareaDiv.querySelector("input");
        let nuevoTexto = input.value.trim();
        if (nuevoTexto !== "") {
            tareas = tareas.map(tarea => {
                if (tarea.id == id) {
                    return {...tarea, texto: nuevoTexto, editando: false};
                } else {
                    return tarea;
                }
            });
            mostrarTareas();
        }
    }

    if (e.target.classList.contains("eliminarBtn")) {
        let id = e.target.closest(".tarea").dataset.id;
        if (confirm("Seguro que quieres eliminar esta tarea?")) {
            tareas = tareas.filter(tarea => tarea.id != id);
            mostrarTareas();
        }
    }
});

function actualizarBotones() {
    let botones = document.querySelectorAll('.filtro-todas, .filtro-pendientes, .filtro-completadas');
    
    botones.forEach(boton => {
        let claseOriginal = boton.classList[0]; 
        if (boton.classList.contains('filtro-' + filtroActual)) {
            boton.className = claseOriginal + ' px-3 py-1 rounded bg-blue-500 text-white';
        } else {
            boton.className = claseOriginal + ' px-3 py-1 rounded bg-blue-200';
        }
    });
}

function mostrarTareas() {
    let lista = document.querySelector("#listaTareas");
    lista.innerHTML = "";

    // Filtrar tareas
    let tareasMostrar = [];
    tareas.forEach(tarea => {
        if (filtroActual === "todas") {
            tareasMostrar.push(tarea);
        } else if (filtroActual === "pendientes" && !tarea.completada) {
            tareasMostrar.push(tarea);
        } else if (filtroActual === "completadas" && tarea.completada) {
            tareasMostrar.push(tarea);
        }
    });

    if (tareasMostrar.length === 0) {
        lista.innerHTML = `<p class="text-gray-500 text-center py-4">No hay tareas</p>`;
        return;
    }

    tareasMostrar.forEach(({id, texto, completada, editando}) => {
    if (editando) {
        lista.innerHTML += `
        <div class="tarea bg-gray-100 p-3 rounded border mb-2 text-center" data-id="${id}">
            <input value="${texto}" class="w-full px-3 py-2 border rounded mb-2">
            <div class="flex justify-center">    
                <button class="guardarBtn bg-slate-700 text-white px-3 py-1 rounded">Guardar</button>
            </div>
        </div>
        `;
    } else {
        let completadaClass = completada ? "opacity-60" : "";
        let textoClass = completada ? "line-through text-gray-500" : "";
        let botonClass = completada ? "bg-green-500 border-green-500" : "border-gray-400";
        lista.innerHTML += `
            <div class="tarea flex items-center justify-between bg-gray-50 p-3 rounded border mb-2 ${completadaClass}" data-id="${id}">
                <div class="flex items-center gap-3">
                    <button class="completarBtn w-5 h-5 border-2 ${botonClass} rounded text-white text-xs">
                        ${completada ? "✓" : ""}
                    </button>
                    <span class="${textoClass}">${texto}</span>
                </div>
                <div class="flex gap-2">
                    <button class="editarBtn p-2 rounded hover:bg-blue-100 transition-colors">
                        <svg class="w-6 h-6 text-blue-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                        </svg>
                    </button>
                    <button class="eliminarBtn p-2 rounded hover:bg-red-100 transition-colors">
                        <svg class="w-6 h-6 text-red-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            `;
        }
    });
}


actualizarBotones();
mostrarTareas();