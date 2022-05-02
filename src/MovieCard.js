import React from "react";
import './MovieCard.css'


function MovieCard({ image, title, description, genres, imDbRating }) {
  return (
    <div className="moviecard">
      <div className="moviecard_img">
        <img src={image} alt="" />
      </div>
      <div className="moviecard_info">
        <div className="moviecardinfo_left">
          <h4>{title}</h4>
          <h4>Released Year:{description}</h4>
        </div>
        <div className="moviecardinfo_right">
       
          <h4>{imDbRating}</h4>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
// {
//     "id": "tt11138512",
//     "image": "https://imdb-api.com/images/original/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_Ratio0.6837_AL_.jpg",
//     "title": "The Northman",
//     "description": "(2022)",
//     "runtimeStr": "137 min",
//     "genres": "Action, Adventure, Drama",
//     "genreList": [
//         {
//             "key": "Action",
//             "value": "Action"
//         },
//         {
//             "key": "Adventure",
//             "value": "Adventure"
//         },
//         {
//             "key": "Drama",
//             "value": "Drama"
//         }
//     ],
//     "contentRating": "R",
//     "imDbRating": "7.8",
//     "imDbRatingVotes": "37357",
//     "metacriticRating": "82",
//     "plot": "From visionary director Robert Eggers comes The Northman, an action-filled epic that follows a young Viking prince on his quest to avenge his father's murder.",
//     "stars": "Robert Eggers, Alexander Skarsgård, Nicole Kidman, Claes Bang, Ethan Hawke",
//     "starList": [
//         {
//             "id": "tt11138512",
//             "name": "Robert Eggers"
//         },
//         {
//             "id": "tt11138512",
//             "name": "Alexander Skarsgård"
//         },
//         {
//             "id": "tt11138512",
//             "name": "Nicole Kidman"
//         },
//         {
//             "id": "tt11138512",
//             "name": "Claes Bang"
//         },
//         {
//             "id": "tt11138512",
//             "name": "Ethan Hawke"
//         }
//     ]
// }
