import { headerComponent } from "./../components/header.js";
import { data } from "./../data/dataset.js";
import { footerComponent } from "./../components/footer.js";
//import { sortData, filterData, computeStats, computeStatsScore } from "./../lib/dataFunctions.js";

export const home = () => {
  //const p = document.createElement("p")
  //p.innerHTML = "Esto es una práctica";
  const root = document.createElement("div");

  const viewHeader = headerComponent();
  root.appendChild(viewHeader);

  const viewCards = renderItems(data);
  root.appendChild(viewCards)

  const footer = footerComponent();
  root.appendChild(footer);

  return root;
};

const renderItems = (data) => {
  // Creamos un elemento ul para contener las películas
  const filmsList = document.createElement("ul");

  // Iteramos sobre los datos de las películas y creamos un elemento li para cada película
  data.forEach(function (film) {
    const filmItem = document.createElement("li");
    filmItem.classList.add("cards");
    filmItem.setAttribute("itemscope", "");
    filmItem.setAttribute("itemtype", "movie");
    filmItem.innerHTML = `
      <dl>
        <img src="${film.imageUrl}" alt="Imagen de la película: ${film.name}" />
        <dt></dt><dd class="name-movie" itemprop="name"><strong>${film.name}</strong></dd>
        <dt></dt><dd class="year-movie" itemprop="yearMovie"><strong>(${film.facts.yearMovie})</strong></dd>
        <dt></dt><dd class= "info-movie" itemprop="shortDescription">${film.shortDescription}</dd>
        <dt></dt><dd itemprop="genreMovie"><strong>Género: </strong>${film.facts.genreMovie}</dd>
      </dl>`;
    filmsList.appendChild(filmItem); 
  });

  return filmsList; 
};



