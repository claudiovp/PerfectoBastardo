
function contrasenna() {


  var contra1 = document.getElementById("contrasena").value;
  var contra2 = document.getElementById("peace").value;

  if (contra1 == "", contra2 == "") {
    document.getElementById("errorcontrasena").innerHTML = "debe escribir una contraseña";
    document.getElementById("contrasena").style.borderColor="#dc143c";
    document.getElementById("peace").style.borderColor="#dc143c";
  } else {

  }
  if (contra1 != contra2) {
    document.getElementById("errorcontrasena").innerHTML = "las contraseñas no son iguales";
    document.getElementById("contrasena").style.borderColor="#dc143c";
    document.getElementById("peace").style.borderColor="#dc143c";
  }


}


function email() {
  var email = document.getElementById("emaail").value;
  var a = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  if (email.length == 0) {
    document.getElementById("erroremail").innerHTML = "debe escribir un email";
    document.getElementById("emaail").style.borderColor="#dc143c";
  } else {

  }
  if (!a.exec(email)) {
    document.getElementById("erroremail").innerHTML = "el email no esta bien escrito";
    document.getElementById("emaail").style.borderColor="#dc143c";
  }

}

function nombrefr(){
  var nombre = document.getElementById("nombrefr").value;
  var apellido= document.getElementById("apellidofr").value;
  if(nombre.length == 0 && apellido.length==0){
    document.getElementById("errornombre").innerHTML= "debe escribir un nombre";
    document.getElementById("errorapellido").innerHTML="debe escribir al menos 1 apellido ";
    document.getElementById("nombrefr").style.borderColor="#dc143c";
    document.getElementById("apellidofr").style.borderColor="#dc143c";
  }
}

function telefono(){
  var telefono= document.getElementById("telefono").value;
  if(telefono.length==0){
    document.getElementById("errortelefono").innerHTML="debe escribir un telefono";
    document.getElementById("telefono").style.borderColor="#dc143c";
  }
}


//jquery
$(document).ready(function () {
  $("#is").click(function () {
      var nombreis = $("#nombreis").val();
      var nombrefr = $("nombrefr").val();
      if(nombreis==""){
        $("#errornombreis").html("escriba un nombre");
        $("#nombreis").css({'borderColor':'#dc143c'});
        
      }else if(nombreis!=nombrefr){
        $("#errornombreis").html("el nombre no es correcto");
        $("#nombreis").css({'borderColor':'#dc143c'});
      }
      
  });

  $("#is").click(function () {
    var contrais =$("#contra3").val();
    var contrafr =$("#peace").val();

    if(contrais==""){
      $("#errorcontrasenais").html("escriba una contraseña");
      $("#contra3").css({'borderColor':'#dc143c'});
    }else if(contrais!=contrafr){
        $("#errorcontrasenais").html("la contraseña no es coreccta");
        $("#contra3").css({'borderColor':'#dc143c'});
    }
  });

});

//
function todos() {
  contrasenna();
  email();
  nombrefr();
  telefono();
}

