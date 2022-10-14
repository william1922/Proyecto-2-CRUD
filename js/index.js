// Creamos la clase Producto

class Producto {
    constructor(nombre, marca, categoria, precio, url) {

        this.nombre = nombre;
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
        this.url = url;
    }

}


// Seleccionamos los contenedores donde vamos agregar las tarjetas

let div_computacion = document.querySelector(".div-computacion");

let div_electrodomesticos = document.querySelector(".div-electrodomesticos");

let div_aire_libre = document.querySelector(".div-aire-libre");


let div_1 = document.querySelector(".div-1");
let div_2 = document.querySelector(".div-2");
let div_3 = document.querySelector(".div-3");



// Crear las instancias y guardar en un arrray

let listaProductos = [

    // Computacion
    new Producto("Auricular", "Sony", "Computacion", "600", "https://s3-us-west-2.amazonaws.com/assets.ximaro.net/pictures/files/000/004/899/original/AURICULAR-SONY-PLEGABLES-02.jpg?1646944717"),
    new Producto("Teclado", "Redragon", "Computacion", "4.000", "https://s3-us-west-2.amazonaws.com/assets.ximaro.net/pictures/files/000/003/348/original/Rd-K503-HarpePro.jpg?1618851847"),
    new Producto("Monitores", "Samsung", "Computacion", "48.999", "https://images.fravega.com/f300/393cba5a66fe2d29273ed1e7244f3e60.jpg.webp"),
    new Producto("Mouse Gaming", "Panacom", "Computacion", "4.000", "https://images.fravega.com/f300/44b38f6e8584213b75b37fa13897e2c4.jpg.webp"),
    new Producto("Parlante Portatil", "JBL", "Computacion", "25.999", "https://images.fravega.com/f300/c502a0343f8584a109cd6a9dc2f3379c.jpg.webp"),

    // Electrodomesticos
    new Producto("Heladera", "whirlpool", "Electrodomesticos", "60.000", "https://images.fravega.com/f300/567427bcc26096102ef63a0c0d98e204.jpg.webp"),
    new Producto("Microonda", "whirlpool", "Electrodomesticos", "60.400", "https://images.fravega.com/f300/0f93cd910298f27bcabe08748d7f245e.jpg.webp"),
    new Producto("Cafetera Express", "Peabody", "Electrodomesticos", "59.999", "https://images.fravega.com/f300/68220da3434721d983f1a235bcbc9bed.jpg.webp"),
    new Producto("Batidora de mano", "Philips", "Electrodomesticos", "5.400", "https://images.fravega.com/f300/97c9030e15927e70802ba8778d607f27.jpg.webp"),
    new Producto("Pava electricas", "Philips", "Electrodomesticos", "10.500", "https://images.fravega.com/f300/054e150e13a3fa37f0ef8b381b5f1646.jpg.webp"),

    // Aire Libre
    new Producto("Carpa", "Coleman", "Aire Libre", "45.600", "https://www.canigo.com.ar/wp-content/uploads/11514_1.jpg"),
    new Producto("Caña de pescar", "Maquieira ", "Aire Libre", "9.749", "https://media.istockphoto.com/vectors/spinning-for-fishing-flat-isolated-vector-id697053732?k=20&m=697053732&s=612x612&w=0&h=VVT6qW91dofUsiBBJrnmKHh-tUmLz5sQqPKZDc6peDc="),
    new Producto("Mesas de jardin", "Pampa", "Aire Libre", "13.600", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTICLjQs0ksypVJ3h_HPBjit-OV78ekk2UGK2tLYjc54TZFggQtqHfj8pvltHOI-IvOc&usqp=CAU"),
    new Producto("Carpa", "Coleman", "Aire Libre", "45.600", "https://www.canigo.com.ar/wp-content/uploads/11514_1.jpg"),
    new Producto("Termo", "Stanley", "Aire Libre", "10.600", "https://images.fravega.com/f300/555b8b4a73df0cfd391d6fb488050e1b.jpg.webp")

];




// // Guardar la lista en el local storage

localStorage.setItem("listadoProductos", JSON.stringify(listaProductos));


// // Traer la lista de productos desde el local Storage

let listaProductosDos = JSON.parse(localStorage.getItem(`listadoProductos`));

// // Filtro los productos de cada categoria por listas separadas
let productosComputacion = listaProductosDos.filter(producto => producto.categoria == "Computacion");
let productosElectrodomesticos = listaProductosDos.filter(producto => producto.categoria == "Electrodomesticos");
let productosAireLibre = listaProductosDos.filter(producto => producto.categoria == "Aire Libre");

function cargarProducto() {

    if (productosComputacion.length === 0) {
        div_1.style.display = "none";
    } else {
        if (productosComputacion.length < 4 ) {
            productosComputacion.forEach(producto => {
                
                div_computacion.innerHTML += `
        
                <div class="card md-3  mx-lg-3  p-lg-0  mt-3 shadow" style="max-width: 540px;">
                <div class="row g-0 align-items-center d-lg-flex flex-lg-column">
                    <div class="col-md-4 col-5 col-lg-7 d-flex align-items-center  h-75">
                        <img src="${producto.url}"
                            class="imagen-producto img-fluid rounded-start" alt="imagen-producto">
                    </div>
                    <div class="col-md-8 col-7">
                        <div class="card-body d-flex flex-column align-items-center px-sm-0 py-sm-2  ">
                            <a href="http://">
                                <h6 class="card-title">${producto.nombre}</h6>
                            </a>
                            <p class="m-0"><small>Marca: ${producto.marca}</small></p>
                            <p class="m-0"><small>Categoria: ${producto.categoria}</small></p>
                            <h5 class="card-text fw-bold m-0 text-center mt-2 ">$ ${producto.precio}</h5>
                            <div class=" d-flex flex-column align-items-center mt-3 row " >
                                <a class="btn-carrito btn btn-light btn-sm mt-2 col-8 w-100" href="#" role="button" ><img
                                        class="carrito" src="./img/index/pagina-principal/card/cart3.svg"
                                        alt=""></a>
                                <a class="btn-comprar  btn btn-primary btn-sm mt-2 col-8 w-100" href="#"
                                    role="button">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </di>
            
                `
            });
        } else {
            for (let i = productosComputacion.length - 1; i > (productosComputacion.length - 1) - 3; i--) {
                let p = productosComputacion[i];
                div_computacion.innerHTML += `
        
                <div class="card md-3  mx-lg-3  p-lg-0  mt-3 shadow" style="max-width: 540px;">
                <div class="row g-0 align-items-center d-lg-flex flex-lg-column">
                    <div class="col-md-4 col-5 col-lg-7 d-flex align-items-center  h-75">
                        <img src="${p.url}"
                            class="imagen-producto img-fluid rounded-start" alt="imagen-producto">
                    </div>
                    <div class="col-md-8 col-7">
                        <div class="card-body d-flex flex-column align-items-center px-sm-0 py-sm-2  ">
                            <a href="http://">
                                <h6 class="card-title">${p.nombre}</h6>
                            </a>
                            <p class="m-0"><small>Marca: ${p.marca}</small></p>
                            <p class="m-0"><small>Categoria: ${p.categoria}</small></p>
                            <h5 class="card-text fw-bold m-0 text-center mt-2 ">$ ${p.precio}</h5>
                            <div class=" d-flex flex-column align-items-center mt-3 row " >
                                <a class="btn-carrito btn btn-light btn-sm mt-2 col-8 w-100" href="#" role="button" ><img
                                        class="carrito" src="./img/index/pagina-principal/card/cart3.svg"
                                        alt=""></a>
                                <a class="btn-comprar  btn btn-primary btn-sm mt-2 col-8 w-100" href="#"
                                    role="button">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </di>
            
                `
            }
        }       

    }


    if (productosElectrodomesticos.length === 0) {

        div_2.style.display = "none"
    } else {
        if(productosElectrodomesticos.length < 4) {
            productosElectrodomesticos.forEach(producto => {
                div_electrodomesticos.innerHTML += `
     
            <div class="card md-3  mx-lg-3  p-lg-0  mt-3 shadow" style="max-width: 540px;">
            <div class="row g-0 align-items-center d-lg-flex flex-lg-column">
                <div class="col-md-4 col-5 col-lg-7 d-flex align-items-center  h-75">
                    <img src="${producto.url}"
                        class="imagen-producto img-fluid rounded-start" alt="imagen-producto">
                </div>
                <div class="col-md-8 col-7">
                    <div class="card-body d-flex flex-column align-items-center px-sm-0 py-sm-2  ">
                        <a href="http://">
                            <h6 class="card-title">${producto.nombre}</h6>
                        </a>
                        <p class="m-0"><small>Marca: ${producto.marca}</small></p>
                        <p class="m-0"><small>Categoria: ${producto.categoria}</small></p>
                        <h5 class="card-text fw-bold m-0 text-center mt-2 ">$ ${producto.precio}</h5>
                        <div class=" d-flex flex-column align-items-center mt-3 row " >

                            <a class="btn-carrito btn btn-light btn-sm mt-2 col-8 w-100" href="#" role="button" ><img
                                    class="carrito" src="./img/index/pagina-principal/card/cart3.svg"
                                    alt=""></a>
                            <a class="btn-comprar  btn btn-primary btn-sm mt-2 col-8 w-100" href="#"
                                role="button"  >Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
        </di>
                      
            `
            });
            
        } else {
            
        for (let i = productosElectrodomesticos.length - 1; i > (productosElectrodomesticos.length - 1) - 3; i--) {

            const producto = productosElectrodomesticos[i];
            div_electrodomesticos.innerHTML += `
    
            <div class="card md-3  mx-lg-3  p-lg-0  mt-3 shadow" style="max-width: 540px;">
            <div class="row g-0 align-items-center d-lg-flex flex-lg-column">
                <div class="col-md-4 col-5 col-lg-7 d-flex align-items-center  h-75">
                    <img src="${producto.url}"
                        class="imagen-producto img-fluid rounded-start" alt="imagen-producto">
                </div>
                <div class="col-md-8 col-7">
                    <div class="card-body d-flex flex-column align-items-center px-sm-0 py-sm-2  ">
                        <a href="http://">
                            <h6 class="card-title">${producto.nombre}</h6>
                        </a>
                        <p class="m-0"><small>Marca: ${producto.marca}</small></p>
                        <p class="m-0"><small>Categoria: ${producto.categoria}</small></p>
                        <h5 class="card-text fw-bold m-0 text-center mt-2 ">$ ${producto.precio}</h5>
                        <div class=" d-flex flex-column align-items-center mt-3 row " >
                            <a class="btn-carrito btn btn-light btn-sm mt-2 col-8 w-100" href="#" role="button" ><img
                                    class="carrito" src="./img/index/pagina-principal/card/cart3.svg"
                                    alt=""></a>
                            <a class="btn-comprar  btn btn-primary btn-sm mt-2 col-8 w-100" href="#"
                                role="button"  >Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
        </di>
            
            
            `

        }


        }

        // btn_ver_mas_e.style.display="block";

    }


    if (productosAireLibre.length === 0) {

        div_3.style.display = "none";
    } else {
        if(productosAireLibre.length < 4) {
            productosAireLibre.forEach(producto => {
                div_aire_libre.innerHTML += `
        
                <div class="card md-3  mx-lg-3  p-lg-0  mt-3 shadow" style="max-width: 540px;">
                <div class="row g-0 align-items-center d-lg-flex flex-lg-column">
                    <div class="col-md-4 col-5 col-lg-7 d-flex align-items-center  h-75">
                        <img src="${producto.url}"
                            class="imagen-producto img-fluid rounded-start" alt="imagen-producto">
                    </div>
                    <div class="col-md-8 col-7">
                        <div class="card-body d-flex flex-column align-items-center px-sm-0 py-sm-2  ">
                            <a href="http://">
                                <h6 class="card-title">${producto.nombre}</h6>
                            </a>
                            <p class="m-0"><small>Marca: ${producto.marca}</small></p>
                            <p class="m-0"><small>Categoria: ${producto.categoria}</small></p>
                            <h5 class="card-text fw-bold m-0 text-center mt-2 ">$ ${producto.precio}</h5>
                            <div class=" d-flex flex-column align-items-center mt-3 row " >
                                <a id="link-carrito" class="btn-carrito btn btn-light btn-sm mt-2 col-8 w-100" href="#" role="button" ><img
                                        class="carrito" src="./img/index/pagina-principal/card/cart3.svg"
                                        alt=""></a>
                                <a class="btn-comprar  btn btn-primary btn-sm mt-2 col-8 w-100" href="#"
                                    role="button"  >Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </di>
                
                
                `
            });
          
        } else {
            for (let i = productosAireLibre.length - 1; i > (productosAireLibre.length - 1) - 3; i--) {
                let producto = productosAireLibre[i];
                div_aire_libre.innerHTML += `
        
                <div class="card md-3  mx-lg-3  p-lg-0  mt-3 shadow" style="max-width: 540px;">
                <div class="row g-0 align-items-center d-lg-flex flex-lg-column">
                    <div class="col-md-4 col-5 col-lg-7 d-flex align-items-center  h-75">
                        <img src="${producto.url}"
                            class="imagen-producto img-fluid rounded-start" alt="imagen-producto">
                    </div>
                    <div class="col-md-8 col-7">
                        <div class="card-body d-flex flex-column align-items-center px-sm-0 py-sm-2  ">
                            <a href="http://">
                                <h6 class="card-title">${producto.nombre}</h6>
                            </a>
                            <p class="m-0"><small>Marca: ${producto.marca}</small></p>
                            <p class="m-0"><small>Categoria: ${producto.categoria}</small></p>
                            <h5 class="card-text fw-bold m-0 text-center mt-2 ">$ ${producto.precio}</h5>
                            <div class=" d-flex flex-column align-items-center mt-3 row " >
                                <a id="link-carrito" class="btn-carrito btn btn-light btn-sm mt-2 col-8 w-100" href="#" role="button" ><img
                                        class="carrito" src="./img/index/pagina-principal/card/cart3.svg"
                                        alt=""></a>
                                <a class="btn-comprar  btn btn-primary btn-sm mt-2 col-8 w-100" href="#"
                                    role="button"  >Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </di>
                
                
                `
    
            }
          
        }
       
    }


}


cargarProducto();

