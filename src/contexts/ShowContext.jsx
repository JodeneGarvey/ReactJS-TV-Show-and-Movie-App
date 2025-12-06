import { createContext, useState, useContext, useEffect } from "react";

const ShowContext = createContext()

export const useShowContext = () => useContext(ShowContext)

export const ShowProvider = ({children}) => {


    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("show-favourites")

        if (storedFavs) setFavourites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('show-favourites', JSON.stringify(favourites))
    }, [favourites])

    const addToFavourites = (show) => {
        setFavourites(prev => [...prev, show])
    }

    const removeFromFavourites = (show) => {
        setFavourites(prev => prev.filter(show => show.id !== showId))
    }

    const isFavourite = (showId) => {
        return favourites.some(show => show.id === showId)
    }

    const value = {
        favourites,
        addToFavourites,
        isFavourite,
        removeFromFavourites
    }

    return <ShowContext.Provider value={value}>
        {children}
    </ShowContext.Provider>
}