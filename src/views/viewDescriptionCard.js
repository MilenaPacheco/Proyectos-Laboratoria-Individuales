import { headerComponent } from "./../components/header.js";
//import { data } from "./../data/dataset.js";
import { footerComponent } from "./../components/footer.js";
import { btnRegresar } from "../components/btnRegresar.js";
import { btnChat } from "../components/btnChat.js";
import { navigateTo } from "./../router.js";
export const viewDescriptionCard = (film) => {
  const root = document.createElement("div");

  const viewHeader = headerComponent();
  root.appendChild(viewHeader);

  const divCard = document.createElement("div");
  divCard.className = "div-card";
  root.appendChild(divCard)

  const imageFilm = createImg(film);
  divCard.appendChild(imageFilm);

  const descriptionCardShort = descriptionCard(film);
  divCard.appendChild(descriptionCardShort);

  const descriptionCardAll = descriptionCard2(film);
  divCard.appendChild(descriptionCardAll);

  const botonRegresar = btnRegresar();
  root.appendChild(botonRegresar)

  const botonChat = btnChat();
  root.appendChild(botonChat);

  const footer = footerComponent();
  root.appendChild(footer);

  //botones, Objeto a cambio byn---> Chat Grupal
  botonRegresar.addEventListener("click", () => {
    navigateTo(`/`)
  });
  /*const btnChatgrupal = document.querySelector(".btn-chat-grupal");
  btnChatgrupal.addEventListener("click", () => {
    navigateTo(`/viewChats`);
  });*/
  //console.log(root)
  return root 
};

function createImg(film){
  const filmImage = document.createElement("img");
  const htmlImg = `
    <img class="film-image" src="${film.imageUrl}" alt="Imagen de la película ${film.name}"/>
  `;
  filmImage.innerHTML = htmlImg;
  return filmImage
}

function descriptionCard(film){
  const descriptionCardHTML = document.createElement("ul");
  const html = ` 
        <li class="card-description-short" itemscope itemtype="movie">
        <dl>
          <dt></dt><dd class="name-movie" itemprop="name"><strong>${film.name}</strong></dd>
          <dt></dt><dd class="year-movie" itemprop="yearMovie"><strong>(${film.facts.yearMovie})</strong></dd>
          <dt></dt><dd class= "info-movie" itemprop="shortDescription">${film.shortDescription}</dd>
          <dt></dt><dd itemprop="genreMovie"><strong>Género: </strong>${film.facts.genreMovie}</dd>
        </dl>
      </li>
    `;
  descriptionCardHTML.innerHTML = html;
  return descriptionCardHTML
}

function descriptionCard2(film){
  const descriptionCardHTML = document.createElement("ul");
  const html = `<li class="card-description-all" itemscope itemtype="movie">
      <dl>
        <dt></dt><dd class="year-movie" itemprop="yearMovie"><strong>Año de lanzamiento: (${film.facts.yearMovie})</strong></dd>
        <dt></dt><dd class= "director-movie" itemprop="directorMovie"><strong>Director: ${film.facts.directorMovie}</dd>
        <dt></dt><dd itemprop="productionCompany"><strong>Compañia de Producción: </strong>${film.facts.productionCompany}</dd>
        <dt></dt><dd itemprop="rottenTomatoesScore"><strong>Puntuación RottennTomatoes: </strong>${film.extraInfo.rottenTomatoesScore}</dd>
        <dt></dt><dd itemprop="countryMovie"><País: </strong>${film.extraInfo.countryMovie}</dd>
        <dt></dt><dd itemprop="durationMovie"><Duración: </strong>${film.extraInfo.durationMovie}</dd>
      </dl>
    </li>
    <li class="cards" itemscope itemtype="movie">
      <dl>
      <dt></dt><dd class= "description" itemprop="description"><strong>Descripción:  ${film.description}</dd>
      <dl>
    </li>
    `;
  descriptionCardHTML.innerHTML = html; 
  return descriptionCardHTML
}
