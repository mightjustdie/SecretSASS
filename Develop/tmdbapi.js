var APIKey = 'ab4cf7a017813faa6dd010f44054eb33';
var requestURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + APIKey;

var moviePostersContainer = document.getElementById("moviePostersContainer")
var firstMoviePosterContainer = document.getElementById("firstMoviePosterContainer")
var restOfThePostersContainer = document.getElementById("restOfThePostersContainer")
var moviePosterWidth = "150px";
var moviePosterHeight = "225px";
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

      var firstMoviePoster = document.createElement('img');
      firstMoviePoster.setAttribute("src",'https://image.tmdb.org/t/p/original' + data.results[0].poster_path)
      firstMoviePoster.style.width = "200px";
      firstMoviePoster.style.height = "300px";
      firstMoviePosterContainer.appendChild(firstMoviePoster);
    

      for(var i =1; i < 9; i++) {
        var moviePoster = document.createElement('img');
        moviePoster.setAttribute("src",'https://image.tmdb.org/t/p/original' + data.results[i].poster_path)
        moviePoster.style.width = moviePosterWidth;
        moviePoster.style.height = moviePosterHeight;
        moviePostersContainer.appendChild(moviePoster);

        // var movieName = document.createElement('h4');
        // movieName.textContent = data.results[i].title;
        // movieName.appendChild(movieTitle);
      }

<<<<<<< HEAD
// Get the modal
var modal = document.getElementById("welcomeModal");

// Get the message displayed in the modal
var message = document.getElementById("welcomeMessage");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Check local storage to see if the user's name has been saved
var userName = localStorage.getItem("userName");

var catPFP = localStorage.getItem("catImage")

// If the user's name has been saved, use it to greet the user
if (userName) {
  message.innerHTML = "Welcome back, " + userName + "!" ;
  document.getElementById("catImage").innerHTML = "<img src='" + catPFP + "' style='width: 100px; height: 100px;'/>";
  modal.style.display = "block";
} else {
  // If the user's name hasn't been saved, prompt for it
  userName = prompt("Hello, Welcome to Top Movies Today! What is your name?");
  localStorage.setItem("userName", userName);
  // localStorage.setItem("catImage", url);
  // document.getElementById("catImage").innerHTML = "<img src='" + catPFP + "' style='width: 100px; height: 100px;'/>";
  message.innerHTML = "Welcome, " + userName + "1234"; 
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  //cat();
  if (event.target == modal) {
    modal.style.display = "none";
  }
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
=======
>>>>>>> e2cb4687fddb419898b2742f1f1cdc9592d83562
    })
}

topMoviesToday();

top10btn.addEventListener("click", function() {
  topMoviesToday();
});