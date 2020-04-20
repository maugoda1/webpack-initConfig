/*jshint esversion: 6 */
import '../css/componentes.css';

export const saludar = ( nombre ) => {
    console.log('Creando etiqueta html');
    const h1 = document.createElement('h1');
    h1.innerText =  `Hola como estas, ${ nombre }`;

    document.body.append(h1);
};
