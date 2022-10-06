const imagenProducto = document.querySelector('#imagen-de-producto');
const marcaDeProducto = document.querySelector('#marca-de-producto');
const nombreDeProducto = document.querySelector('#nombre-de-producto');
const precioDeProducto = document.querySelector('#precio-de-producto');
const categoriaDeProducto = document.querySelector('#categoria-de-producto');
const stockDeProducto = document.querySelector('#stock-de-producto');
const descripcionDeProducto = document.querySelector('#descripcion-de-producto');
const imagenProductoResponsive = document.querySelector('#imagen-de-producto-responsive');
let arrayProductos = JSON.parse(localStorage.getItem("productosTienda")) || [];

const mostrarProductoDetalles = (atributo) => {
    const detallesDeProducto = arrayProductos.find(element => {
        return element.imagenOn === atributo
    })
imagenProducto.src = detallesDeProducto.imagen;
imagenProductoResponsive.src = detallesDeProducto.imagen;
marcaDeProducto.innerHTML = detallesDeProducto.marca;
nombreDeProducto.innerHTML = detallesDeProducto.nombre;
precioDeProducto.innerHTML = `<strong class="h1 text-success fw-bolder">$</strong>${detallesDeProducto.precio}`
categoriaDeProducto.innerHTML = detallesDeProducto.categoria;
stockDeProducto.innerHTML = detallesDeProducto.stock;
descripcionDeProducto.innerHTML = detallesDeProducto.descripcion
}

mostrarProductoDetalles("false")
