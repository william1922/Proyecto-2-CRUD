const productosdiv = document.querySelector('#productos-computacion')
const listaProductosDos = JSON.parse(localStorage.getItem('productos'))
let productosComputacion = listaProductosDos.filter(producto => producto.categoria == "computacion");
const productosDetalles = JSON.parse(localStorage.getItem('productosdetalles')) || []
const obtenerProductoAEnviar = (codigo) => {
    let product = listaProductosDos.find(element => {
        return element.codigo === codigo
    })
    return product
}

const enviarProductoDetalles = (codigo) => {
    let productAEnviar = obtenerProductoAEnviar(codigo)
    productosDetalles.push(productAEnviar)
    localStorage.setItem("productosdetalles", JSON.stringify(productosDetalles))
    window.location.replace("detalleProducto.html")
}

productosComputacion.forEach(element => {
    productosdiv.innerHTML += `<div class="card md-3 mx-lg-4  p-lg-0 my-3 shadow" style="max-width: 540px;">
    <div class="card-img-body row g-0 align-items-center d-lg-flex flex-lg-column">
        <div onclick="enviarProductoDetalles('${element.codigo}')" class="div-img col-md-4 col-5 col-lg-7 d-flex my-3 align-items-center h-75">
            <img src="${element.url}"
                class="imagen-producto img-fluid img-thumbnail rounded-start " alt="imagen-producto">
        </div>
        <div class="col-md-8 col-7 ">
            <div class="card-body px-sm-0 py-sm-2 ">
                <a onclick="enviarProductoDetalles('${element.codigo}')" class="text-decoration-none">
                    <h6 class="card-title">${element.nombre}</h6>
                </a>
                <p class="m-0"><small>Marca: ${element.marca}</small></p>
                <p class="m-0"><small>Categoria: ${element.categoria}</small></p>
                <h5 class="card-text fw-bold m-0 text-center mt-2 ">$${element.precio}</h5>
                <div class=" d-flex flex-column align-items-center d-lg-flex flex-lg-row-reverse  mt-1 ">
                    <a class="btn-carrito btn btn-light btn-sm mt-2 col-8 col-lg" onclick="agregarAlCarrito('${element.codigo}')"
                        role="button"><img class="carrito"
                            src="./img/index/pagina-principal/card/cart3.svg" alt=""></a>
                    <a class="btn-comprar btn  btn-primary btn-sm mt-2 col-8 col-lg w-100" href="/404.html"
                        role="button">Comprar</a>
                </div>
            </div>
        </div>
    </div>
</div>`
});
