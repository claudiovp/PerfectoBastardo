function contrasenna() {


  var contra1 = document.getElementById("contrasena").value;
  var contra2 = document.getElementById("peace").value;

  if(contra1=="",contra2==""){
      document.getElementById("errorcontrasena").innerHTML="debe escribir una contraseña";
  }    else {
    
    }if (contra1 != contra2) {
    document.getElementById("errorcontrasena").innerHTML = "las contraseñas no son iguales";

  }
}

function email(){
  var email = Document.getElementById("email").value;

  if(email==""){
    document.getElementById("erroremail").innerHTML= "debe escribir un email";
  }else{

  }if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
    document.getElementById("erroremail").innerHTML= "el email no esta bien escrito";
  }
  
}