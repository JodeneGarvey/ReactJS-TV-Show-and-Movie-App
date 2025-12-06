import ShowCard from "../Components/ShowCard";
import {useState, useEffect} from "react";
import { SearchShows, getPopularShows } from "../services/api";
import "../css/Home.css"

function Shows(){
    const [searchQuery, setSearchQuery] = useState("")

    const [shows, setShows] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const loadPopularShows = async () => {
            try {
                const popularShows = await getPopularShows()
                setShows(popularShows)
            }catch (err){
                console.log(err)
                setError("Fail to Load movies ...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularShows()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try{
            const searchResults = await SearchShows(searchQuery)
            setShows(searchResults)
            setError(null)

        }catch(err){
            console.log(err)
            setError("Failed to Find TV Shows")

        }finally{
            setLoading(false)
        }

    }
    return (
            <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input 
                    type="text" 
                    placeholder="Search for TV Shows..." 
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
                    <div className="movies-grid">
                    {shows.map((show) => (
                        <ShowCard show={show} key={show.id}/>
                    ))}
                </div>
                )}
                </div>
                
        );
}

export default Shows