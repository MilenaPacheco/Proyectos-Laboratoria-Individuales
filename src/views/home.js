import { headerComponent } from "./../components/header.js";
import { data } from "./../data/dataset.js";
import { footerComponent } from "./../components/footer.js";
import { sortData, filterData, computeStats, computeStatsScore } from "./../lib/dataFunctions.js";

export const home = () => {
    //const p = document.createElement("p")
    //p.innerHTML = "Esto es una práctica";
    const viewHeader = headerComponent();
    
    return viewHeader;
    
};

export const renderItems = () => {
    const root = document.createElement("div");

    function movies(){
      let filmsHTML = '';
      data.forEach(function (film) { 
        filmsHTML += `<li class="cards" itemscope itemtype="movie">
                    <dl>
                      <img src="${film.imageUrl}" alt=Imagen de la película: ${film.name} />
                      <dt></dt><dd class="name-movie" itemprop="name"><strong>${film.name}</strong></dd>
                      <dt></dt><dd class="year-movie" itemprop="yearMovie"><strong>(${film.facts.yearMovie})</strong></dd>
                      <dt></dt><dd class= "info-movie" itemprop="shortDescription">${film.shortDescription}</dd>
                      <dt></dt><dd itemprop="genreMovie"><strong>Género: </strong>${film.facts.genreMovie}</dd>
      
                    </dl>
                  </li>`
      });
      return '<ul>' + filmsHTML + '</ul>';
    }
    root.innerHTML = movies(data);

    const footer = createFooter();
    root.appendChild(footer);

    return root
  };
