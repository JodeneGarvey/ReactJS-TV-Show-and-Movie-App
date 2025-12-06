import './css/App.css'
import Favourites from './Pages/Favourites';
import Home from './Pages/Home';
import Shows from './Pages/Shows';
import Movies from './Pages/Movies'
import {Routes, Route} from "react-router-dom";
import { MovieProvider } from './contexts/MovieContext';
import NavBar from "./Components/Navbar";
import { ShowProvider } from './contexts/ShowContext';

function App() {
  

  return (
    <MovieProvider>
      <ShowProvider>
        <NavBar />
          <main className='main-content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Movies" element={<Movies />}/>
              <Route path="/Shows" element={<Shows />}/>
              <Route path="/favourites" element={<Favourites />}/>
          </Routes>
          </main>
      </ShowProvider>
    </MovieProvider>
   
  );
}



export default App;
