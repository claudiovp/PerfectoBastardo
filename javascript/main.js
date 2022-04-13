function contrasenna() {


  var contra1 = document.getElementById("contrasena").value;
  var contra2 = document.getElementById("peace").value;

  if (contra1 == "", contra2 == "") {
    document.getElementById("errorcontrasena").innerHTML = "debe escribir una contraseña";
  } else {

  }
  if (contra1 != contra2) {
    document.getElementById("errorcontrasena").innerHTML = "las contraseñas no son iguales";

  }


}


function email() {
  var email = document.getElementById("emaail").value;
  var a = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  if (email.lenght == 0) {
    document.getElementById("erroremail").innerHTML = "debe escribir un email";
    document.getElementById("email").style.color="#dc143c";
  } else {

  }
  if (!a.exec(email)) {
    document.getElementById("erroremail").innerHTML = "el email no esta bien escrito";
    document.getElementById("email").style.color="#dc143c";
  }

}

function nombre(){

}

function todos() {
  contrasenna();
  email();
}

