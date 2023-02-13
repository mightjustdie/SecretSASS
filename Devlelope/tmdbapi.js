var APIKey = 'ab4cf7a017813faa6dd010f44054eb33';
var requestURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + APIKey;

var moviePostersContainer = document.getElementById("moviePostersContainer")
// var movieTitle = document.getElementById('movieTitle');
var top10btn = document.getElementById("nav-topten");


function topMoviesToday() {
    //fetch movie data
    fetch(requestURL)
    .then(function (response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);

      for(var i =0; i < 9; i++) {
        var moviePoster = document.createElement('img');
        moviePoster.setAttribute("src",'https://image.tmdb.org/t/p/original' + data.results[i].poster_path)
        moviePostersContainer.appendChild(moviePoster);

        // var movieName = document.createElement('h4');
        // movieName.textContent = data.results[i].title;
        // movieName.appendChild(movieTitle);
      }

    })
}

topMoviesToday();

top10btn.addEventListener("click", function() {
  topMoviesToday();
});