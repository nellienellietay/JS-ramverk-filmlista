import AddMovieForm from "./components/AddMovieForm/AddMovieForm";
import "./App.css";

function App() {

  return (
    <div className="container">
      <h1>Min filmlista</h1>

      {/* denna refererar till addmovieform komoneneten vi redan 
      skapat så detta visar att allt som finns i en andra filen ska ligga här */}
      <AddMovieForm />

    </div>
  );
}

// Gör så att app-komponenten kan användas i andra filer
export default App;
