import React from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.scss';
import useMovieData from './hooks/useFetchMovieData';
import MovieCard from './components/MovieCard';

function Moviesadda(props) {
  const { movies, setPage } = useMovieData();

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="pagination">
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      </div>
    </>
  );
}

export default Moviesadda;
