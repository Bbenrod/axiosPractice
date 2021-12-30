//Code
const button = document.querySelector("button");
const form = document.querySelector("form");
const div = document.querySelector(".movies");

button.addEventListener('click',() => {
    const value = form[0].value;

    const config = {params: {q: value}};
    findMovie(config)

    form.reset();
});


//Fucntions
async function findMovie(config){
  const url = `https://api.tvmaze.com/search/shows`;
  try{
    const response = await axios.get(url,config);
    const movies = response.data;
    
    addMovies(movies);

  }catch(e){
    console.error(e);
  }
}

function addMovies(movies){
  //Reset 
  div.innerHTML = "";

  //Add movies
  if(movies.length){
    for(let movie of movies){
      if(movie.show.image){
        //Values
        const name = movie.show.name;
        const url = movie.show.url;
        const img = movie.show.image.medium;
  
        //Add object
        div.innerHTML +=
        `<div class="movies_movie">
        <a href="${url}"> <img src="${img}" alt="${name}">
        </a>
        <p>${name}</p>
        </div>`;
      }
    }
  }else{
    div.innerHTML +=
    `<div>
    <img src="src/images/error.svg" alt="Error">
    <p>Oops! We can't find anything related</p>
    </div>`
  }
}