// Este es el archivo que se conecta directamente con el html, desde acá se orquesta
// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

import {home} from './views/home.js';
import { setRoutes, setRootElement, onURLChange } from './router.js';
import { viewError } from './views/viewError.js';
const routes = {
  "/": home, //Home donde se ven todas las tarjetas
  "/error": viewError,
  //"/api": viewAPIKey,
  //"/chats": viewChats,
  //"/description": viewDescriptionCard,
}

const viewContainer = document.getElementById("root");

// setRoutes toma a routes y lo lleva a routes.js y lo define dentro de routes.js como si fuera let ROUTES
setRoutes(routes);
setRootElement(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  console.log(event.target.location.pathname);
  onURLChange(event.target.location.pathname);
});
  
window.onpopstate = onURLChange;
/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/