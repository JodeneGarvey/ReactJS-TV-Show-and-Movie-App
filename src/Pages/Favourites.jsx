import "../css/Favourites.css"
import { useMovieContext } from "../contexts/MovieContext";
import { useShowContext } from "../contexts/ShowContext";
import MovieCard from "../Components/MovieCard";
import ShowCard from "../Components/ShowCard";


function Favourites() {
    const { favourites: movieFavourites } = useMovieContext();
    const { favourites: showFavourites } = useShowContext();

    const hasFavourites = (movieFavourites && movieFavourites.length > 0) || 
                          (showFavourites && showFavourites.length > 0);

    if (hasFavourites) {
        return (
            <div className="favourites">
                <h2>Your Favourites</h2>

                {movieFavourites && movieFavourites.length > 0 && (
                    <>
                    <h3 class="sub-title">Movies</h3>
                    <div className="movies-grid">
                        
                        {movieFavourites.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </div>
                    </>
                )}

                {showFavourites && showFavourites.length > 0 && (
                    <>
                    <h3 class="sub-title">TV Shows</h3>
                    <div className="movies-grid">
                        {showFavourites.map((show) => (
                            <ShowCard show={show} key={show.id} />
                        ))}
                    </div>
                    </>
                )}
            </div>
        );
    }

    return (
        <div className="favourite-empty">
            <h2>No Favourite Movies or TV Shows Yet</h2>
        </div>
    );
}

export default Favourites;