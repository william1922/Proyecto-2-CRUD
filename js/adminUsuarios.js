const arrayDeUsuarios = JSON.parse(localStorage.getItem("regUser")) || [];
const tablaUsuarios = document.querySelector(".tabla-a-bordear")
const totalUsuarios = document.querySelector("#cantidadUsuarios")

totalUsuarios.innerHTML = arrayDeUsuarios.length - 1

const eliminarUsuario = (usuario) => {
  const user = arrayDeUsuarios.find(element => {
    return element.usuario === usuario
  })
  Swal.fire({
    title: 'Desea eliminar usuario?',
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
      arrayDeUsuarios.splice(arrayDeUsuarios.indexOf(user), 1)
      localStorage.setItem("regUser", JSON.stringify(arrayDeUsuarios))
      tablaUsuarios.innerHTML = '';
      imprimirUsuarios()
    }
  })
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
