var operacion="";

function mostrarOperacion(num){
  operacion= document.getElementById("mostrar").value += num;
}

document.addEventListener("keypress", numeroTecla)
function numeroTecla(evento){
  console.log(evento);
  var tecla= event.key;
  if (tecla === "Enter"){
    resultado();
  }else if(tecla === "Backspace"){
    borrarUltimo();
  } else {
    mostrarOperacion(tecla);
  }
}

function resultado(){
  var resul= eval(operacion);
  document.getElementById("mostrar").value = resul;
}

function borrarUltimo(){
  var x=operacion.length-1;
  operacion= operacion.substr(0,x);
  document.getElementById("mostrar").value = operacion;
}

function borrarTodo(){
  operacion=0;
  document.getElementById("mostrar").value = "";
}

// function operaciones(){
//   operaciones.split("");
//
// }
