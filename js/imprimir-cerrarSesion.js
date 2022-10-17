const arrayUsuarios = JSON.parse(localStorage.getItem("regUser")) || []
const arrayProductos = JSON.parse(localStorage.getItem("productos")) || []

const contenedorModal = document.querySelector(".contenedor-modal");
let contenedor_card_carrito = document.querySelector("#body-modal");
const divEnLinea = document.querySelector("#contenedorDeLogin");
const cantidadCarrito = document.querySelector("#cantidadCarrito");
const mostrarCarrito = document.querySelector("#abrirCarrito")
const moverModal = document.querySelector(".modalMostrar")

const cerrarCarrito = () => {
    moverModal.style.transform = "translatex(250%)"

    setTimeout(() => {
        contenedorModal.style.visibility = "hidden"
        contenedorModal.style.opacity = "0"
        moverModal.style.transform = "translatex(-250%)"
    }, 1000)
}

const verCarrito = () => {
    contenedorModal.style.zindex = "10000";
    contenedorModal.style.opacity = "1"
    contenedorModal.style.visibility = "visible"
    moverModal.style.transform = "translatex(0%)"
    mostrarProductosCarrito()
}

const obtenerProducto = (codigo) => {
    const product = arrayProductos.find(element => {
        return element.codigo === codigo
    })
    return product
}

const existeUsuario = () => {
    const user = arrayUsuarios.some(element => {
        return element.userOn === "true"
    })
    return user
}

const obtenerUsuario = () => {
    const contenedorUsuario = arrayUsuarios.find(element => {
        return element.userOn === "true"
    })
    return contenedorUsuario
}

const agregarAlCarrito = (codigo) => {
    let user, productoAGuardar
    if (existeUsuario()) {
        user = obtenerUsuario();
        productoAGuardar = obtenerProducto(codigo);
        user.carrito.push(productoAGuardar);
        arrayUsuarios.splice(arrayUsuarios.indexOf(user), 1, user);
        localStorage.setItem("regUser", JSON.stringify(arrayUsuarios))
        cantidadProductosCarrito()
    }
}

const extraerUsuario = () => {
    const contenedorUsuario = arrayUsuarios.find(element => {
        return element.userOn === "true"
    })
    return contenedorUsuario
}

const cerrarSesion = () => {
    let user = extraerUsuario()
    user.userOn = ""
    arrayUsuarios.splice(arrayUsuarios.indexOf(user), 1, user);
    localStorage.setItem("regUser", JSON.stringify(arrayUsuarios))
    window.location.replace("index.html")
}

function cantidadProductosCarrito() {
    if (existeUsuario()) {
        let user = extraerUsuario()
        if (user.carrito.length > 0) {
            cantidadCarrito.innerHTML = ""
            cantidadCarrito.innerHTML = user.carrito.length
        }
    }
}
cantidadProductosCarrito()

function mostrarProductosCarrito() {
    let paraMostrarCarrito = extraerUsuario()
    if (paraMostrarCarrito.carrito.length > 0) {
        //cantidadProductosCarrito
        contenedor_card_carrito.innerHTML = ""
        paraMostrarCarrito.carrito.forEach(producto => {
            contenedor_card_carrito.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0 d-flex flex-row">
                <div
                    class="col-md-4 d-flex justify-content-center d-md-flex justify-content-md-end">
                    <img src="${producto.url}"
                        class="img-fluid align-items-center w-50" alt="...">
                </div>
                <div class="col-md-8">
                    <div
                        class="card-body d-flex flex-column align-items-center px-md-0">
                        <h5 class="card-title small">${producto.nombre}
                        </h5>
                        <p class="card-text small">$ ${producto.precio}</p>
                        <div
                            class="d-flex justify-content-between  align-items-center d-lg-flex justify-content-md-evenly  align-items-md-center  w-75">
                            <p class="card-text m-0"><small
                                    class="text-muted"><a
                                        class="btn btn-danger btn-sm " href="#"
                                        role="button">Borrar</a></small>
                            </p>
                            <p class="card-text m-0"><small
                                    class="text-muted"><a
                                        class="btn btn-primary btn-sm " href="#"
                                        role="button">Comprar</a></small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        });
    } else if (paraMostrarCarrito.carrito.length === 0) {
        contenedor_card_carrito.innerHTML = `<h1>Carrito Vacio</h1>`
    } else {

    }
}

const imprimirEnLinea = () => {
    let usuarioLinea;
    if (existeUsuario()) {
        usuarioLinea = extraerUsuario();
        if (usuarioLinea.admin === "true") {
            divEnLinea.innerHTML = `<li class="nav-item">
            <div class="dropdown">
                <a class=" nav-link abrir-Carrito dropdown-toggle me-4" type="button" id="dropdownMenu2"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <img class="img-adm" src="./img/index/navbar/adm.png" alt="icono-adm"
                        style="width:1.5rem">
                </a>
                <ul class="opc-adm dropdown-menu" aria-labelledby="dropdownMenu2">
                <a class="text-decoration-none" href="/adminProductos.html"><li><button class="dropdown-item text-white" type="button">Productos</button>
                </li></a>
                <a class="text-decoration-none" href="/adminUsuarios.html"><li><button class="dropdown-item text-white" type="button">Usuarios</button>
                </li></a>
                </ul>
            </div>
        </li>
        <li class="nav-item abrir-Carrito" onclick="cerrarSesion()">
            <a class="nav-link adm-exit fw-bold" href="#"> <img src="./img/index/navbar/exit.svg" alt="icono-carrito" style="width:1.5rem"></a>
        </li> `
        } else if (usuarioLinea.admin === "") {
            divEnLinea.innerHTML += `
        <li class="nav-item abrir-Carrito mx-lg-3 ">
            <a class="nav-link " href="#"><img src="./img/index/navbar/usuario.png"
                    alt="img-usuario" style="width:1.6rem"></a>
        </li>
        <li class="nav-item abrir-Carrito" onclick="cerrarSesion()">
            <a class="nav-link " href="#"> <img src="./img/index/navbar/exit.svg"
                    alt="icono-carrito" style="width:1.6rem"></a>
        </li>`
        }
    } else {
        divEnLinea.innerHTML = `<li class="nav-item">
        <a id="cerraSesion1" class="nav-link abrir-Carrito fw-bold" href="/registro.html">Registrar</a>
    </li>
    <li class="nav-item">
        <a class="nav-link abrir-Carrito fw-bold" href="/login.html">Login</a>
    </li>`
    }
}
imprimirEnLinea()