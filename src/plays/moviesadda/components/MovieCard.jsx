// MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img alt={movie?.title} className="movie-card__poster" src={movie?.poster} />
      <div className="movie-card__info">
        <h2 className="movie-card__title">{movie?.title}</h2>
        <p className="movie-card__genre">{movie?.genre}</p>
        <p className="movie-card__rating">{movie?.rating}</p>
        <p className="movie-card__description">{movie?.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
