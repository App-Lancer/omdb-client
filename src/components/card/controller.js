
export class CardData{
    title = ""
    type = ""
    year = ""
    released = ""
    genre = ""
    plot = ""
    language = ""
    poster = ""
    ratings = [{}]
    imdbScore = ""

    constructor(data){
        this.title = data.Title;
        this.type = data.Type;
        this.year = data.Year;
        this.released = data.Released;
        this.genre = data.Genre;
        this.plot = data.Plot;
        this.language = data.Language;
        this.poster = data.Poster;
        this.ratings = data.Ratings;
        this.imdbScore = data.imdbRating;
    }

}

/*
{
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
}
*/