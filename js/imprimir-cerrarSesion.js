const arrayUsuarios = JSON.parse(localStorage.getItem("regUser")) || []

let contenedor_card_carrito = document.querySelector("#body-modal");
const divEnLinea = document.querySelector("#contenedorDeLogin")


const existeUsuario = () => {
    const user = arrayUsuarios.some(element => {
        return element.userOn === "true"
    })
    return user
}

const extraerUsuario = () => {
    const contenedorUsuario = arrayUsuarios.find(element => {
        return element.userOn === "true"
    })
    return contenedorUsuario
}

const cerrarSesion = () => {
    let user = extraerUsuario()
    console.log(user)
    user.userOn = ""
    console.log(user)
    arrayUsuarios.splice(arrayUsuarios.indexOf(user), 1, user);
    localStorage.setItem("regUser",JSON.stringify(arrayUsuarios))
    window.location.replace("index.html")
}


let mostrarProductosCarrito = () => {
    let paraMostrarCarrito = carritoDeUsuario()
    paraMostrarCarrito.forEach(producto => {
        contenedor_card_carrito.innerHTML +=`<h1>HOla</>
        <div class="card mb-3" style="max-width: 540px;">
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

}

let carritoUsuario = () => {
    let paraMostrarCarrito = carritoDeUsuario()
    if (paraMostrarCarrito.length === 0) {
        contenedor_card_carrito.innerHTML = `<h5 class = "text-danger"> Su carrito está vacio </h5>`
    } else {
        mostrarProductosCarrito()
    }
}



const imprimirEnLinea = () => {
    let usuarioLinea;
    if (existeUsuario()) {
        usuarioLinea = extraerUsuario();
        if(usuarioLinea.admin === "true"){
            divEnLinea.innerHTML = `<li class="nav-item">
            <div class="dropdown">
                <a class=" nav-link  dropdown-toggle me-4" type="button" id="dropdownMenu2"
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
        <li class="nav-item" onclick="cerrarSesion()">
            <a class="nav-link adm-exit fw-bold" href="#"> <img src="./img/index/navbar/exit.svg" alt="icono-carrito" style="width:1.5rem"></a>
        </li> `
        } else if (usuarioLinea.admin === "") {
            divEnLinea.innerHTML = `<li class="nav-item align-self-center mt-lg-1">
            <!-- <a class="nav-link d-none d.md-none d-lg-block " href="#"> <img
                    src="./img/index/navbar/cart2.svg" alt="icono-carrito" style="width:1.6rem"></a> -->
            <!-- <a class="nav-link usuario-carrito d-lg-none fw-bold text-danger " href="#">Carrito</a> -->
            <!-- Button trigger modal -->
            <a type="button" class="align-self-center text-decoration-none" href=""
                data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <p class="d-lg-none fw-bold text-danger mb-0">Carrito</p>
                <img class="d-none d.md-none d-lg-block " src="./img/index/navbar/cart2.svg"
                    alt="icono-carrito" style="width:1.6rem">
            </a>


            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Mi Carrito</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div id="body-modal" class="modal-body overflow-auto">
     <h1>Hola</h1>

                            <!-- Inicio de la card -->
                            <!-- <div class="card mb-3" style="max-width: 540px;">
                                <div class="row g-0 d-flex flex-row">
                                    <div
                                        class="col-md-4 d-flex justify-content-center d-md-flex justify-content-md-end">
                                        <img src="https://images.fravega.com/f300/0e787868221e8c18cafeb5a527814dde.jpg.webp"
                                            class="img-fluid align-items-center w-50" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div
                                            class="card-body d-flex flex-column align-items-center px-md-0">
                                            <h5 class="card-title small">Celular Samsung Galaxy A23
                                            </h5>
                                            <p class="card-text small">$34.000</p>
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
                            </div> -->
                            <!-- Fin de la card -->
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger"
                                data-bs-dismiss="modal">Cerrar</button>
                            <!-- <button type="button" class="btn btn-primary">Understood</button> -->
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="nav-item mx-lg-3 ">
            <a class="nav-link " href="#"><img src="./img/index/navbar/usuario.png"
                    alt="img-usuario" style="width:1.6rem"></a>
        </li>
        <li class="nav-item" onclick="cerrarSesion()">
            <a class="nav-link " href="#"> <img src="./img/index/navbar/exit.svg"
                    alt="icono-carrito" style="width:1.6rem"></a>
        </li>`
        }
    } else {
        divEnLinea.innerHTML = `<li class="nav-item">
        <a id="cerraSesion1" class="nav-link  fw-bold" href="/registro.html">Registrar</a>
    </li>
    <li class="nav-item">
        <a class="nav-link  fw-bold" href="/login.html">Login</a>
    </li>`
    }
}
imprimirEnLinea()