

// // Creamos la clase Usuario

export class Usuario {
    constructor(usuario, contrasenia, email, fecha) {
        this.usuario = usuario;
        this.contrasenia = contrasenia;
        this.email = email;
        this.fecha = fecha;
        this.carrito = [];
        this.userOn = "";

    }
}

// // let producto = new Producto("Termo", "Stanley", "Aire Libre", "10.600", "https://images.fravega.com/f300/555b8b4a73df0cfd391d6fb488050e1b.jpg.webp");
// // console.log(producto);

// // Creamos instancias de usuarios 

export let usuario_uno = new Usuario("Fede_22", "fede_1008", "fede_1008@gmail.com", "11-02-22");




// //-------------------- Selecionamos elementos de nuestro html -----------------------------------

let contenedor_card_carrito = document.getElementById("body-modal");




// // Evaluo el carrito de un usuario


export let mostrarProductosCarrito = (array) => {

    array.forEach(producto => {
        contenedor_card_carrito.innerHTML = `
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


export let carritoUsuario = (usuario) => {

    if (usuario.carrito.length === 0) {
        contenedor_card_carrito.innerHTML = `<h5 class = "text-danger"> Su carrito está vacio </h5>`
    } else {
        mostrarProductosCarrito(usuario.carrito)
    }
}



// carritoUsuario(usuario_uno)



