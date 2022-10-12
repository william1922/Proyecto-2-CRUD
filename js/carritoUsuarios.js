export const arrayUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || []

export const arrayProductos = JSON.parse(localStorage.getItem("productosStore")) || [];

class Usuario {
    constructor(usuario, email, fechaRegistro, idUnico){
        this.usuario = usuario,
        this.email = email,
        this.fechaRegistro = fechaRegistro,
        this.idUnico = idUnico,
        this.usuarioOn = ""
        this.carrito = []
    }
}

let usuario = new Usuario("jose", "jose@gmail.com", "21-01-2022", "123a8s8")
let usuario1 = new Usuario("usuario1", "usuario1@gmail.com", "21-01-2022", "asdas8")
let usuario2= new Usuario("usuario2", "usuario2@gmail.com", "21-01-2022", "234awsda")
let usuario3 = new Usuario("usuario3", "usuario3@gmail.com", "21-01-2022", "weflszd")
let usuario4 = new Usuario("usuario4", "usuario4@gmail.com", "21-01-2022", "8faneda")
let usuario5 = new Usuario("usuario5", "usuario5@gmail.com", "21-01-2022", "asdasdq3w4")

// Se extrae el array del localStorage y se lo guarda en una variable para poder manipularlo.


//arrayUsuarios.push(usuario, usuario1, usuario2, usuario3, usuario4, usuario5)

//localStorage.setItem("listaUsuarios",JSON.stringify(arrayUsuarios))
// Se comprueba si un usuario esta en linea por un atributo unico
export const existeUsuario = () => {
    const user = arrayUsuarios.some(element => {
        return element.usuarioOn === "true"
    })
    return user
}

// Se busca el susuario por un atributo unico y se lo guardara en una variable
export const obtenerUsuario = () => {
    const contenedorUsuario = arrayUsuarios.find(element => {
        return element.usuarioOn === "true"
    })
    return contenedorUsuario
}

// Se obtiene el producto por un atributo unico y se guarda en una variable
export const obtenerProducto = (codigo) => {
    const product = arrayProductos.find(element => {
        return element.codigo === codigo
    })
    return product
}

// Verifica si hay un usuario en linea, de haber uno en linea agregara el producto seleccionado a su carrito
export const agregarAlCarrito = (codigo) => {
    let user, productoAGuardar
    if (existeUsuario()){
        user = obtenerUsuario();
        productoAGuardar = obtenerProducto(codigo);
        user.carrito.push(productoAGuardar);
        arrayUsuarios.splice(arrayUsuarios.indexOf(user), 1, user);
        localStorage.setItem("listaUsuarios",JSON.stringify(arrayUsuarios))
    }
}

