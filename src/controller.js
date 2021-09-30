import { CardData } from "./components/card/controller";

export function searchMovies(event){
    var searchTerm = event.target.value;
    if(searchTerm.length > 5){
        console.log("Hello "+searchTerm);
        fetch("http://localhost:8080/search/" + searchTerm, {
            method : "GET"
        })
            .then(result => result.json())
            .then(data => {
                var movieRecords = [];

                for(let index=0; index<data.length; index++){
                    let card = new CardData(data[index]);
                    movieRecords.push(card);
                }
                console.log(data);
                console.log(movieRecords);

            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function getComparisonList(){
    fetch("http://localhost:8080/comparison", {
        method : "GET"
    })
        .then(result => result.json())
        .then(data => {
            console.log(data);
        })
}

export function getComparison(id){
    fetch("http://localhost:8080/comparison/" + id,{
        method : "GET"
    })
        .then(result => result.json())
        .then(data => {
            console.log(data);
        })
}

