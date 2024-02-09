import { headerComponent } from "./../components/header.js";
export const viewError = () => {
  const root = document.createElement("div");

  const viewHeader = headerComponent();
  root.appendChild(viewHeader);

  const descriptionBox = document.createElement("div");
  descriptionBox.className = "descrption-box";

  const imgFilm = document.createElement("img");
  imgFilm.className = "error-image";
  imgFilm.src =
    "https://raw.githubusercontent.com/MilenaPacheco/DEV013-dataverse/main/src/img/the-imitation-game.jpeg";
  imgFilm.alt = "Imagen Película";
  imgFilm.appendChild(imgFilm);

  //botones, Objeto a cambio byn---> Chat Grupal
  const btnRegresar = document.querySelector(".btn-home");
  btnRegresar.addEventListener("click", () => {
    navigateTo(`/`)
  });
  const btnChatgrupal = document.querySelector(".btn-api");
  btnAPIkey.addEventListener("click", () => {
    navigateTo(`/viewAPIKey`);
  });

/*
  const messageError = document.createElement("p");
  messageError.className = "error-message";
  messageError.textContent = "ruta no encontrada";
  errorBox.appendChild(messageError);
  //errorBox.textContent = "ruta no encontrada";
  return errorBox;*/
};