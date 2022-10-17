let usuarioAdmin = { name: "admin", password: "admin" };
let regUser = JSON.parse(localStorage.getItem("regUser"));
let inputUser = document.getElementById("inputUser");
let inputPass = document.getElementById("inputPass");
let formLogin = document.getElementById("formlogin");
let sesionInit = false;

//asociando eventos
inputUser.addEventListener("blur", () => {
  validarCampos(inputUser);
});
inputPass.addEventListener("blur", () => {
  validatePass(inputPass);
});
formLogin.addEventListener("submit", login);

//funciones

// Retorna true si un usuario existe en el array de usuarios y falso de no ser asi
const confirmarUsuarioRegistrado = (usuario) => {
  const confirmar = regUser.some(element => {
    return element.usuario === usuario.value
  })
  return confirmar
}

// Retorna el objeto mediante la comparacion de un atributo
const obtenerUsuarioLogin = (usuario) => {
  const contenedorUsuario = regUser.find(element => {
    return element.usuario === usuario.value;
  })
  return contenedorUsuario
}

// Obtengo los datos de los inputs para logear
function login(e) {
  e.preventDefault();
  // Se confirma si el usuario esta registrado
  if (confirmarUsuarioRegistrado(inputUser)) {
    // Guardo el objeto en una variable
    usuario = obtenerUsuarioLogin(inputUser)
    // Comparo que que la contraseña ingresada sea igual al atributo contraseña del objeto
    if (usuario.contraseña === inputPass.value) {
      // Cambio el atributo a "true" para posteriores usos en otras funsiones
      usuario.userOn = "true"
      // Remplazo el objeto obtenido con cambios en su atributo userOn con el antiguo objeto que esta sin modificar
      regUser.splice(regUser.indexOf(usuario), 1, usuario)
      // Se envia el nuevo array con el usuario o admin logeado
      localStorage.setItem("regUser", JSON.stringify(regUser))
      let timerInterval
      Swal.fire({
        title: 'Cargando Datos.',
        html: 'Quedan <b></b>.',
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          window.location.replace("index.html");
        }
      })
      // En caso de que no sean iguales las contraseñas se le informa
    } else {
      Swal.fire({
        icon: 'error',
        title: '',
        text: 'Contraseña incorrecta',
        footer: '<a class="text-decoration-none" href="/404.html">Recuperar Contraseña</a>'
      })
    }
    // De no encontrarse en el array de usuarios se le informara que no esta registrado
  } else {
    Swal.fire({
      icon: 'error',
      title: '',
      text: 'Usuario no registrado o incorrecto',
      footer: '<a class="text-decoration-none" href="/registro.html">Registrarse</a>'
    })
  }
}

//validaciones

function validarCampos(input) {
  if (input.value.trim().length > 0) {
    input.className = "form-control is-valid";
    return true;
  } else {
    {
      input.className = "form-control is-invalid";
      return false;
    }
  }
}

function validatePass(input) {
  let regPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  if (regPass.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else if (input.value.trim().length > 0 && input.value.trim().length < 9) {
    input.className = "form-control is-valid";
    return true;
  } else {
    inputPass.className = "form-control is-invalid";
  }
}
