import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";
import Sorting from "./components/Sorting/Sorting";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

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


  return (
    <div className="container">
      <h1>Min filmlista</h1>

      {/* denna refererar till addmovieform komoneneten vi redan 
      skapat så detta visar att allt som finns i en andra filen ska ligga här */}
      <AddMovieForm addMovie={addMovie} />
      <Sorting sortByTitle={sortByTitle} sortByRating={sortByRating} />

    </div>
  );
}

// Gör så att app-komponenten kan användas i andra filer
export default App;
