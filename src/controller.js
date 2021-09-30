import { CardData } from "./components/card/controller";

function searchMovies(that){
    var searchTerm = document.getElementById("search").value;
    if(searchTerm.length >= 3){
        console.log("Hello "+searchTerm);
        fetch("http://6244-59-93-225-115.ngrok.io/search/" + searchTerm, {
            method : "GET"
        })
            .then(result => result.json())
            .then(data => {
                var movieRecords = [];

                for(let index=0; index<data.length; index++){
                    let card = new CardData(data[index]);
                    movieRecords.push(card);
                }
                console.log(movieRecords);

                that.setState({dataSource: movieRecords})

            })
            .catch(err => {
                console.log(err);
            })
    }
}

var onChangeTimer
export var textInputOnchange = (that, event)=>{
    clearTimeout(onChangeTimer)
    onChangeTimer = setTimeout(()=>{
        searchMovies(that)
    }, 1000)
}

export function getComparisonList(){
    fetch("http://6244-59-93-225-115.ngrok.io/comparison", {
        method : "GET"
    })
        .then(result => result.json())
        .then(data => {
            console.log(data);
        })
}

export function getComparison(id){
    fetch("http://6244-59-93-225-115.ngrok.io/comparison/" + id,{
        method : "GET"
    })
    .then(result => result.json())
    .then(data => {
        console.log(data);
    })
}

export function saveCompariosn(name, movies){
    var rawDatas = []
    for(let movie of movies) {
        rawDatas.push(movie.rawData)
    }
    fetch("http://6244-59-93-225-115.ngrok.io/comparison",{
        method : "POST",
        body : JSON.stringify({name: name, movies: rawDatas}),
        headers :{
            'Content-Type': 'application/json'
        }
    })
    .then(result => result.json())
    .then(data => {
        console.log(data);
    })
}

