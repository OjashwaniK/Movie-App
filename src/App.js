import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

function App() {
  const featured_Api =
    " https://imdb-api.com/API/AdvancedSearch/k_pl6t3s12/?genres=action,adventure";

 
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const getMovies = async () => {
    const response = await fetch(featured_Api);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovies(responseJson.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container">
      <input type="text" placeholder="Search Your Movie" />

      <div className="moviecard_container">
        {movies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
    </div>
  );



//code check


 }

export default App;
