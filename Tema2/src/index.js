const _ = require('lodash'); //se está importando y diciendo de donde viene el _


function componente(){
    const elemento = document.createElement('div');
    //muestra un saludo en la etiqueta div utilizando la biblioteca lodash
    elemento.innerHTML = _.join(['Hola','Webpack'],' '); //recibe una cadena y un separador
    return elemento;
}

document.body.appendChild(componente());