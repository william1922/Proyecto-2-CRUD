// Seleccionamos los contenedores donde vamos agregar las tarjetas

let div_computacion = document.querySelector(".div-computacion");
let div_electrodomesticos = document.querySelector(".div-electrodomesticos");
let div_aire_libre = document.querySelector(".div-aire-libre");

let div_1 = document.querySelector(".div-1");
let div_2 = document.querySelector(".div-2");
let div_3 = document.querySelector(".div-3");

const productosDetalles = JSON.parse(localStorage.getItem('productosdetalles')) || []
localStorage.setItem("productosdetalles", JSON.stringify(productosDetalles))

// // Traer la lista de productos desde el local Storage

let listaProductosDos = JSON.parse(localStorage.getItem('productos'));

// // Filtro los productos de cada categoria por listas separadas
let productosComputacion = listaProductosDos.filter(producto => producto.categoria == "computacion");
let productosElectrodomesticos = listaProductosDos.filter(producto => producto.categoria == "electrodomesticos");
let productosAireLibre = listaProductosDos.filter(producto => producto.categoria == "aireLibre");

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

function cargarProducto() {

    if (productosComputacion.length === 0) {
        div_1.style.display = "none";
    } else {
        if (productosComputacion.length < 4) {
            productosComputacion.forEach(producto => {
                div_computacion.innerHTML += `
                <div class="card md-3  mx-lg-3  p-lg-0  mt-3 shadow" style="max-width: 540px;">
                <div class="row g-0 align-items-center my-3 d-lg-flex flex-lg-column">
                    <div onclick="enviarProductoDetalles('${producto.codigo}')" class="col-md-4 col-5 col-lg-7 d-flex align-items-center  h-75">
                        <img src="${producto.url}"
                            class="imagen-producto img-thumbnail img-fluid rounded-start" alt="imagen-producto">
                    </div>
                    <div class="col-md-8 col-7">
                        <div class="card-body d-flex flex-column align-items-center px-sm-0 py-sm-2  ">
                            <a onclick="enviarProductoDetalles('${producto.codigo}')" class="text-decoration-none">
                                <h6 class="card-title">${producto.nombre}</h6>
                            </a>
                            <p class="m-0"><small>Marca: ${producto.marca}</small></p>
                            <p class="m-0"><small>Categoria: ${producto.categoria}</small></p>
                            <h5 class="card-text fw-bold m-0 text-center mt-2 ">$ ${producto.precio}</h5>
                            <div class=" d-flex justify-content-center w-100 align-items-center d-lg-flex flex-lg-row-reverse  mt-1 ">
                            <a class="btn-carrito btn btn-light btn-sm mt-2 col-8 col-lg" href="#"
                                role="button"><img class="carrito"
                                src="./img/index/pagina-principal/card/cart3.svg" alt=""></a>
                            <a class="btn-comprar btn btn-primary btn-sm mt-2 mx-3 col-8 col-lg " href="/404.html"
                                role="button">Comprar</a>
                        </div>
                    </div>
                </div>
            </di>`
            });
        } else {
            for (let i = productosComputacion.length - 1; i > (productosComputacion.length - 1) - 3; i--) {
                let p = productosComputacion[i];
                div_computacion.innerHTML += `
                <div class="card md-3  mx-lg-3  p-lg-0  mt-3 shadow" style="max-width: 540px;">
                <div class="row g-0 align-items-center my-3 d-lg-flex flex-lg-column">
                    <div onclick="enviarProductoDetalles('${p.codigo}')" class="col-md-4 col-5 col-lg-7 d-flex align-items-center  h-75">
                        <img src="${p.url}"
                            class="imagen-producto img-thumbnail img-fluid rounded-start" alt="imagen-producto">
                    </div>
                    <div class="col-md-8 col-7">
                        <div class="card-body d-flex flex-column align-items-center px-sm-0 py-sm-2  ">
                            <a onclick="enviarProductoDetalles('${p.codigo}')" class="text-decoration-none">
                                <h6 class="">${p.nombre}</h6>
                            </a>
                            <p class="m-0"><small>Marca: ${p.marca}</small></p>
                            <p class="m-0"><small>Categoria: ${p.categoria}</small></p>
                            <h5 class="card-text fw-bold m-0 text-center mt-2 ">$ ${p.precio}</h5>
                            <div class=" d-flex flex-column w-100 justify-content-center align-items-center d-lg-flex flex-lg-row-reverse  mt-1 ">
                            <a class="btn-carrito btn btn-light btn-sm mt-2 col-8 col-lg" onclick="agregarAlCarrito('${p.codigo}')"
                                role="button"><img class="carrito"
                                src="./img/index/pagina-principal/card/cart3.svg" alt=""></a>
                            <a class="btn-comprar btn btn-primary btn-sm mt-2 mx-3 col-8 col-lg" href="/404.html"
                                role="button">Comprar</a>
                        </div>
                        </div>
                    </div>
                </div>
            </di>`
            }
        }
    }
    if (productosElectrodomesticos.length === 0) {
        div_2.style.display = "none"
    } else {
        if (productosElectrodomesticos.length < 4) {
            productosElectrodomesticos.forEach(producto => {
                div_electrodomesticos.innerHTML += `<div class="card md-3  mx-lg-3  p-lg-0  mt-3 shadow" style="max-width: 540px;">
            <div class="row g-0 align-items-center my-3 d-lg-flex flex-lg-column">
                <div onclick="enviarProductoDetalles('${producto.codigo}')" class="col-md-4 col-5 col-lg-7 d-flex align-items-center  h-75">
                    <img src="${producto.url}"
                        class="imagen-producto img-fluid img-thumbnail rounded-start" alt="imagen-producto">
                </div>
                <div class="col-md-8 col-7">
                    <div class="card-body d-flex flex-column align-items-center px-sm-0 py-sm-2  ">
                        <a onclick="enviarProductoDetalles('${producto.codigo}')" class="text-decoration-none">
                            <h6 class="card-title">${producto.nombre}</h6>
                        </a>
                        <p class="m-0"><small>Marca: ${producto.marca}</small></p>
                        <p class="m-0"><small>Categoria: ${producto.categoria}</small></p>
                        <h5 class="card-text fw-bold m-0 text-center mt-2 ">$ ${producto.precio}</h5>
                        <div class=" d-flex flex-column w-100 justify-content-center align-items-center d-lg-flex flex-lg-row-reverse  mt-1 ">
                        <a class="btn-carrito btn btn-light btn-sm mt-2 col-8 col-lg" onclick="agregarAlCarrito('${producto.codigo}')"
                            role="button"><img class="carrito"
                            src="./img/index/pagina-principal/card/cart3.svg" alt=""></a>
                        <a class="btn-comprar btn btn-primary btn-sm mt-2 mx-3 col-8 col-lg" href="/404.html"
                            role="button">Comprar</a>
                    </div>
                    </div>
                </div>
            </div>
        </di>`
            });
        } else {
            for (let i = productosElectrodomesticos.length - 1; i > (productosElectrodomesticos.length - 1) - 3; i--) {
                const producto = productosElectrodomesticos[i];
                div_electrodomesticos.innerHTML += `<div class="card md-3  mx-lg-3  p-lg-0  mt-3 shadow" style="max-width: 540px;">
            <div class="row g-0 align-items-center my-3 d-lg-flex flex-lg-column">
                <div onclick="enviarProductoDetalles('${producto.codigo}')" class="col-md-4 col-5 col-lg-7 d-flex align-items-center  h-75">
                    <img src="${producto.url}"
                        class="imagen-producto img-fluid img-thumbnail rounded-start" alt="imagen-producto">
                </div>
                <div class="col-md-8 col-7">
                    <div class="card-body d-flex flex-column align-items-center px-sm-0 py-sm-2  ">
                        <a onclick="enviarProductoDetalles('${producto.codigo}')" class="text-decoration-none">
                            <h6 class="card-title">${producto.nombre}</h6>
                        </a>
                        <p class="m-0"><small>Marca: ${producto.marca}</small></p>
                        <p class="m-0"><small>Categoria: ${producto.categoria}</small></p>
                        <h5 class="card-text fw-bold m-0 text-center mt-2 ">$ ${producto.precio}</h5>
                        <div class=" d-flex flex-column w-100 justify-content-center align-items-center d-lg-flex flex-lg-row-reverse  mt-1 ">
                        <a class="btn-carrito btn btn-light btn-sm mt-2 col-8 col-lg" onclick="agregarAlCarrito('${producto.codigo}')"
                            role="button"><img class="carrito"
                            src="./img/index/pagina-principal/card/cart3.svg" alt=""></a>
                        <a class="btn-comprar btn btn-primary btn-sm mt-2 mx-3 col-8 col-lg" href="/404.html"
                            role="button">Comprar</a>
                    </div>
                    </div>
                </div>
            </div>
        </di>`
            }
        }
    }
    if (productosAireLibre.length === 0) {
        div_3.style.display = "none";
    } else {
        if (productosAireLibre.length < 4) {
            productosAireLibre.forEach(producto => {
                div_aire_libre.innerHTML += `
                <div class="card md-3  mx-lg-3  p-lg-0  mt-3 shadow" style="max-width: 540px;">
                <div class="row g-0 align-items-center my-3 d-lg-flex flex-lg-column">
                    <div onclick="enviarProductoDetalles('${producto.codigo}')" class="col-md-4 col-5 col-lg-7 d-flex align-items-center  h-75">
                        <img src="${producto.url}"
                            class="imagen-producto img-fluid img-thumbnail rounded-start" alt="imagen-producto">
                    </div>
                    <div class="col-md-8 col-7">
                        <div class="card-body d-flex flex-column align-items-center px-sm-0 py-sm-2  ">
                            <a onclick="enviarProductoDetalles('${producto.codigo}')" class="text-decoration-none">
                                <h6 class="card-title">${producto.nombre}</h6>
                            </a>
                            <p class="m-0"><small>Marca: ${producto.marca}</small></p>
                            <p class="m-0"><small>Categoria: ${producto.categoria}</small></p>
                            <h5 class="card-text fw-bold m-0 text-center mt-2 ">$ ${producto.precio}</h5>
                            <div class=" d-flex flex-column w-100 justify-content-center align-items-center d-lg-flex flex-lg-row-reverse  mt-1 ">
                            <a class="btn-carrito btn btn-light btn-sm mt-2 col-8 col-lg" onclick="agregarAlCarrito('${producto.codigo}')"
                                role="button"><img class="carrito"
                                src="./img/index/pagina-principal/card/cart3.svg" alt=""></a>
                            <a class="btn-comprar btn btn-primary btn-sm mt-2 mx-3 col-8 col-lg" href="/404.html"
                                role="button">Comprar</a>
                        </div>
                        </div>
                    </div>
                </div>
            </di>`
            });
        } else {
            for (let i = productosAireLibre.length - 1; i > (productosAireLibre.length - 1) - 3; i--) {
                let producto = productosAireLibre[i];
                div_aire_libre.innerHTML += `<div class="card md-3  mx-lg-3  p-lg-0  mt-3 shadow" style="max-width: 540px;">
                <div class="row g-0 align-items-center my-3 d-lg-flex flex-lg-column">
                    <div onclick="enviarProductoDetalles('${producto.codigo}')" class="col-md-4 col-5 col-lg-7 d-flex align-items-center  h-75">
                        <img src="${producto.url}"
                            class="imagen-producto img-fluid img-thumbnail rounded-start" alt="imagen-producto">
                    </div>
                    <div class="col-md-8 col-7">
                        <div class="card-body d-flex flex-column align-items-center px-sm-0 py-sm-2  ">
                            <a onclick="enviarProductoDetalles('${producto.codigo}')" class="text-decoration-none">
                                <h6 class="card-title">${producto.nombre}</h6>
                            </a>
                            <p class="m-0"><small>Marca: ${producto.marca}</small></p>
                            <p class="m-0"><small>Categoria: ${producto.categoria}</small></p>
                            <h5 class="card-text fw-bold m-0 text-center mt-2 ">$ ${producto.precio}</h5>
                            <div class=" d-flex flex-column w-100 justify-content-center align-items-center d-lg-flex flex-lg-row-reverse  mt-1 ">
                            <a class="btn-carrito btn btn-light btn-sm mt-2 col-8 col-lg" onclick="agregarAlCarrito('${producto.codigo}')"
                                role="button"><img class="carrito"
                                src="./img/index/pagina-principal/card/cart3.svg" alt=""></a>
                            <a class="btn-comprar btn btn-primary btn-sm mt-2 mx-3 col-8 col-lg" href="/404.html"
                                role="button">Comprar</a>
                        </div>
                        </div>
                    </div>
                </div>
            </di>`
            }
        }
    }
}

cargarProducto();

