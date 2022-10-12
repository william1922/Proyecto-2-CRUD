import {existeUsuario, obtenerUsuario, arrayUsuarios} from './carritoUsuarios.js'

/* Selecciono los elementos que se modificaran */
const imagenProducto = document.querySelector('#imagen-de-producto');
const marcaDeProducto = document.querySelector('#marca-de-producto');
const nombreDeProducto = document.querySelector('#nombre-de-producto');
const precioDeProducto = document.querySelector('#precio-de-producto');
const categoriaDeProducto = document.querySelector('#categoria-de-producto');
const stockDeProducto = document.querySelector('#stock-de-producto');
const descripcionDeProducto = document.querySelector('#descripcion-de-producto');
const imagenProductoResponsive = document.querySelector('#imagen-de-producto-responsive');
const btnCarrito = document.querySelector('.boton-de-carrito')


// Se extrae el array del localStorage y se lo guarda en una variable para poder manipularlo.
const arrayProductoDetalle = JSON.parse(localStorage.getItem("productoDetalle")) || [];


// Imprimir detalles del producto
const imprimirDetalles = (detalles) => {
    imagenProducto.src = detalles.imagen;
    imagenProductoResponsive.src = detalles.imagen;
    marcaDeProducto.innerHTML = detalles.marca;
    nombreDeProducto.innerHTML = detalles.nombre;
    precioDeProducto.innerHTML = `<strong class="h1 text-success fw-bolder">$</strong>${detalles.precio}`
    categoriaDeProducto.innerHTML = detalles.categoria;
    stockDeProducto.innerHTML = detalles.stock;
    descripcionDeProducto.innerHTML = detalles.descripcion
}

// Obtengo y lo guardo en una variable y muestro los atributos en el html
const mostrarProductoDetalles = () => {
    const detallesDeProducto = arrayProductoDetalle[0]
    imprimirDetalles(detallesDeProducto)
}

// La funcion se ejecutara cada vez que se carga la el html
mostrarProductoDetalles()

//const stilo = () => {
//    btnCarrito.toggleAttribute("disabled")
//}
btnCarrito.addEventListener("click", () => {
    let product, user
    if (existeUsuario()){
        user = obtenerUsuario();
        product = arrayProductoDetalle[0];
        user.carrito.push(product);
        arrayUsuarios.splice(arrayUsuarios.indexOf(user), 1, user);
        localStorage.setItem("listaUsuarios",JSON.stringify(arrayUsuarios))
        //btnCarrito.toggleAttribute("disabled")
        //btnCarrito.classList.toggle("boton-de-carritodisable")
        //setTimeout(stilo, 2000)
    } else {
        console.log("No a iniciado sesion")
    }
})