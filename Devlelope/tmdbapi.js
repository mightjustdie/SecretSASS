var APIKey = 'ab4cf7a017813faa6dd010f44054eb33';
var requestURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + APIKey;

var moviePostersContainer = document.getElementById("moviePostersContainer")
// var movieTitle = document.getElementById('movieTitle');

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



    // 1. Create the element
    //   var topMoviePoster = document.createElement('img');

    // // 2. Give it content
    // //topMoviePoster = url('https://image.tmdb.org/t/p/original' + data.results[0].poster_path)
    

    // // 3. Add any attributes (optional)
    //   topMoviePoster.setAttribute("src",'https://image.tmdb.org/t/p/original' + data.results[0].poster_path)
    //   topMoviePoster.setAttribute("alt","wakanda")
    //   console.log(topMoviePoster);
    // // 4. Append the new element to the page
    // moviePostersContainer.appendChild(topMoviePoster);
    })
}

topMoviesToday();