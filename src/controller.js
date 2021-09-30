function searchMovies(event){
    var searchTerm = event.target.value;
    console.log(searchTerm);
    console.log(searchTerm.length);
    if(searchTerm.length > 5){
        console.log("Hello "+searchTerm);
        fetch("http://localhost:8080/search/" + searchTerm, {
            method : "GET"
        })
            .then(result => result.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }
}


module.exports = {searchMovies};