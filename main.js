

let nombreDeUsuario = id("nombreDeUsuario"),
  email = id("email"),
  formulario = id("formulario"),
  
  msjError = classes("error");

  form.addEventListener("enviar", (e) => {
    e.preventDefault();

    motor(nombreDeUsuario, 0, "El nombre de usuario no puede estar en blanco");
    motor(correoElectronico, 1, "El correo electrónico no puede estar en blanco");
    motor(contrasena, 2, "La contraseña no puede estar en blanco");
  });

  let motor = (id, mensaje) => {
    if (id.value.trim() === "") {
        msjError[serial].innerHTML = mensaje;
        id.style.border = "2px solid red";
    } 
    
    else {
        msjError[serial].innerHTML = "";
        id.style.border = "2px solid green";

    }
  }