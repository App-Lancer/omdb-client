function searchMovies(){
    var searchTerm = document.getElementById("search").value;
    console.log(searchTerm);
    console.log(searchTerm.length);
    if(searchTerm.length > 5){
        console.log("Hello "+searchTerm);
        fetch("http://6244-59-93-225-115.ngrok.io/search/" + searchTerm, {
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

var onChangeTimer
var textInputOnchange = (event)=>{
    clearTimeout(onChangeTimer)
    onChangeTimer = setTimeout(()=>{
        searchMovies()
    }, 1000)
}


module.exports = {textInputOnchange};