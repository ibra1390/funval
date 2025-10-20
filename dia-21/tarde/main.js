/* -----------------------------------------------------------
TANDA DE 30 EJERCICIOS — Desestructuración + Spread 
----------------------------------------------------------- */

//  BLOQUE 1: Desestructuración aplicada (objetos + arrays)
// Objetivo: aplicar desestructuración en escenarios reales.

// 1. Dado un objeto usuario con {nombre, edad, direccion: {ciudad, pais}},
// desestructura todos los valores y muestra un mensaje con ellos.
let usuario = {
  nombre: "juan",
  edad: 18,
  direccion: {
    ciudad: "Santiago",
    pais: "Chile",
  },
};

let {
  nombre,
  edad,
  direccion: { ciudad, pais },
} = usuario;

let mensaje = `hola ${nombre} de edad ${edad} de la ciudad de ${ciudad} del pais ${pais}`;
alert(mensaje);

// 2. Dado un array de estudiantes con objetos {nombre, edad, notas: [..]},
// desestructura para obtener nombre y calcular promedio de notas.
let estudiantes = [
    {
        nombre: "pedro",
        edad: 25,
        notas: [50,64,74,100],
    },
    {
        nombre: "raul",
        edad: 33,
        notas: [57,100,48,86],
    },
    {
        nombre: "laura",
        edad: 27,
        notas: [75,31,80,100],
    },
    {
        nombre: "javier",
        edad: 55,
        notas: [70,60,58,100],
    },
    {
        nombre: "karla",
        edad: 33,
        notas: [86,86,31,93],
    },
]

for (let estudiante of estudiantes) {
    let {nombre, notas} = estudiante;

    let suma = notas.reduce((acumulado, notaActual) => acumulado + notaActual, 0);
    let promedio = suma / notas.length;

    console.log(`El estudiante ${nombre} tiene un promedio de ${promedio.toFixed(2)}`);
}

// 3. Desestructura el primer y último elemento de un array sin usar índices directos.
let mascotas = [
    "perro",
    "gato",
    "hamster",
    "tarantulas",
    "loros",
    "mono"
];

let [primero, , , , , , ultimo] = mascotas;
console.log(primero, ultimo);

// 4. Dado un objeto producto con muchas propiedades, usa desestructuración con rest
// para extraer "nombre" y "precio" y guardar el resto en otra variable.
let auto = {
    nombreAuto: "Mazda",
    precio: 520000,
    color: "rojo",
    km: 520,
    modelo: 2025,
};

let {nombreAuto,precio, ...rest} = auto;
console.log(nombreAuto, precio);
console.log(rest);


// 5. Usa desestructuración en parámetros de una función para recibir
// un objeto con {usuario, rol, activo} y mostrar solo usuario y rol.
let objUsuario = {
    usuario: "Juan Chavez",
    rol: "Administrador",
    activo: true,
    pais: "Chile",
    empresa: {
        nombre: "capital System",
        sueldo: 680,
    },
};

function mostrarObj({usuario, rol}) {
    console.log(`hola ${usuario} de rol: ${rol}`);
}

mostrarObj(objUsuario);

// 6. Dado un array anidado [[1,2],[3,4],[5,6]], desestructura para obtener el número 6 directamente.
let matriz = [
    [1,2],
    [3,4],
    [5,6],
]

let [, , [, seis ]] = matriz;

console.log(seis);


// 7. Desestructura un array de 10 elementos para obtener solo los primeros 3
// y el resto guardarlo en otra variable con rest.
let numeros = [1,2,3,4,5,6,7,8,9,0];

let [numero1, numero2, numero3, ...ibra] = numeros;
console.log(numero1, numero2, numero3);
console.log(ibra);
// 8. Dado un objeto con propiedades anidadas (empresa → departamento → empleado),
// desestructura en una sola línea para obtener el nombre del empleado.

// 9. Usa desestructuración para intercambiar el valor de dos variables sin usar una variable temporal.

// 10. Desestructura una función que retorna un array [estado, setEstado],
// similar a como hace React con useState().

//  BLOQUE 2: Operador Spread aplicado
// Objetivo: crear, combinar y actualizar datos sin mutar.

// 11. Combina dos arrays de objetos (estudiantes y nuevosEstudiantes)
// en uno solo usando spread y muestra la lista combinada.
let estudiantesChidos = [
    {nombre: "juan", nota:78},
    {nombre: "kana", nota:90},
    {nombre: "pedro", nota:35},
];

let nuevosEstudiantes = [
    {nombre: "kevin", nota:23},
    {nombre: "moises", nota:77},
    {nombre: "alfredo", nota:90},
];
let listaEstudiantes = [...estudiantesChidos, ...nuevosEstudiantes];
console.log(listaEstudiantes);

// 12. A partir de un array de productos, agrega un nuevo producto usando spread
// sin usar push.
let productos = ["computadora", "laptop", "pantalla", "mouse"];
let fusionProductos = [...productos, "refrigerador"]
console.log(fusionProductos)

// 13. A partir de un objeto usuario, crea uno nuevo con un rol adicional "admin"
// sin modificar el original.
let user = {
    nombreUser: "Mario",
    edad: 38,
    profesion: "Administrado de empresas",
}

let superUser = {...user, rol: "admin"};
console.log(superUser)
// 14. Dado un array de usuarios, reemplaza el usuario con id = 3
// con uno nuevo usando map + spread.
let usuarios = [
    {
        user: "Mateo",
        id: 1,
        edad: 59,
        pais: "Chile",
        password: "123soyelmejor"
    },
    {
        user: "Ramiro",
        id: 2,
        edad: 29,
        pais: "Mexico",
        password: "Ramilo124"
    },
    {
        user: "Mariana",
        id: 3,
        edad: 21,
        pais: "Bolivia",
        password: "mariana1234"
    },
    {
        user: "Joel",
        id: 4,
        edad: 25,
        pais: "España",
        password: "ole123"
    },
];

let actualizarUsuario = usuarios.map(usuario => 
    usuario.id === 3 
    ? {...usuario, user: "Juana", edad: 45} 
    : usuario
);

console.log(actualizarUsuario)

// 15. Combina las propiedades de dos objetos que tienen claves repetidas
// y observa qué propiedad prevalece.
let mascota = {
    raza: "cooker",
    pelaje: "manto blanco",
    vista: true,
};

let animalSalvaje = {
    raza: "oso pardo",
    pelaje: "manto cafe",
    vista: true,
};

let superAnimal = {...mascota, ...animalSalvaje};
console.log(animalSalvaje);

// 16. Crea una copia profunda de un array de objetos usando spread
// y modifica uno de ellos sin afectar el original.

// 17. A partir de un array de notas, usa spread para agregar múltiples notas de una sola vez.

// 18. Clona un objeto anidado y modifica solo una propiedad interna sin alterar el original.

// 19. Crea un nuevo objeto "pedido" combinando los datos de un cliente y un producto.

// 20. Usa spread para clonar un array grande y ordénalo sin modificar el original.

//  BLOQUE 3: Casos prácticos combinando Desestructuración + Spread
// Objetivo: simular casos reales tipo mini app / lógica avanzada.

// 21. Dado un array de estudiantes con notas, crea una función que
// devuelva un nuevo array con todos los estudiantes que tengan promedio > 80,
// usando desestructuración y spread para crear nuevos objetos.

// 22. Crea una función "actualizarStock" que reciba un array de productos y un id,
// y retorne un nuevo array con el producto incrementado en +1 stock sin mutar.

// 23. Crea una función "agregarTarea" que reciba una lista de tareas y una nueva tarea
// y retorne una nueva lista (no mutar el original).

// 24. Crea una función que reciba un objeto usuario y retorne otro
// con la propiedad "estado: activo" agregada usando spread.

// 25. Desestructura un array de objetos libros y devuelve un nuevo array
// solo con el título y autor usando map + desestructuración.

// 26. Crea una función que desestructure los parámetros {nombre, precio}
// de un producto y devuelva un nuevo objeto con un impuesto agregado (IVA).

// 27. Combina dos arrays de objetos usuarios y usa desestructuración para
// crear un nuevo array solo con {nombre, email} de cada uno.

// 28. Desestructura un objeto anidado de configuración de app para extraer
// opciones específicas y combina con otras opciones usando spread.

// 29. Simula una “actualización masiva”: dado un array de estudiantes,
// retorna un nuevo array con +1 año en edad para todos (sin mutar el original).

// 30. Crea una función que reciba un array de órdenes de compra y devuelva
// un nuevo array con el total calculado por cada orden usando desestructuración y spread.
