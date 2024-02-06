//Función que filtra
export const filterData = (data, filterBy, value) => {
    const filterMovie = data.filter(film => film.facts[filterBy] === value);
    return filterMovie;
  };
  
  
  //Función que ordena
  export const sortData = (data, sortBy, sortOrder) => {
    const sortedData = data.sort((a, b) => {
      if (sortOrder === "asc") {
        if (typeof a.facts[sortBy] === 'number') {
          return a.facts[sortBy] - b.facts[sortBy];
        } else {
          return String(a[sortBy]).localeCompare(String(b[sortBy]));
        }
      } else {
        if (typeof a.facts[sortBy] === 'number') {
          return b.facts[sortBy] - a.facts[sortBy];
        } else {
          return String(b[sortBy]).localeCompare(String(a[sortBy]));
        }
      }
    });
    return sortedData;
  };
  
  
  
  
  //Función para clasificar películas de la data según score en Rotten Tomatoes.
  export const computeStatsScore = (data) => {
    //  Quitar porcentaje en score   data.extraInfo.rottenTomatoesScore
    const scoreOut50 = data.filter((film) => {
      const score = parseFloat(film.extraInfo.rottenTomatoesScore);
      return 50 <= score && score < 70;
    });
  
    const scoreOut70 = data.filter((film) => {
      const score = parseFloat(film.extraInfo.rottenTomatoesScore);
      return 70 <= score && score < 90;
    });
  
    const scoreOut90 = data.filter((film) => {
      const score = parseFloat(film.extraInfo.rottenTomatoesScore);
      return 90 <= score && score <= 100;
    });
  
    const perOut50 = Math.round((scoreOut50.length * 100) / data.length);
  
    const perOut70 = Math.round((scoreOut70.length * 100) / data.length);
  
    const perOut90 = Math.round((scoreOut90.length * 100) / data.length);
  
    return {
      scoreOut50,
      scoreOut70,
      scoreOut90,
      perOut50,
      perOut70,
      perOut90
    };
  };
  
  
  
  //Función para calcular frecuencia de países.
  export const computeStats = (data) => {
    const countryFrequencies = data.map((movie) => {
      const country = movie.extraInfo.countryMovie;
      const name = movie.name;
  
      return {
        country,
        movieName: name,
      };
    });
  
    const countryFrequency = countryFrequencies.reduce((acumulador, movie) => {
      const country = movie.country;
  
      // Verificar si el país ya está en el acumulador
      if (!acumulador[country]) {
        acumulador[country] = {
          count: 0,
          movies: []
        };
      }
  
      // Incrementar la frecuencia y agregar la película a la lista
      acumulador[country].count += 1;
      acumulador[country].movies.push(movie.movieName);
  
      return acumulador;
    }, {});
  
    // Devolver la frecuencia de películas por país directamente
    return countryFrequency;
  };
  