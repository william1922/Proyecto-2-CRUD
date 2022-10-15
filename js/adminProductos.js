//paso 1 - crear la clase Producto
class Producto{
    constructor(codigo,nombre,marca,cantidad,precio,categoria,url,descripcion){
        this.codigo=codigo
        this.nombre=nombre
        this.marca=marca
        this.cantidad=cantidad
        this.precio=precio
        this.categoria=categoria
        this.url=url
        this.descripcion=descripcion
    }
}

//paso 2 - verificamos si existe la clave en localStorage, caso contrario se inicializa con un array vacio
let productos = JSON.parse(localStorage.getItem('productos')) || []

//paso 3 - declaramos las variables
const formulario = document.getElementById('formulario')
const tableBody = document.getElementById('tableBody')

//paso 4 - creamos 3 productos para tener algo (no hay que hacerlo asi, pero solo es para probar la aplicacion, luego lo eliminamos)
/*
let producto1 = new Producto(1111,'PC gamer','HP',300,200000,'computacion','https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Una computadora gamer')

let producto2 = new Producto(2222,'Teclado 2022','Sony',150,10000,'computacion','https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Un teclado de ultima generacion')

let producto3 = new Producto(3333,'Parrilla','Coleman',100,60000,'aireLibre','https://images.pexels.com/photos/1857732/pexels-photo-1857732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Una parrilla para preparar buenas comidas')
*/

//paso 5 - llenamos el array con los 3 productos (EJECUTARLO UNA VEZ Y LUEGO COMENTARLO PORQUE SINO SE DUPLICA EN EL LOCALSTORAGE)
// productos.push(producto1,producto2,producto3)

//paso 6 - guardar el array en el localStorage (EJECUTARLO UNA VEZ Y LUEGO COMENTARLO PORQUE SINO SE DUPLICA EN EL LOCALSTORAGE)


//paso 8 - creamos una funcion para agregar los productos que se activa cuando se da CLIC en el boton SUBMIT
const agregarProducto = (e) => {
    e.preventDefault()
    // let inputCodigo = productos[productos.length - 1].codigo + 1 // para evitar problemas no usamos esto, sino lo siguiente, pero esto toma la ULTIMA posicion del array y le suma 1
    let codigo = new Date().getTime() // esta es otra alternativa de obtener el codigo
    let nombre = document.getElementById('inputNombre').value
    let marca = document.getElementById('inputMarca').value
    let cantidad = document.getElementById('inputCantidad').value
    let precio = document.getElementById('inputPrecio').value
    let categoria = document.getElementById('selectCategoria').value
    let url = document.getElementById('inputUrl').value
    let descripcion = document.getElementById('inputDescripcion').value
    // colocamos el nuevo objeto en el array
    productos.push(new Producto(codigo,nombre,marca,cantidad,precio,categoria,url,descripcion))
    // agregamos el array al localStorage para tenerlo actualizado
    localStorage.setItem('productos',JSON.stringify(productos))
    //reseteamos el formulario
    formulario.reset()
    //hacemos focus al input del nombre
    document.getElementById('inputNombre').focus()
    //paso 11 - para que el producto aparezca en la tabla, se llama a la funcion llenarTabla (actualizamos)
    llenarTabla()
}

//paso 9 - creamos una funcion para cargar/visualizar/actualizar la tabla
const llenarTabla = () => {
    //paso 12 - hay que limpiar el tableBody porque sino se duplican los datos
    tableBody.innerHTML = ''
    // recorrer el array de productos
    productos.map((producto) =>{
        let tr = document.createElement('TR')
        let fila = `<td>${producto.codigo}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.categoria}</td>
        <td>${producto.marca}</td>
        <td>${producto.cantidad}</td>
        <td class="d-flex justify-content-around"><button href="#formulario" class="btn btn-warning btn-sm" onclick="editarProducto('${producto.codigo}')"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn btn-danger btn-sm" onclick="eliminarProducto('${producto.codigo}')"><i class="fa-solid fa-trash"></i></button>
        </td>`

        tr.innerHTML = fila
        tableBody.appendChild(tr)

        //paso 14 - en el template de arriba le agregamos el evento "onlick" al boton eliminar
        //paso 16 - en el template de arriba le agregamos el evento "onlick" al boton editar
    })
}

//paso 13 - creamos una funcion para eliminar un producto
const eliminarProducto = (codigo) => {
    console.log(codigo)
    // buscamos el producto que queremos eliminar
    const prod = productos.find(producto => producto.codigo === codigo)
    const arrayFiltrado = productos.filter(producto => producto.codigo !== codigo);
    console.log(arrayFiltrado)
    console.log(prod)
    let confirmar = confirm(`Estas seguro de que deseas eliminar el producto "${prod.nombre}"?`)
    if(confirmar){
        // eliminamos el producto del array
        productos = arrayFiltrado
        // agregamos el array al localStorage para tenerlo actualizado
        localStorage.setItem('productos',JSON.stringify(productos))
        alert('El producto se ha eliminado')
        // actualizamos la tabla
        llenarTabla()
    }
}

//paso 15 - creamos una funcion para editar un producto
const editarProducto = (codigo) => {
    console.log(codigo)
    // buscamos el producto que queremos editar
    const prod = productos.find(producto => producto.codigo === codigo);
    console.log(prod)
    document.getElementById('inputNombre').value = prod.nombre
    document.getElementById('inputMarca').value = prod.marca
    document.getElementById('inputCantidad').value = prod.cantidad
    document.getElementById('inputPrecio').value = prod.precio
    document.getElementById('selectCategoria').value = prod.categoria
    document.getElementById('inputUrl').value = prod.url
    document.getElementById('inputDescripcion').value = prod.descripcion
    // borrar el producto del array
    const arrayFiltrado = productos.filter(producto => producto.codigo !== codigo)
    productos = arrayFiltrado;
    // agregamos el array al localStorage para tenerlo actualizado
   
    // location.reload();
}

//paso 7 - creamos el evento del formulario
formulario.addEventListener('submit', agregarProducto)

//paso 10 - llamamos a la funcion llenarTabla al cargar la pagina
llenarTabla()