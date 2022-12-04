const listFav = document.getElementById("listFav");

// array to store favourite movies
var favouiteMoviesList = [];

// delete favouite movie from local storage
function handleRemoveMovie(index) {
  let data = JSON.parse(localStorage.getItem("favourite movies"));
  data.splice(index, 1);
  localStorage.setItem("favourite movies", JSON.stringify(data));
  window.location.reload();
}


// get data from local storage and add into html
function handleFavMovies() {
  favouiteMoviesList = JSON.parse(localStorage.getItem("favourite movies"));
  Array.from(favouiteMoviesList).forEach((details, index) => {
   listFav.innerHTML += `
    <li class="card mb-3" style="max-width: 540px;">
      <div   class="row g-0">
        <div class="col-md-4">
          <img src=${details.Poster}  class="img-fluid rounded-start" alt="movie_poster"></img>
        </div>
        <div  class="col-md-8">
          <div class="card-body">
            <div id="header_container">
            <h2 class="card-title" >${details.Title}</h2>
            
          </div>
            <p class="card-text"><b>Actors :</b> ${details.Actors}</p>
            <p class="card-text"><b>Year :</b> ${details.Year}</p>
            <p class="card-text"><b>IMDB Rating :</b> ${details.imdbRating}</p>
          </div>
          <div class="card-body" id="remove_btn">
            <button class="btn btn-danger" id='delete_movie' onclick="handleRemoveMovie(${index})">Remove</button>
          </div>
        </div>
      </div>
    </li>
    `;
  });
}

//calling function


 if(favouiteMoviesList){
  handleFavMovies();
 }