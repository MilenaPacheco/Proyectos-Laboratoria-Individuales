import { home } from './views/home.js';
import { viewAPIKey } from './views/viewAPIKey.js';
import { viewBienvenida } from './views/viewBienvenida.js';
import { viewChats } from './views/viewChats.js';
import { setRoutes, setRootElement, onURLChange } from './router.js';
import { viewError } from './views/viewError.js';
import { viewDescriptionCard } from './views/viewDescriptionCard.js';

const routes = {
  "/": home, //Home donde se ven todas las tarjetas
  "/error": viewError,
  "/viewAPIKey": viewAPIKey,
  "/chats": viewChats,
  // "/description": viewDescriptionCard   // /pelicula/${movie}--- "/pelicula/walli": viewDescriptionCard(walli) 
  "/confirmar": viewBienvenida,
  "/description": viewDescriptionCard,//se ingresa esta nueva clase de manera general vamos hacer que sea dinámica a paritir de recibir un parámetro cada vez que será invocada, en estas circunstancias la única invocación se hará a partir de seleccionar las cartas en home, entonces desde Home unicamente se enviaran estos parámetos y esto va a ser desde la invocación de navogateTo().
}

const viewContainer = document.getElementById("root");

// setRoutes toma a routes y lo lleva a routes.js y lo define dentro de routes.js como si fuera let ROUTES
setRoutes(routes);
//setRootElement(viewContainer);

// Set the root element where views will be rendered
document.addEventListener("DOMContentLoaded", (event) => {
  // set root element
  setRootElement(viewContainer);
  // invoke onURLChange 
  onURLChange(event.target.location.pathname);
  //onURLChange(event.currentTarget.location);
});

window.addEventListener('popstate', () =>{
  onURLChange(window.location);
});

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

