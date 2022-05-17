
import MovieCard from './MovieCard';
import styles from './MovieList.module.css';
import { useEffect, useState } from 'react';
import  get  from '../utils/apiRequest';



export default function Movielist() {
  
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, [])


  return (
    
    <ul className={styles.movielist} >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))};
    </ul>
   
  );
}
