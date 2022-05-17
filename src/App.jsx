import React from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import './App.css';
import LandingPage from "./Pages/LandingPage";
import MovieDetails from "./Pages/MovieDetails";




 function App() {

    return ( 
        <div>
            <header>
                <Link to='/'>Home</Link>
                <Link to='/movie'>Movie</Link>


                <h1>Movie</h1>
            </header>
            <main>
                <Routes>
                    <Route path="/" element = {<LandingPage />} />
                    <Route exact path="/movie/:movieId" element={<MovieDetails />} />
                </Routes>
            </main>
        </div>    
        
        
    )
}
export default App;

