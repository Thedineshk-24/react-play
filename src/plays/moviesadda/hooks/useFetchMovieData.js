import { useEffect, useState } from 'react';

const useMovieData = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&page=${page}`
        );
        const data = await response.json();
        const formattedData = data.results.map((movie) => ({
          title: movie.title,
          genre: movie.genre_ids.join(', '),
          rating: movie.vote_average,
          description: movie.overview,
          poster: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
        }));
        setMovies((prevMovies) => [...prevMovies, ...formattedData]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 200 &&
        !isLoading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  return { movies, setPage };
};

export default useMovieData;
