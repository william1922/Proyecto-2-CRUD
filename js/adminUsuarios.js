
const arrayDeUsuarios = JSON.parse(localStorage.getItem("regUser")) || [];
const tablaUsuarios = document.querySelector(".tabla-a-bordear")
const totalUsuarios = document.querySelector("#cantidadUsuarios")

totalUsuarios.innerHTML = arrayDeUsuarios.length

const eliminarUsuario = (usuario) =>{
    const user = arrayDeUsuarios.find( element => {
        return element.usuario === usuario
    })
    arrayDeUsuarios.splice(arrayDeUsuarios.indexOf(user), 1)
    localStorage.setItem("regUser", JSON.stringify(arrayDeUsuarios))
    tablaUsuarios.innerHTML = '';
    imprimirUsuarios()
}

const imprimirUsuarios = () => {
    arrayDeUsuarios.forEach(element => {
        if (element.admin !== "true")
        tablaUsuarios.innerHTML += `<tr>
        <td class="p-2 h6">${element.usuario}</td>
        <td class="p-2 h6">${element.email}</td>
        <td class="p-2 h6">${element.fecha}</td>
        <td class="p-2 agregar-hover-tacho" onclick="eliminarUsuario('${element.usuario}')" ><a class="text-decoration-none text-black"><i class="fa-solid fa-trash fa-lg"></i></a></td>
    </tr>`
    })
    };

imprimirUsuarios()

