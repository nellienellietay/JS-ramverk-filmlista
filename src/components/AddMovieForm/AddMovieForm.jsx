// komponent för formuläret där användaren till en film
import { useState } from "react";

function AddMovieForm() {

    // title/rating = värdena(datan som användaren angivit)
    // setTitle/setRating = funktioner som uppdaterar värdena
    const [title, setTitle] = usestate("");
    const [rating, setRating] = usestate("0");
    
    return (
        <form>
            <fieldset>

                <legend>Läg till en film</legend>
                <label htmlFor="title-field">Titel:</label>
                <input type= "text" id="title-field" className="form-control" value={title} onChange={(event) => setTitle(event.target.value)}/>

                <label htmlFor="rating-field">Betyg:</label>
                <select id="rating-field" className="form-control" value={rating} onChange={(event) => setRating(event.target.value)} >

                    <option value="0">Välj betyg här</option>
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