// Exercise 1: Get the array of all directors.

  function getAllDirectors(array) {
      let result = array.map((name) => name.director);    // map devuelve un array nueva con los directores
      return result;
    // console.log("EXERCICE 1 ->", result);
  
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

    let result = array.filter((movie) => movie.director === director);
    return result;

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let movieDirector = getMoviesFromDirector(array, director);   // metemos en variable el filtro de la funcion anterior
  let sumRate = movieDirector.reduce((acc, movie) => {          // metodo reduce para sumar las notas y lo metemos en la variable sumRate
    acc += movie.score;                                         // acc es 'accumulator' parametro para acumular resultados
    return acc;
  }, 0);
  let averageMovies = Number((sumRate / movieDirector.length).toFixed(2));
  return averageMovies;
  
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  let sortedArray = array
  .map(movie => movie.title)                    // crea array con solo los titulos
  .sort((a, b) => a.localeCompare(b))           // metodo sort para ordenarlo de forma alfabetica
  .slice(0, 20);                                // metodo slice para solo los 20 primeros
return sortedArray;
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  let orderMovie = [...array].sort((a, b) => {                                    // variable recibe array original de peliculas usando spread (toma los elementos de un array y los descompone en elementos individuales que se pueden usar como argumentos de funciones o asignar a nuevas variables)
    return a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year;  // sort ordena las pelis, compara el año si es el mismo ordena la peli alfabeticamente 
  });                                                                             // metodo localCompare() compara el titulo de la peli si son del mismo año
    return orderMovie;                                            // condición ? resultado si se cumple : resultado si no se cumple
}



// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

  let generoMovie = array.filter(e => {                 // metemos en la variable el filtrado de array del genero y que tengan la puntuacion
    if(e.genre.includes(genre) && e.score !== '') {     // si incluye genero y la puntucacion devuelve true
      return true
    }
  });
  let averageCategory = moviesAverageOfDirector(generoMovie);    // aplicamos la funcion que calcula la media
  return averageCategory

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  let duracionMinutos = array.map((movie) => {
    let hours = 0;
    let minutes = 0;

    let duration = movie.duration.split(' ');       // separamos las horas y los minutos
    if (duration.length === 2) {                    
      hours = parseInt(duration[0]);                // si la duración tiene dos partes (horas y minutos) las asignamos a sus respectivas variables
      minutes = parseInt(duration[1]);
    } else {                                        // si solo hay una parte puede ser una hora o unos minutos
      if (duration[0].includes('h')) {              // si la parte incluye "h" entonces tiene horas y se pone en la variable
        hours = parseInt(duration[0]);
      } else {                                      // Si no incluye "h" entonces son minutos y se pone en la variable                                     
        minutes = parseInt(duration[0]);            // si solo tiene minutos se toma tal cual
      }
    }

    let totalMinutes = hours * 60 + minutes;          // convertir horas a minutos y sumar a los minutos existentes

    return {
      ...movie,
      duration: totalMinutes                  // se devuelve con la duración en minutos
    };
  });

  return duracionMinutos;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
