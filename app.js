let numeroSecreto = 0;
let intentos = 0;
//array cuando utilizamos los corchetes
let listaNumeroSorteado= [];
let maximoIntentos = 20;

//función genérica llevan        parámetros(elemtto, texto)
function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector (elemento);    
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){   
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Exácto el número secreto es ${numeroSecreto}. lo lograste en ${intentos} ${(intentos === 1)? "intento": "intentos"} felicidades.`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p","el número secreto es menor");
        }else{
            asignarTextoElemento("p","el número secreto es mayor");
        }

        intentos++

        limpiarCaja();    
    }
    return;
}
    
function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";
}


function generarNumeroSecreto () {

    let numeroGenerado = Math.floor(Math.random()*maximoIntentos)+10;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    if(listaNumeroSorteado.length == maximoIntentos){
        asignarTextoElemento("p","Has sorteado todos los posibles números")
    }else{

    if(listaNumeroSorteado.includes(numeroGenerado)){
        //retornar
        return generarNumeroSecreto ();
    }else{
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado
    }
    }   
}

function condicionesIniciales(){
    //la función ejecuta  dentro de los paréntesis
                //elemento(h1 y p) //texto(mensaje de cada elemento o lo que se quiera mostrar en la página)
    asignarTextoElemento ("h1","Juego del número Secreto");
    asignarTextoElemento("p","Escriba un número del 10 al 30.");
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto)
    intentos = 1;


}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //reinicar los mensajes en pantalla la bienvenida y el pedido de intervalo
    //reinicar número secreto
    // reiniciar intentos
    condicionesIniciales();
    //desactivar el boton nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");

}



condicionesIniciales();

/*
Tecnología                        Función	                          Ejemplos de Uso
HTML	    Lenguaje de marcado para estructurar contenido.	          Título, Párrafo
CSS	        Lenguaje de estilos para presentación y estilización.	  p { color: blue; } div { background: #f2f2f2; }
JavaScript	Lenguaje de programación para interactividad.	          function inicarJogo() { ... }
*/

/*Tipo de Función	            Ejemplo de Código	                                    Uso
Sin retorno e sem parâmetros	function saludo() { ... }	                  Execução de um bloco de código simples.
Sin retorno e com parâmetros	function saludar(nombre) { ... }	          Execução de um bloco de código com argumentos.
Com retorno e sem parâmetros	function generarNumeroAleatorio() { ... }	  Cálculo e retorno de um valor específico.
Com retorno e com parâmetros	function sumar(a, b) { ... }	              Cálculo e retorno baseado em argumentos.
Função anônima	                let saludo = function() { ... };	          Definição de uma função sem nome localmente.
Arrow function	                let cuadrado = x => x * x;	                  Definição concisa de funções curtas.*/