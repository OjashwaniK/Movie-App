import React from "react";
import "./MovieCard.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';




function Card({ poster_path, original_title, release_date, vote_average }) {
 const IMG_API = "https://image.tmdb.org/t/p/w400";
  return (
    <div className="card">
      <div className="card_item">
        <img src={IMG_API + poster_path} alt={original_title} />
      </div>
      <div className="card_info">
        <div className="card_info1">
          <h3>{original_title}</h3>
        </div>

        <div className="card_info2">
          <StarBorderIcon/>
          <p>{vote_average}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
// original_language: "en"
// original_title: "The Batman"
// overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler."
// popularity: 9031.638
// poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg"
// release_date: "2022-03-01"
// title: "The Batman"
// video: false
// vote_average: 7.8
// vote_count: 4043

// Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_.jpg"
// Title: "Batman"
// Year: "1989"
// imdbID: "tt0096895"

// "id": "tt10698680",
// "image": "https://imdb-api.com/images/original/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_Ratio0.6837_AL_.jpg",
// "title": "K.G.F: Chapter 2",
// "description": "(2022)",
// "runtimeStr": "168 min",
// "genres": "Action, Crime, Drama",