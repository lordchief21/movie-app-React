import styles from './MovieCard.module.css';

export default function MovieCard({movie}) {

  const imageUrl = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  
  return (
     <li className={styles.movieCard} >
       <img src={imageUrl} alt='Poster de película' className={styles.movieImage}  />
       <div className={styles.movieTitle}>
         <span>{movie.title}</span>
        </div>
      </li>
    
   
  )
}
