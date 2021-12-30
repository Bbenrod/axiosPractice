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
const axios = require('../axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });