let contenedor = document.querySelector("#productos-container");
let filtroInput = document.querySelector("#filtro");

const productos = [
  {
    id: 1,
    nombre: "Laptop MSI Raider GE78HX",
    precio: 2500,
    categoria: "Computo",
    imagen: "./images/laptop.jpg"
  },
  {
    id: 2,
    nombre: "Monitor LG UltraGear 27''",
    precio: 400,
    categoria: "Computo",
    imagen: "./images/monitor.jpg"
  },
  {
    id: 3,
    nombre: "Teclado Redragon Kumara RGB",
    precio: 60,
    categoria: "Accesorios",
    imagen: "./images/teclado.jpg"
  },
  {
    id: 4,
    nombre: "Mouse Logitech",
    precio: 120,
    categoria: "Accesorios",
    imagen: "./images/mouse.jpeg"
  },
  {
    id: 5,
    nombre: "Smart TV Samsung 55'' OLED 4K",
    precio: 1300,
    categoria: "Smart Home",
    imagen: "./images/pantalla.jpeg"
  },
  {
    id: 6,
    nombre: "iPhone 17 Pro Max 256GB",
    precio: 1400,
    categoria: "Telefonia",
    imagen: "./images/iphone.jpeg"
  },
  {
    id: 7,
    nombre: "Nintendo Switch OLED",
    precio: 350,
    categoria: "Videojuegos",
    imagen: "./images/switch.jpg"
  },
  {
    id: 8,
    nombre: "PlayStation 5 Slim",
    precio: 500,
    categoria: "Videojuegos",
    imagen: "./images/playstation.jpg"
  },
  {
    id: 9,
    nombre: "Auriculares Sony Inalámbricos",
    precio: 400,
    categoria: "Electronica",
    imagen: "./images/auriculares.jpg"
  },
  {
    id: 10,
    nombre: "Cámara de seguridad TP-Link",
    precio: 60,
    categoria: "Smart Home",
    imagen: "./images/camara.jpg"
  },
  {
    id: 11,
    nombre: "Laptop HP Victus 15",
    precio: 2200,
    categoria: "Computo",
    imagen: "./images/laptopHP.jpg"
  },
  {
    id: 12,
    nombre: "Samsung Galaxy S25 Ultra",
    precio: 1200,
    categoria: "Telefonia",
    imagen: "./images/s25.png"
  }
];

const promesaProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = Math.random() > 0.3;
        if (exito) {
            resolve(productos);
        } else {
            reject("Error al cargar los productos, intenta nuevamente.");
        }
    }, 2000);
});

async function traerPromesa() {
    try {
        
        let respuesta = await promesaProductos;
        contenedor.innerHTML = "";
        respuesta.forEach(({id, nombre, precio, categoria, imagen}) => {
        contenedor.innerHTML += `
            <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div class="h-48 sm:h-64 w-full bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img src="${imagen}" alt="${nombre}" class="h-full w-full object-cover">
                </div>
                <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2">${categoria}</span>
                <h3 class="text-lg font-bold text-gray-900 mb-2">${nombre}</h3>
                <p class="text-2xl font-bold text-green-600 mb-4">$${precio}</p>
                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                    Agregar al carrito
                </button>
            </div>
        `;
});
    } catch (error) {
    contenedor.innerHTML = `
    <div class="col-span-full text-center p-8">
        <div class="bg-red-100 border border-red-400 text-red-700 p-12 rounded-lg inline-block">
            <p class="font-semibold">❌ ${error}</p>
            <button onclick="location.reload()" class="mt-2 text-red-600 hover:text-red-800 underline cursor pointer">
                Recargar página
            </button>
        </div>
    </div>
    `;
    }
};

filtroInput.addEventListener("input", (e) => {
    let buscar = e.target.value.toLowerCase();
    
    document.querySelectorAll("#productos-container > div").forEach(producto => {
        let texto = producto.textContent.toLowerCase();
        producto.hidden = !texto.includes(buscar);
    });
});


traerPromesa();
