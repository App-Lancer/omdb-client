import { Component } from 'react'; 
import './card.css';
import { CardData } from './controller'

export default class Card extends Component {
    state = { 
        isSelected: false
    }

    render() {
        let data = new CardData({
            "Title": "The Office",
            "Year": "2005–2013",
            "Rated": "TV-14",
            "Released": "24 Mar 2005",
            "Runtime": "22 min",
            "Genre": "Comedy",
            "Director": "N/A",
            "Writer": "Greg Daniels, Ricky Gervais, Stephen Merchant",
            "Actors": "Steve Carell, Jenna Fischer, John Krasinski",
            "Plot": "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
            "Language": "English",
            "Country": "United States",
            "Awards": "Won 5 Primetime Emmys. 51 wins & 195 nominations total",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "8.9/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "8.9",
            "imdbVotes": "467,866",
            "imdbID": "tt0386676",
            "Type": "series",
            "totalSeasons": "9",
            "Response": "True"
        })
        return(
            <div className="card">
                <div className="poster">
                    <img src={data.poster} style={{objectFit: 'cover'}}/> 
                </div>
                <div className="details">
                    <div className="rating">
                        <i class="fa fa-star star"></i>
                        {data.imdbRating}
                    </div>
                    <div className="type">
                        {data.type}
                    </div>
                </div>
                <div className="title">
                    {data.title}
                </div>
            </div>
        )
    }

}