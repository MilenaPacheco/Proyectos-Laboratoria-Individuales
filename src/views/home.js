import { headerComponent } from "./../components/header.js";
import { data } from "./../data/dataset.js";
import { footerComponent } from "./../components/footer.js";
import { navigateTo } from "../router.js";
import { filterData } from "./../lib/dataFunctions.js";
import { selectsComponent } from "./../components/menuSelects.js";

export const home = () => {
  const root = document.createElement("div");

  const viewHeader = headerComponent();
  root.appendChild(viewHeader);

  const menuSelects = selectsComponent();
  viewHeader.appendChild(menuSelects);

  //const selectGenre = document.querySelector("#genre");
  //console.log(findSelects(selectGenre))

  const selectFilter = document.querySelector('#genre')
  selectFilter.addEventListener('change', (e) => { 
    console.log("Prueba evento; " + e.target.value)
  });



  //renderizado pendiente
  const viewCards = renderItems(data);
  root.appendChild(viewCards);

  const footer = footerComponent();
  root.appendChild(footer);

  const cards = root.querySelectorAll(".cards");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const cardId = card.getAttribute("id");
      //console.log(cardId)
      navigateTo(`/description`, { name: cardId });
    });
  });

  return root;
};

//renderizado general
export const renderItems = (data) => {
  let html = "";

  data.forEach(function (film) {
    html += `<li class="cards" id="${film.id}" itemscope itemtype="movie">
                <dl>
                  <img src="${film.imageUrl}" alt=Imagen de la película: ${film.name} />
                  <dt></dt><dd class="name-movie" itemprop="name"><strong>${film.name}</strong></dd>
                  <dt></dt><dd class="year-movie" itemprop="yearMovie"><strong>(${film.facts.yearMovie})</strong></dd>
                  <dt></dt><dd class= "info-movie" itemprop="shortDescription">${film.shortDescription}</dd>
                  <dt></dt><dd itemprop="genreMovie"><strong>Género: </strong>${film.facts.genreMovie}</dd>
                </dl>
              </li>`;
  });

  const filmsList = document.createElement("ul");
  filmsList.innerHTML = html;

  return filmsList;
};

