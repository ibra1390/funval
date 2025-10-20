let btn = document.querySelector("#botoncito");
let par = document.querySelector("#parrafo");

/* ================CLICK================= */
btn.addEventListener("click", ()=> { 
    /* if (btn.classList.contains("bg-green-800")) {
        btn.classList.replace("bg-green-800", "bg-red-800");
        btn.textContent = "Kevin estuvo aqui";
    } else {
        btn.classList.replace("bg-red-800", "bg-green-800");
        btn.textContent = "haz click";
    }  */
   par.textContent = "fuunval rules";
});    //funcion de orden superior

let btnOgra = document.querySelector("#dia");
let ogra = document.querySelector("#fiona");

btnOgra.addEventListener("click", ()=> {
    if (btnOgra.classList.contains("bg-yellow-200")) {
        btnOgra.classList.replace("bg-yellow-200", "bg-slate-200");
        btnOgra.textContent = "noche";
        ogra.classList.replace("bg-[url(./princesa.jpg)]", "bg-[url(./ogra.jpg)]");
    } else {
        btnOgra.classList.replace("bg-slate-200", "bg-yellow-200");
        btnOgra.textContent = "dia";
        ogra.classList.replace("bg-[url(./ogra.jpg)]", "bg-[url(./princesa.jpg)]");
    }
    
})


/* =================INPUT============== */
let input = document.querySelector("#nombre");
let par2 = document.querySelector("#par2");

input.addEventListener("input", ()=>{
    console.log(input.value);
    par2.textContent = input.value;
})

/* ============SUBMIT================ */
let form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    /* console.log("hola mundo");
    console.log(e);
    let nombreEstudiante = form.nombre.value;
    let edad = form.edad.value;
    let pais = form.pais.value;
    console.log(nombreEstudiante, edad, pais)
    let mensaje = `bienvenido ${nombreEstudiante} del pais de: ${pais} de edad ${edad}`
    console.log(mensaje); */
    let datos = new FormData(form);

    let nombreEstudiante = datos.get("nombre");
    let edad = datos.get("edad");
    let pais = datos.get("pais");

    let mensaje = `bienvenido ${nombreEstudiante} del pais de: ${pais} de edad ${edad}`
    console.log(mensaje); 

});

/* 
        una casa de cambio neceista realizar un formulario q pueda mostrar
        a sus clientes q estan de viaje cuanto seria la conversion de la moneda
        la casa de cambio trabaja en 3 paises Peru Chile y en Argentina
        si un cliente de chile se va para ARGENTINA MOSTRAR la cantidad de dinero q tendria alla
        nombre
        pais de origen    dropdown
        pais destino       dropdown
        la cantidad de dinero q tiene 
*/
const cambios = [
    
]

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let datos = new FormData(form);

    let nombreCliente = datos.get("nombreCliente");
    let paisOrigen = datos.get("paisOrigen");
    let paisDestino = datos.get("paisDestino");
    let cantidad = datos.get("cantidad");

    if ((paisOrigen === "Chile") && (paisDestino === "Peru")) {

    }

})

