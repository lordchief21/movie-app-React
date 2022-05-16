import React from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/apiRequest";
import styles from './MovieDetails.module.css'
import { useEffect, useState } from 'react';


export default function MovieDetails () {
const {movieId} = useParams();
const [movie, setMovie] =useState(null)

useEffect(() => {
  get(`/movie/${movieId}`).then((data) =>{
      setMovie(data);
  })
}, [movieId])


if(!movie) {
    return null
}


const imageUrl = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetail}`}>
                <p ><strong><em>Title:</em></strong> {movie.original_title}</p>
                <p><strong><em>Sinopsis:</em></strong> {movie.overview}</p>
                {/* Con el .map es mas escalable, el join es para separarlo */}
                <p><strong><em>Genres:</em></strong> {movie.genres.map(g => g.name).join(", ")}.</p>
            </div>
        </div>

    )

}