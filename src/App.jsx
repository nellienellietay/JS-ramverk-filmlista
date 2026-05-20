import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";
import Sorting from "./components/Sorting/Sorting";
import List from "./components/List/List";
import "./App.css";

function App() {
  // Filmerna sparas i App så att samma lista kan användas och uppdateras av olika komponenter.
  const [movies, setMovies] = useState([]);

  // Lägger till filmen som skickas från formuläret i den befintliga filmlistan.
  function addMovie(movie) {
    setMovies((previousMovies) => [
      ...previousMovies,
      movie
    ]);
  }
  function sortByTitle() {
    const sortedMovies = [...movies].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  
    setMovies(sortedMovies);
  }
  
  function sortByRating() {
    const sortedMovies = [...movies].sort((a, b) =>
      Number(b.rating) - Number(a.rating)
    );
  
    setMovies(sortedMovies);
  }

  function deleteMovie(indexToDelete) {
    setMovies(movies.filter((movie, index) => index !== indexToDelete));
  }

  return (
    <div className="container">
      <h1>Min filmlista</h1>

      <AddMovieForm addMovie={addMovie} />
      <Sorting sortByTitle={sortByTitle} sortByRating={sortByRating} />
      <List movies={movies} deleteMovie={deleteMovie} />

    </div>
  );
}

export default App;
