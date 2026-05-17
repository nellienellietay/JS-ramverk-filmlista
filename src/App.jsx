import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";
import List from "./components/List/List";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  function addMovie(movie) {
    setMovies((previousMovies) => [
      ...previousMovies,
      movie
    ]);
  }
  function deleteMovie(indexToDelete) {
    setMovies(movies.filter((movie, index) => index !== indexToDelete));
  }

  return (
    <div className="container">
      <h1>Min filmlista</h1>

      {/* denna refererar till addmovieform komoneneten vi redan 
      skapat så detta visar att allt som finns i en andra filen ska ligga här */}
      <AddMovieForm addMovie={addMovie} />
      <List movies={movies} deleteMovie={deleteMovie} />

    </div>
  );
}

// Gör så att app-komponenten kan användas i andra filer
export default App;
