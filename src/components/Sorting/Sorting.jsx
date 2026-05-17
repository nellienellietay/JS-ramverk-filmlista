function Sorting({ sortByTitle, sortByRating }) {
    return (
      <div className="mt-3">
        <button className="btn btn-primary m-2" onClick={sortByTitle}>
          Sortera alfabetiskt
        </button>
  
        <button className="btn btn-primary m-2" onClick={sortByRating}>
          Sortera efter betyg
        </button>
      </div>
    );
  }
  
  export default Sorting;