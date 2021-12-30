const button = document.querySelector("button");
const form = document.querySelector("form");
const div = document.querySelector(".movies");

button.addEventListener('click', () => {
    const value = form[0].value;
    console.log(value);
    searchShow(value);
    form.reset();
});

// Make a request for a user with a given ID
function searchShow(somethingToSearch) {
    axios.get(`https://api.tvmaze.com/search/shows?q=${somethingToSearch}`)
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
}
