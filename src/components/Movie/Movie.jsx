function Movie({ movie, index, deleteMovie }) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>
          {movie.title} {"★".repeat(Number(movie.rating))}
        </span>
  
        <button className="btn btn-danger btn-sm" onClick={() => deleteMovie(index)}>
          X
        </button>
      </li>
    );
  }
  
  export default Movie;