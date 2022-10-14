const arrayDeUsuarios = JSON.parse(localStorage.getItem("listaDeUsuarios")) || [];
const tablaUsuarios = document.querySelector(".tabla-a-bordear")

class Usuario {
    constructor(usuario, email, fechaRegistro, idUnico, usuarioOn){
        this.usuario = usuario,
        this.email = email,
        this.fechaRegistro = fechaRegistro,
        this.idUnico = idUnico,
        this.usuarioOn = usuarioOn
    }
}


localStorage.setItem("listaDeUsuarios", JSON.stringify(arrayDeUsuarios))

arrayDeUsuarios.forEach(element => {
    tablaUsuarios.innerHTML += `<tr>
    <td class="p-2 h6">${element.usuario}</td>
    <td class="p-2 h6">${element.email}</td>
    <td class="p-2 h6">${element.fechaRegistro}</td>
    <td class="p-2 agregar-hover-tacho"><a class="text-decoration-none text-black" href="index.html"><i class="fa-solid fa-trash fa-lg"></i></a></td>
</tr>`
});

const saludar = (para) => console.log(para)
