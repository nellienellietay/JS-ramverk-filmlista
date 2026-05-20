import Movie from "../Movie/Movie.jsx";

function MovieList({ movies, deleteMovie }) {
  return (
    <ul className="list-group mt-3">
      {movies.map((movie, index) => (<Movie key={index} movie={movie} index={index} deleteMovie={deleteMovie}/>
      ))}
    </ul>
  );
}

export default MovieList;