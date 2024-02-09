import { home } from './views/home.js';
import { data } from "./../data/dataset.js";
import { setRoutes, setRootElement, onURLChange } from './router.js';
import { viewError } from './views/viewError.js';
import { viewDescriptionCard } from './views/viewDescriptionCard.js';

const routes = {
  "/": home, //Home donde se ven todas las tarjetas
  "/error": viewError,
  //"/api": viewAPIKey,
  //"/chats": viewChats,
  //"/description": () => viewDescriptionCard(data[1])
}

//Obtener en un array los id de cada uno de los films y a cada uno de estos   `/pelicula/${movie}`;

const pathFilm = data.map((film) => `/description/${film.id}`);
pathFilm.forEach((path) => {
  routes[path] = viewDescriptionCard;
})
console.log(routes)

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