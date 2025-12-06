import "../css/ShowCard.css"
import { useShowContext } from "../contexts/ShowContext";

function ShowCard({show}) {
    const {isFavourite, addToFavourites, removeFromFavourites} = useShowContext();
    const favourite = isFavourite(show.id)

    function onFavouriteClick (e){
        e.preventDefault()
        if (favourite) removeFromFavourites(show.id)
            else addToFavourites(show)
    }

    return <div className="show-card">
        <div className="show-poster">
            <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name}/>
            <div className="movie-overlay">
                <button className={`favourites-btn ${favourite ? "active" : ""}`} onClick={onFavouriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="show-info">
            <h3>{show.name}</h3>
            <p>{show.first_air_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default ShowCard