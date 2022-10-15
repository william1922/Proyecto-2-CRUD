const arrayUsuarios = JSON.parse(localStorage.getItem("regUser")) || []

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
            divEnLinea.innerHTML = `<li class="nav-item">
            <a class="nav-link d-none d.md-none d-lg-block " href="#"> <img src="./img/index/navbar/cart2.svg" alt="icono-carrito" style="width:1.6rem"></a>
            <a class="nav-link usuario-carrito d-lg-none fw-bold text-danger " href="#">Carrito</a>
        </li> 
        <li class="nav-item mx-lg-3 ">
            <a class="nav-link " href="#"><img src="./img/index/navbar/usuario.png" alt="img-usuario" style="width:1.6rem"></a>
        </li>
        <li class="nav-item" onclick="cerrarSesion()">
            <a class="nav-link " href="#"> <img src="./img/index/navbar/exit.svg" alt="icono-carrito" style="width:1.6rem"></a>
        </li> `
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