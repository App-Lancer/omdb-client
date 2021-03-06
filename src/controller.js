import { CardData } from "./components/card/controller";
import { ComparisonData } from "./components/comparison/controller";

function searchMovies(that){
    var searchTerm = document.getElementById("search").value;
    if(searchTerm.length >= 3){
        fetch("http://6244-59-93-225-115.ngrok.io/search/" + searchTerm, {
            method : "GET"
        })
            .then(result => result.json())
            .then(data => {
                var movieRecords = [];

                if(data.Error == "Movie not found!"){
                    that.setState({noRecordsFound : true});
                }else{
                    for(let index=0; index<data.length; index++){
                        let card = new CardData(data[index]);
                        movieRecords.push(card);
                    }
    
                    that.setState({dataSource: movieRecords})
                }
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

export var getComparisonList = (that) => {
    fetch("http://6244-59-93-225-115.ngrok.io/comparison", {
        method : "GET"
    })
        .then(result => result.json())
        .then(data => {

            if((data instanceof Array && data.length == 0) || data.message == "Internal Error"){
                that.setState({noRecordsFound: true});
            }else{
                var comparisonRecords = [];

                    for(let index=0; index<data.length; index++){
                        let comparison = new ComparisonData(data[index]);
                        comparisonRecords.push(comparison);
                    }
                that.setState({savedComparisons: comparisonRecords});
            }
        })
}

export var getComparison = (id) => {
    return fetch("http://6244-59-93-225-115.ngrok.io/comparison/" + id,{
        method : "GET"
    })
    .then(result => result.json())
    .then(data => {
        var movies = []
        for (let movie of data.movies){
            movies.push(new CardData(movie))
        }
        return movies;
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

