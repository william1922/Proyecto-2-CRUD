const arrayUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || []

const arrayProductos = JSON.parse(localStorage.getItem("productosStore")) || [];

//localStorage.setItem("listaUsuarios",JSON.stringify(arrayUsuarios))
// Se comprueba si un usuario esta en linea por un atributo unico
const existeUsuario = () => {
    const user = arrayUsuarios.some(element => {
        return element.usuarioOn === "true"
    })
    return user
}

// Se busca el susuario por un atributo unico y se lo guardara en una variable
const obtenerUsuario = () => {
    const contenedorUsuario = arrayUsuarios.find(element => {
        return element.usuarioOn === "true"
    })
    return contenedorUsuario
}

// Se obtiene el producto por un atributo unico y se guarda en una variable
const obtenerProducto = (codigo) => {
    const product = arrayProductos.find(element => {
        return element.codigo === codigo
    })
    return product
}

// Verifica si hay un usuario en linea, de haber uno en linea agregara el producto seleccionado a su carrito
const agregarAlCarrito = (codigo) => {
    let user, productoAGuardar
    if (existeUsuario()){
        user = obtenerUsuario();
        productoAGuardar = obtenerProducto(codigo);
        user.carrito.push(productoAGuardar);
        arrayUsuarios.splice(arrayUsuarios.indexOf(user), 1, user);
        localStorage.setItem("listaUsuarios",JSON.stringify(arrayUsuarios))
    }
}

