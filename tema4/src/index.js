import { createRoot } from 'react-dom/client';

// 1. Buscamos el contenedor pasando el ID como un String (entre comillas)
const container = document.getElementById('root');

// 2. Creamos la raíz con el nuevo método createRoot obligatorio en React 19
const root = createRoot(container);

// 3. Renderizamos tu etiqueta directamente
root.render(
    <h1>Hola React con WebPack!!!!</h1>
);

/*
    Código obsoleto, para la versión
    19 de react se utiliza el código de arriba
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
    <h1>Hola React con WebPack</h1>,
    document.getElementById(root)
)
*/    