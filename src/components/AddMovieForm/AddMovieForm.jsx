import { useState } from "react";

function AddMovieForm({ addMovie }) {

    // State används här för att hålla reda på det användaren skriver och väljer i formuläret.
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("0");

    function handleSubmit(event) {
        event.preventDefault();

        if (title === "" || rating === "0") {
            alert("Fyll i både titel och betyg");
            return;
        }

        const movie = {
            title: title,
            rating: rating
        };

        // Här skickas den nya filmen till addMovie funktionen där filmlistan uppdateras.
        addMovie(movie);

        setTitle("");
        setRating("0");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>

                <legend>Lägg till en film</legend>
                <label htmlFor="title-field">Titel:</label>
                <input type= "text" id="title-field" className="form-control" placeholder="Skriv din filmtitel här..."value={title} onChange={(event) => setTitle(event.target.value)}/>

                <label htmlFor="rating-field">Betyg:</label>
                <select id="rating-field" className={`form-control ${rating === "0" ? "placeholder-colour" : ""}`} value={rating} onChange={(event) => setRating(event.target.value)} >

                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" className="btn btn-success mt-3" value="Spara film"/>
            </fieldset>
        </form>
    );
}

export default AddMovieForm;