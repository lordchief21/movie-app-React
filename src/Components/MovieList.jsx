
import MovieCard from './MovieCard';
import movies from '../movies.json';
import styles from './MovieList.module.css';

console.log(movies)

export function Movielist() {
  return (
    
    <ul className={styles.movielist} >{movies.map((movie) => (
    
    <MovieCard key={movie.id} movie={movie}  />)
    
    )};
    </ul>
   
  )
}
