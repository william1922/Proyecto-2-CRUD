let usuarioAdmin = { name: "admin", password: "admin" };
let regUser = JSON.parse(localStorage.getItem("regUser"));
let inputUser = document.getElementById("inputUser");
let inputPass = document.getElementById("inputPass");
let formLogin = document.getElementById("formLogin");
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

function login(e) {
  e.preventDefault();
  if (gralValidate(inputUser, inputPass)) {
    if (inputUser.value === superUser.name) {
      if (inputPass.value === superUser.password) {
        sesionInit = true;
        // sessionStorage.setItem("stateSesion", JSON.stringify(sesionInit));
        localStorage.setItem("user", JSON.stringify(superUser));
        // window.location.replace("index.html");
        console.log("usuario admin");  
        alert("Su usuario es administrador");      
        
      } else {
        alert("Contraseña Incorrecta. Ingrese nuevamente");
      }
    } else if (inputUser.value === findUser(inputUser.value).usuario) {
      if (inputPass.value === findUser(inputUser.value).contraseña) {
        let newUser = findUser(inputUser.value);
        sesionInit = true;
        //sessionStorage.setItem("stateSesion", JSON.stringify(sesionInit));
        localStorage.setItem("stateSesion",JSON.stringify(sesionInit))
        localStorage.setItem("user", JSON.stringify(newUser));
        window.location.replace("index.html");
      } else {
        alert("Contraseña Incorrecta. Ingrese nuevamente");
      }
    } else {
      alert("Usuario Incorrecto. Ingrese nuevamente");
    }
  } else {
    alert("Debe completar todos los campos");
  }
}

function findUser(usuario) {
  let newUser = regUser.find((user) => {
    return user.usuario === usuario;
  });
  if (newUser !== undefined) {
    return newUser;
  } else {
    return "";
  }
}

//validaciones

    function validarCampos(input) {
        if (input.value.trim().length > 0) {
          input.className = "form-control is-valid";
          return true;
        } else {        {
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

function gralValidate(inputUser, inputPass) {
  if (validarCampos(inputUser) && validatePass(inputPass)) {
    return true;
  } else {
    return false;
  }
}
