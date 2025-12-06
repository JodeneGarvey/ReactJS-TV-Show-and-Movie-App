import {Link} from "react-router-dom";
import "../css/Navbar.css";

function Navbar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">TV Shows and Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/movies" className="nav-link">Movies</Link>
            <Link to="/shows" className="nav-link">TV Shows</Link>
            <Link to="/favourites" className="nav-link">Favourites</Link>
        </div>
    </nav>
}

export default Navbar