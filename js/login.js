let usuarioAdmin = { name: "admin", password: "admin" };
let regUser = JSON.parse(localStorage.getItem("regUser"));
let inputUser = document.getElementById("inputUser");
let inputPass = document.getElementById("inputPass");
let formLogin = document.getElementById("formLogin");
let sesionInit = false;
let ls = window.localStorage
//asociando eventos
// inputUser.addEventListener("blur", () => {
//     validarCampos(inputUser);
// });
// inputPass.addEventListener("blur", () => {
//   validatePass(inputPass);
// });

inputUser.addEventListener("blur", () => {
  validarCampos(user);
});
inputPass.addEventListener("blur", () => {
validatePass(pass);
});

//formLogin.addEventListener("submit", login);

// //funciones

// function login(e) {
//   e.preventDefault();
//   if (gralValidate(user, pass)) {
//     if (user.value === usuarioAdmin.name) {
//       if (pass.value === usuarioAdmin.password) {
//         sesionInit = true;
//         // sessionStorage.setItem("stateSesion", JSON.stringify(sesionInit));
//         //localStorage.setItem("stateSesion",JSON.stringify(sesionInit))
//         //localStorage.setItem("user", JSON.stringify(superUser));
//         // window.location.replace("index.html");
//         console.log("usuario admin");  
//         alert("Su usuario es administrador");      
        
//       } else {
//         alert("Contraseña Incorrecta. Ingrese nuevamente");
//       }
//     } else if (user.value === findUser(inputUser.value).usuario) {
//       if (pass.value === findUser(inputUser.value).contraseña) {
//         let newUser = findUser(inputUser.value);
//         sesionInit = true;
//         //sessionStorage.setItem("stateSesion", JSON.stringify(sesionInit));
//         localStorage.setItem("stateSesion",JSON.stringify(sesionInit))
//         localStorage.setItem("user", JSON.stringify(newUser));
//         //window.location.replace("index.html");
//       } else {
//         alert("Contraseña Incorrecta. Ingrese nuevamente");
//       }
//     } else {
//       alert("Usuario Incorrecto. Ingrese nuevamente");
//     }
//   } else {
//     alert("Debe completar todos los campos");
//   }
// }

// function findUser(usuario) {
//   let newUser = regUser.find((user) => {
//     return user.usuario === usuario;
//   });
//   if (newUser !== undefined) {
//     return newUser;
//   } else {
//     return "";
//   }
// }



function login(e) {
  e.preventDefault();
  if (gralValidate(user, pass)) {
    if (user.value === input_User.value) {
      if (pass.value === input_Pass.value) {
        sesionInit = true;
        // sessionStorage.setItem("stateSesion", JSON.stringify(sesionInit));
        //localStorage.setItem("stateSesion",JSON.stringify(sesionInit))
        //localStorage.setItem("user", JSON.stringify(superUser));
        // window.location.replace("index.html");
        console.log("usuario admin");  
        alert("Su usuario es administrador");      
        
      } else {
        alert("Contraseña Incorrecta. Ingrese nuevamente");
      }
    } else if (user.value === regUser.usuario) {
      if (pass.value === regUser.contraseña) {
        alert("Su usuario esta en ls");      
        // let newUser = findUser(inputUser.value);
        // sesionInit = true;
        // //sessionStorage.setItem("stateSesion", JSON.stringify(sesionInit));
        // localStorage.setItem("stateSesion",JSON.stringify(sesionInit))
        // localStorage.setItem("user", JSON.stringify(newUser));
        // //window.location.replace("index.html");
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


// //validaciones

    function validarCampos(user) {
        if (user.value.trim().length > 0) {
          user.className = "form-control is-valid";
          return true;
        } else {        {
           user.className = "form-control is-invalid";
            return false;
          }
        }
    }

function validatePass(pass) {
  let regPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  if (regPass.test(pass.value)) {
    input.className = "form-control is-valid";
    return true;
  } else if (pass.value.trim().length > 0 && pass.value.trim().length < 9) {
    pass.className = "form-control is-valid";
    return true;
  } else {
    pass.className = "form-control is-invalid";
  }
}

function gralValidate(user, pass) {
  if (validarCampos(user) && validatePass(pass)) {
    return true;
  } else {
    return false;
  }
}


//-------------------------------------------------------

inputUser.addEventListener("focusout",function(){
ls.setItem("user",inputUser.value);

})

inputPass.addEventListener("focusout",function(){
  ls.setItem("pass",inputPass.value);
  
  })

function recuperarValores(){
  inputUser.value = ls.getItem("user");
  inputPass.value = ls.getItem("pass");
}
document.addEventListener("DOMContentLoaded",recuperarValores)
