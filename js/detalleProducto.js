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
const arrayProductoDetalle = JSON.parse(localStorage.getItem("productosdetalles")) || [];
const usuariostotal = JSON.parse(localStorage.getItem("regUser")) || [];

// Imprimir detalles del producto
const imprimirDetalles = (detalles) => {
    imagenProducto.src = detalles.url;
    imagenProductoResponsive.src = detalles.url;
    marcaDeProducto.innerHTML = detalles.marca;
    nombreDeProducto.innerHTML = detalles.nombre;
    precioDeProducto.innerHTML = `<strong class="h1 text-success fw-bolder">$</strong>${detalles.precio}`
    categoriaDeProducto.innerHTML = detalles.categoria;
    stockDeProducto.innerHTML = detalles.cantidad;
    descripcionDeProducto.innerHTML = detalles.descripcion
}

// Obtengo y lo guardo en una variable y muestro los atributos en el html
const mostrarProductoDetalles = () => {
    const detallesDeProducto = arrayProductoDetalle[arrayProductoDetalle.length - 1]
    imprimirDetalles(detallesDeProducto)
    return detallesDeProducto
}

// La funcion se ejecutara cada vez que se carga la el html
mostrarProductoDetalles()

const existeUsuarioCarrito = () => {
    const existe = usuariostotal.some(element => {
        return element.userOn === "true"
    })
    return existe
}

const obtenerUsuarioCarrito = () => {
    const contenedorUsuarioCarrito = arrayUsuarios.find(element => {
        return element.userOn === "true"
    })
    return contenedorUsuarioCarrito
}

function cantidadProductosCarritoDetalle() {
    if (existeUsuarioCarrito()) {
        let numeroCarrito = extraerUsuario()
        if (numeroCarrito.carrito.length > 0) {
            cantidadCarrito.innerHTML = ""
            cantidadCarrito.innerHTML = numeroCarrito.carrito.length
        }
    }
}

btnCarrito.addEventListener("click", () => {
    let product, user
    if (existeUsuarioCarrito()) {
        user = obtenerUsuarioCarrito();
        product = arrayProductoDetalle[arrayProductoDetalle.length - 1];
        user.carrito.push(product);
        arrayUsuarios.splice(arrayUsuarios.indexOf(user), 1, user);
        localStorage.setItem("regUser", JSON.stringify(arrayUsuarios))
        cantidadProductosCarritoDetalle()
    } else {
        console.log("No a iniciado sesion")
    }
})