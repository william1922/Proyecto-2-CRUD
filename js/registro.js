//clase
class User {
  constructor(usuario, contraseña, email, fecha) {
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.email = email;
    this.userOn = "";
    this.carrito = [];
    this.fecha = fecha;
    this.admin = ""
  }
}

//variables
let registrarUsuario = document.getElementById("registrar_usuario");
let registrarContraseña = document.getElementById("registrar_contraseña");
let confirmarContraseña = document.getElementById("confirmar_contraseña");
let registrarEmail = document.getElementById("registrar_email");
let formRegistro = document.getElementById('form_registro');
let regUser = JSON.parse(localStorage.getItem("regUser")) || [];
localStorage.setItem("regUser", JSON.stringify(regUser))

//agregar registro
registrarUsuario.addEventListener("bluer", () => {
  validarCampos(registrarUsuario)
});

registrarContraseña.addEventListener("bluer", () => {
  validarCampos(registrarContraseña)
});

confirmarContraseña.addEventListener("bluer", () => {
  validarCampos(confirmarContraseña)
});

registrarEmail.addEventListener("bluer", () => {
  validarCampos(registrarEmail)
});

formRegistro.addEventListener("submit", guardarUsuario);

//validaciones
function validarCampos(input) {
  if (input.value.trim().length > 0) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

function validarEmail(input) {
  let regEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  if (regEmail.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

function validarContraseña(input) {
  let registrar_contraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  if (registrar_contraseña.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

function confirmarSegundaContraseña(input) {
  if (input.value === registrarContraseña.value) {
    input.className = "form-control is-valid";
    return true
  } else {
    input.className = "form-control is-invalid";
    return false
  }
}

// Se confirm si un usuario existe en el array
const confrimarUsuario = (usuario) => {
  const existeUsuario = regUser.some(element => {
    return element.usuario === usuario.value
  })
  return existeUsuario
}

function validacionTotal(registrarUsuario, registrarContraseña, confirmarContraseña, registrarEmail) {
  if (
    validarContraseña(registrarContraseña) &&
    confirmarSegundaContraseña(confirmarContraseña) &&
    validarEmail(registrarEmail) &&
    !confrimarUsuario(registrarUsuario)
  ) {
    return true;
  } else {
    return false;
  }
}

function fecha() {
  let fecha = [];
  for (var i = 4; i < 24; i++) {
    fecha += (Date()[i])
  }
  return fecha
}

//funciones
function guardarUsuario(e) {
  e.preventDefault();
  if (validacionTotal(registrarUsuario, registrarContraseña, confirmarContraseña, registrarEmail)) {
    crearUsuario();
    window.setTimeout(function () {
      window.location.replace("login.html");
    }, 1500);
  } else {
    alert("Debe completar todos los campos");
  }
}

function crearUsuario() {
  let newUser = new User(
    registrarUsuario.value,
    registrarContraseña.value,
    registrarEmail.value,
    fecha()
  );
  regUser.push(newUser);
  limpiarFormRegistro();
  alert("Su usuario fue correctamente cargado");
}

function limpiarFormRegistro() {
  formRegistro.reset();
  registrarUsuario.className = "form-control";
  registrarContraseña.className = "form-control";
  confirmarContraseña.className = "form-control";
  registrarEmail.className = "form-control";
  guardarUsuarioLS();
}

function guardarUsuarioLS() {
  localStorage.setItem("regUser", JSON.stringify(regUser));
}