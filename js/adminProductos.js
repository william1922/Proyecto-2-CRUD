//paso 1 - crear la clase Producto
class Producto {
    constructor(codigo, nombre, marca, cantidad, precio, categoria, url, descripcion) {
        this.codigo = codigo
        this.nombre = nombre
        this.marca = marca
        this.cantidad = cantidad
        this.precio = precio
        this.categoria = categoria
        this.url = url
        this.descripcion = descripcion
    }
}

//paso 2 - verificamos si existe la clave en localStorage, caso contrario se inicializa con un array vacio
let productos = JSON.parse(localStorage.getItem('productos')) || []

//paso 3 - declaramos las variables
const formulario = document.getElementById('formulario')
const tableBody = document.getElementById('tableBody')
const inputcodigo = document.querySelector('#inputCodigo')
inputcodigo.value = new Date().getTime()

// Retorna el objeto que consida con el parametro enviado
const extraerProducto = (codigo) => {
    let producto = productos.find(element => {
        return element.codigo === codigo.toString()
    })
    return producto
}

// Retorna un booleano si algun objeto tiene el mismo codigo
const comprobarProducto = (codigo) => {
    let exist = productos.some(element => {
        return element.codigo === codigo
    })
    return exist
}

//paso 8 - creamos una funcion para agregar los productos que se activa cuando se da CLIC en el boton SUBMIT
const agregarProducto = (e) => {
    e.preventDefault()

    let nombre = document.getElementById('inputNombre').value
    let marca = document.getElementById('inputMarca').value
    let cantidad = document.getElementById('inputCantidad').value
    let precio = document.getElementById('inputPrecio').value
    let categoria = document.getElementById('selectCategoria').value
    let url = document.getElementById('inputUrl').value
    let descripcion = document.getElementById('inputDescripcion').value

    //validaciones
    const regNumber = /^(\d*\.)?\d+$/ // expresion para validar numeros positivos con/sin decimales
    const regex = /^(ftp|http|https):\/\/[^ "]+$/; // expresion regular para validar una URL
    const validarURL = regex.test(url);
    const validarCantidad = regNumber.test(cantidad)
    const validarPrecio = regNumber.test(precio)
    if (inputcodigo.value === '' || nombre === '' || marca === '' || cantidad === '' || precio === '' || categoria === 'Elegir una categoria...' || url === '' || descripcion === '') {
        return Swal.fire(
            'Error!',
            'Todos los campos deben estar completos',
            'error'
        )
    } else if (!validarURL) {
        return Swal.fire(
            'Error!',
            'La URL tiene que ser valida',
            'error'
        )
    } else if (!validarCantidad) {
        return Swal.fire(
            'Error!',
            'Solo se aceptan dígitos positivos (Cantidad)',
            'error'
        )
    } else if (!validarPrecio) {
        return Swal.fire(
            'Error!',
            'Solo se aceptan dígitos positivos (Precio)',
            'error'
        )
    }
    if (comprobarProducto(inputcodigo.value)) {
        let productoAnterior, guardarCodigo
        productoAnterior = extraerProducto(inputcodigo.value)
        guardarCodigo = productoAnterior.codigo
        Swal.fire({
            title: 'Desea guardar los cambios?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                let objetoProducto = new Producto(guardarCodigo, nombre, marca, cantidad, precio, categoria, url, descripcion)
                productos.splice(productos.indexOf(productoAnterior), 1, objetoProducto)
                localStorage.setItem('productos', JSON.stringify(productos))
                window.location.reload()
            } else if (result.isDenied) {
                Swal.fire('Cambios cancelados', '', 'info')
            }
        })

    } else {
        let objetoProducto = new Producto(inputcodigo.value, nombre, marca, cantidad, precio, categoria, url, descripcion)
        productos.push(objetoProducto)
        // agregamos el array al localStorage para tenerlo actualizado
        localStorage.setItem('productos', JSON.stringify(productos))
        window.location.reload()
    }
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
    productos.map((producto) => {
        let tr = document.createElement('TR')
        let fila = `<td>${producto.codigo}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.categoria}</td>
        <td>${producto.marca}</td>
        <td>${producto.cantidad}</td>
        <td class="d-flex justify-content-around"><a href="#formulario"><button class="btn btn-warning btn-sm" onclick="editarProducto('${producto.codigo}')"><i class="fa-solid fa-pen-to-square"></i></button></a>
        <button class="btn btn-danger btn-sm" onclick="eliminarProducto('${producto.codigo}')"><i class="fa-solid fa-trash"></i></button>
        </td>`
        tr.innerHTML = fila
        tableBody.appendChild(tr)
    })
}

//paso 13 - creamos una funcion para eliminar un producto
const eliminarProducto = (codigo) => {
    // buscamos el producto que queremos eliminar
    const arrayFiltrado = productos.filter(producto => producto.codigo !== codigo);
    Swal.fire({
        title: 'Desea eliminar este producto?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado',
                '',
                'success'
            )
            productos = arrayFiltrado
            // agregamos el array al localStorage para tenerlo actualizado
            localStorage.setItem('productos', JSON.stringify(productos))
            // actualizamos la tabla
            llenarTabla()
        }
    })
}

//paso 15 - creamos una funcion para editar un producto
const editarProducto = (codigo) => {
    // buscamos el producto que queremos editar
    const prod = extraerProducto(codigo)
    inputcodigo.value = prod.codigo
    document.getElementById('inputNombre').value = prod.nombre
    document.getElementById('inputMarca').value = prod.marca
    document.getElementById('inputCantidad').value = prod.cantidad
    document.getElementById('inputPrecio').value = prod.precio
    document.getElementById('selectCategoria').value = prod.categoria
    document.getElementById('inputUrl').value = prod.url
    document.getElementById('inputDescripcion').value = prod.descripcion
}

function activarEstilosDeValidacionFormulario() {

    // Obtenemos el formulario 
    let forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
}
activarEstilosDeValidacionFormulario()

//paso 7 - creamos el evento del formulario
formulario.addEventListener('submit', agregarProducto)
//paso 10 - llamamos a la funcion llenarTabla al cargar la pagina
llenarTabla()