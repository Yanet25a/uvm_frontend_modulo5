const _ = require('lodash'); //se está importando y diciendo de donde viene el _
const estilo = require('./estilo.css');
const imagen = require('./persona.jpg');
const datos = require('./datos.csv');
const yaml = require('./datos.yaml');
const json5 = require('./datos.json5');

if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration =>{
            console.log("SW registrado", registration);
        }).catch(err=>{
            console.log("SW no registrado", err);
        })
    })
}


function componente(){
    const elemento = document.createElement('div');
    //muestra un saludo en la etiqueta div utilizando la biblioteca lodash
    elemento.innerHTML = _.join(['Hola', datos[0][1]],' '); //recibe una cadena y un separador
    elemento.classList.add('hola');
    const miImagen = new Image();
    miImagen.src = imagen;
    elemento.appendChild(miImagen);
    console.log(datos);
    return elemento;
}

console.log(yaml.title);
console.log(json5.owner.name);
document.body.appendChild(componente());