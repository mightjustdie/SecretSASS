var APIKey = 'ab4cf7a017813faa6dd010f44054eb33';
var requestURL = "https://api.themoviedb.org/3/movie/550?api_key=" + APIKey;

function topMoviesToday(){
    //fetch movie data
    fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // 'https://image.tmdb.org/t/p/original" + data.results[i].poster_path

    });
}

topMoviesToday();