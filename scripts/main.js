let miImage=document.querySelector("img");
miImage.onclick = function(){
let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/HuntingTheMjolnirLvl1.png"){
    miImage.setAttribute("src","images/Nivel2HuntingTheMjolnir.png");
  }else{
    miImage.setAttribute("src","images/HuntingTheMjolnirLvl1.png");
  }

}


let miBoton = document.querySelector("button");
let miTitulo=document.querySelector("h1");

function PonNombreUsuario(){
    let miNombre = prompt("Ingresa tu nombre");       
    if (!miNombre) {
        PonNombreUsuario(); 
    } else {
        localStorage.setItem("nombre", miNombre);
        miTitulo.textContent= "HTM Usuario: " + miNombre; 
    }
    
    
}  

if (!localStorage.getItem("nombre")) {
    PonNombreUsuario(); 
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent= "HTM Usuario: " + nombreAlmacenado;
}

miBoton.onclick = function(){
    PonNombreUsuario();
}




















































/* let doritos = "doritos 3d";                      denominacion de variable, mas expresion if, y alert (crea una ventana emergente con la cadena escrita)
if(doritos === "doritos 3d"){
    alert ("simon crack si son doritos 3d")
    } 
      else{
        alert ("no pues no carnal");
    }*/

  /*Funciones

  function multiplica(num1,num2){
      let resul = num1 * num2;
      return resul;
  }

    multiplica (4,5);*/


    /*                                                                             Evento on click en el html 
    document.querySelector("html").onclick = function(){
        alert("deja de picarme");
    }*/
