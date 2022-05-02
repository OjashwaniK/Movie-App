
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
const IMG_API = "https://image.tmdb.org/t/p/w400";
const MOVIE_URL =
  "http://api.themoviedb.org/3/discover/movie?sortby=popularity.disc&api_key=ea2aaad1ccaae5d86274b9d7f1e5211d";

const SEARCH_URL =
  "http://api.themoviedb.org/3/search/movie?api_key=ea2aaad1ccaae5d86274b9d7f1e5211d&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const movieRequest = async () => {
    const response = await fetch(MOVIE_URL);
    const responseJson = await response.json();
    console.log(responseJson.results);

    setMovies(responseJson.results);
  };

  useEffect(() => {
    movieRequest();
  }, []);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const submitHandler=(e)=>{
    e.preventDefault();
   
    if(searchTerm){
      fetch(SEARCH_URL+searchTerm)
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
         setMovies(data.results)
      })
      setSearchTerm('');
    }
   
   
  }

  return (
    <>
      <div className="search_tab">
        <h2>Search Movie Name</h2>
        <form onSubmit={submitHandler}>
          <input
            value={searchTerm}
            onChange={handleOnChange}
            type="text"
            placeholder="search movie"
          />
        </form>
      </div>
      <div className="container">
        {movies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
    </>
  );
}

export default App;