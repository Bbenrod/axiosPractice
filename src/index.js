//Import
// const axios = require('axios').default;

//Code
const button = document.querySelector("button");
const form = document.querySelector("form");
const div = document.querySelector(".movies");

button.addEventListener('click',() => {
    const value = form[0].value;
    console.log(value);
    form.reset();
});


// Make a request for a user with a given ID
const axios = require('axios');
const url = `https://api.tvmaze.com/search/shows?q=chicken`;

async function findMovie(){
  try{
    const response = await axios.get(url);
    const movies = response.data;
    
    for(let movie of movies){
      if(movie.show.image){
        const name = movie.show.name;
        const img = movie.show.image.medium;
        console.log(name,img);
      }
    }

  }catch(e){
    console.error(e);
  }
}

findMovie();