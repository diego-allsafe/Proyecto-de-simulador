let btn = document.getElementById("guardar"),
  checkbox = document.getElementById("check");
const email = document.getElementById("email");
const password = document.getElementById("password"),
  p = document.querySelector("p");
btn.innerText = "Registrar";

function guardar(valor) {
    //Aca contruimos un pequeño objeto literal 
  let user = { usuario: email.value, pass: password.value };
    //Aca estamos validando que los campos no esten vacios
  if (user.usuario == "" || user.pass == "") {
    p.innerText = "Los campos no pueden estar vacios";
    return;
  } else {
      //Sino, aca estoy haciendo otro tipo de validacion. 
    if (valor === "sessionStorage") {
        //si es igual a sesionStorage se guarda ahi
      sessionStorage.setItem("inicioDeSesion", JSON.stringify(user));
    }
    if (valor === "localStorage") {
        //sino, si es igual a localStorage se guarda ahi
      localStorage.setItem("inicioDeSesion", JSON.stringify(user));
    }
  }
  return user;
}

function recuperarDatos(datos) {
  if (datos) {
    email.value = datos.usuario;
    password.value = datos.pass;
    btn.innerText = "Ingresar";
  }
}

recuperarDatos(JSON.parse(localStorage.getItem("inicioDeSesion")));

//Aca estamos ejecutando el inicio de sesion

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkbox.checked) {
      // si esta chequeado, guardo los datos en el localStorage
    guardar("localStorage");
  } else {
      //si no lo hago, se guarda en el sesionStorage
    guardar("sessionStorage");
  }
});
