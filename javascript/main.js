function contrasenna() {


  var contra1 = document.getElementById("contrasena").value;
  var contra2 = document.getElementById("peace").value;

  if (contra1 == "", contra2 == "") {
<<<<<<< HEAD
    document.getElementById("errorcontrasena").innerHTML = "debe escribir una contraseña";
    document.getElementById("contrasena").style.borderColor = "#dc143c";
    document.getElementById("peace").style.borderColor = "#dc143c";
=======
    document.getElementById("errorcontrasena").innerHTML = "Debe escribir una contraseña";
    document.getElementById("contrasena").style.borderColor="#dc143c";
    document.getElementById("peace").style.borderColor="#dc143c";
>>>>>>> 919daeefa75bfb7be772b2c76df0ef630fd369a1
  } else {

  }
  if (contra1 != contra2) {
<<<<<<< HEAD
    document.getElementById("errorcontrasena").innerHTML = "las contraseñas no son iguales";
    document.getElementById("contrasena").style.borderColor = "#dc143c";
    document.getElementById("peace").style.borderColor = "#dc143c";
=======
    document.getElementById("errorcontrasena").innerHTML = "Las contraseñas no son iguales";
    document.getElementById("contrasena").style.borderColor="#dc143c";
    document.getElementById("peace").style.borderColor="#dc143c";
>>>>>>> 919daeefa75bfb7be772b2c76df0ef630fd369a1
  }


}


function email() {
  var email = document.getElementById("emaail").value;
  var a = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  if (email.length == 0) {
<<<<<<< HEAD
    document.getElementById("erroremail").innerHTML = "debe escribir un email";
    document.getElementById("emaail").style.borderColor = "#dc143c";
=======
    document.getElementById("erroremail").innerHTML = "Debe escribir un correo";
    document.getElementById("emaail").style.borderColor="#dc143c";
>>>>>>> 919daeefa75bfb7be772b2c76df0ef630fd369a1
  } else {

  }
  if (!a.exec(email)) {
<<<<<<< HEAD
    document.getElementById("erroremail").innerHTML = "el email no esta bien escrito";
    document.getElementById("emaail").style.borderColor = "#dc143c";
=======
    document.getElementById("erroremail").innerHTML = "El correo no es válido";
    document.getElementById("emaail").style.borderColor="#dc143c";
>>>>>>> 919daeefa75bfb7be772b2c76df0ef630fd369a1
  }

}

function nombrefr() {
  var nombre = document.getElementById("nombrefr").value;
<<<<<<< HEAD
  var apellido = document.getElementById("apellidofr").value;
  if (nombre.length == 0 && apellido.length == 0) {
    document.getElementById("errornombre").innerHTML = "debe escribir un nombre";
    document.getElementById("errorapellido").innerHTML = "debe escribir al menos 1 apellido ";
    document.getElementById("nombrefr").style.borderColor = "#dc143c";
    document.getElementById("apellidofr").style.borderColor = "#dc143c";
  }
}

function telefono() {
  var telefono = document.getElementById("telefono").value;
  if (telefono.length == 0) {
    document.getElementById("errortelefono").innerHTML = "debe escribir un telefono";
    document.getElementById("telefono").style.borderColor = "#dc143c";
=======
  var apellido= document.getElementById("apellidofr").value;
  if(nombre.length == 0 && apellido.length==0){
    document.getElementById("errornombre").innerHTML= "Debe escribir un nombre";
    document.getElementById("errorapellido").innerHTML="Debe escribir al menos un apellido ";
    document.getElementById("nombrefr").style.borderColor="#dc143c";
    document.getElementById("apellidofr").style.borderColor="#dc143c";
  }
}

function telefono(){
  var telefono= document.getElementById("telefono").value;
  if(telefono.length==0){
    document.getElementById("errortelefono").innerHTML="Debe escribir un teléfono";
    document.getElementById("telefono").style.borderColor="#dc143c";
>>>>>>> 919daeefa75bfb7be772b2c76df0ef630fd369a1
  }
}

function contacto() {
  var nombrec = document.getElementById("nombrec").value;
  var emailc = document.getElementById("emailc").value;
  var mensajec = document.getElementById("mensajec").value;
  var a = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

<<<<<<< HEAD
  if (nombrec.length == 0) {
    document.getElementById("errornomc").innerHTML = "debe escribir un nombre";
  }

  if (emailc.length == 0) {
    document.getElementById("erroremc").innerHTML = "debe escribir un correo";
  } else {

  }
  if (!a.exec(emailc)) {
    document.getElementById("erroremc").innerHTML = "el email no esta bien escrito";
  }

  if (mensajec.length == 0) {
    document.getElementById("errormensc").innerHTML = "debe escribir un mensaje";
=======
  if(nombrec.length==0){
    document.getElementById("errornomc").innerHTML="Debe escribir un nombre";
  }

  if (emailc.length==0){
    document.getElementById("erroremc").innerHTML="Debe escribir un correo";
  }else{

  }if (!a.exec(emailc)){
    document.getElementById("erroremc").innerHTML = "El correo no es válido";
  }

  if(mensajec.length==0){
    document.getElementById("errormensc").innerHTML="Debe escribir un mensaje";
>>>>>>> 919daeefa75bfb7be772b2c76df0ef630fd369a1
  }

}
fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
.then(response => response.json())
.then(json => {
  comentarios(json.results);
});
 function comentarios(){
  document.getElementById("intento").innerHTML
 }


//jquery
$(document).ready(function () {
  $("#is").click(function () {
<<<<<<< HEAD
    var nombreis = $("#nombreis").val();
    var nombrefr = $("nombrefr").val();
    if (nombreis == "") {
      $("#errornombreis").html("escriba un nombre");
      $("#nombreis").css({
        'borderColor': '#dc143c'
      });

    } else if (nombreis != nombrefr) {
      $("#errornombreis").html("el nombre no es correcto");
      $("#nombreis").css({
        'borderColor': '#dc143c'
      });
    }

=======
      var nombreis = $("#nombreis").val();
      var nombrefr = $("nombrefr").val();
      if(nombreis==""){
        $("#errornombreis").html("Escriba un nombre");
        $("#nombreis").css({'borderColor':'#dc143c'});
        
      }else if(nombreis!=nombrefr){
        $("#errornombreis").html("El nombre no es correcto");
        $("#nombreis").css({'borderColor':'#dc143c'});
      }
      
>>>>>>> 919daeefa75bfb7be772b2c76df0ef630fd369a1
  });

  $("#is").click(function () {
    var contrais = $("#contra3").val();
    var contrafr = $("#peace").val();

<<<<<<< HEAD
    if (contrais == "") {
      $("#errorcontrasenais").html("escriba una contraseña");
      $("#contra3").css({
        'borderColor': '#dc143c'
      });
    } else if (contrais != contrafr) {
      $("#errorcontrasenais").html("la contraseña no es coreccta");
      $("#contra3").css({
        'borderColor': '#dc143c'
      });
=======
    if(contrais==""){
      $("#errorcontrasenais").html("Escriba una contraseña");
      $("#contra3").css({'borderColor':'#dc143c'});
    }else if(contrais!=contrafr){
        $("#errorcontrasenais").html("La contraseña no es coreccta");
        $("#contra3").css({'borderColor':'#dc143c'});
>>>>>>> 919daeefa75bfb7be772b2c76df0ef630fd369a1
    }
  });

  $(function(){
    $.getJSON("https://jsonplaceholder.typicode.com/posts/1/comments",function(data){
    
      var data= data;
      $.each(data,function(i,item){
        $("#comentarios").append(
            "<tr><td>" + item.id + "</td> <td>" + item.name+"</td> <td>" + item.email +"</td> <td>"+item.body+ "</td></tr>"
        );
    });
    

    });
  });
  

});

//
function todos() {
  contrasenna();
  email();
  nombrefr();
  telefono();
}