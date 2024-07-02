let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo =10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}
function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
   
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');

            }  else {
                // sie el usuario no acierta
                if (numeroDeUsuario > numeroSecreto) {
                    asignarTextoElemento('p','el numero secreto es menor');
        } else {asignarTextoElemento('p','el numero secreto es mayor');

        }
        intentos++; 
        limpiarCaja();     
    }
    return;
}

function limpiarCaja()  {
    document.querySelector('#valorUsuario').value = '';
    value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
//si el numero gneerado esta en la lista juagamos de nuevo
console.log (numeroGenerado);
console.log (listaNumerosSorteados);

if (listaNumerosSorteados.length == numeroMaximo) {
asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

}else {

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;  
    }
}

}

function condicionesIniciales() {
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero de 1 a ${numeroMaximo}`);   
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
 // limpiar juego
 limpiarCaja();             
 // intentar mensaje de inicio
 //generar el numero aleatorio
 //inicializar el numero de intentos
 condicionesIniciales();
 //deshabilitar el boton de nuevo juego
 document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();