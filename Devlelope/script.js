var apiKey = 'ab4cf7a017813faa6dd010f44054eb33'

function topMoviesToday(){
    //fetch movie data
    fetch("https://api.themoviedb.org/3/movie/popularity?api_key=" + apiKey)

    .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
}

topMoviesToday();