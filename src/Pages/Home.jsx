import MovieCard from "../Components/MovieCard";
import ShowCard from "../Components/ShowCard";
import {useState, useEffect} from "react";
import { SearchMovies, SearchShows, getPopularMovies, getPopularShows } from "../services/api";
import "../css/Home.css"

function Home(){
    const [searchQuery, setSearchQuery] = useState("")

    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    
    
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch (err){
                console.log(err)
                setError("Fail to Load movies ...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()

        
    }, [])

    useEffect(() => {
        const loadPopularShows = async () => {
            try {
                const popularShows = await getPopularShows()
                setShows(popularShows)
            }catch (err){
                console.log(err)
                setError("Fail to Load Shows ...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularShows()

        
    }, [])

    const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
        const movieResults = await SearchMovies(searchQuery);
        const showResults = await SearchShows(searchQuery);

        setMovies(movieResults || []);
        setShows(showResults || []);

        setError(null);
    } catch (err) {
        console.error(err);
        setError("Failed to find movies or shows.");
    } finally {
        setLoading(false);
    }
};
    return (
            <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input 
                    type="text" 
                    placeholder="Search for Movies or TV Shows..." 
                    className="search-input" 
                    value={searchQuery}
                    onChange ={(e) => setSearchQuery(e.target.value)}
                    /> 
                    <button type="submit" className="search-button">Search</button>
                </form>
                

                {error && <div className="error-message">{error}</div>}
                {loading ? (
                    <div className="loading">Loading... </div>
                ) : (
                    <><h2 className="section-title">Movies</h2>
                        <div className="movies-grid">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                       
                    </div>
                    <h2 className="section-title">TV Shows</h2>

                    <div className="movies-grid">
                        {shows.map((show) => (
                            <ShowCard show={show} key={show.id} />
                        ))}
                    </div>
                    </>
                    
                )}
                </div>
                    
                
        );

        


}

export default Home