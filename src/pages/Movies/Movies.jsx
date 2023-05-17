import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from '../../services/api';
import { MovieList } from '../../components/MovieList/MovieList';
import {
  MoviesSection,
  MoviesForm,
  MoviesInput,
  Button,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieSearch = searchParams.get('query');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: query });
    setQuery('');
  };

  useEffect(() => {
    if (!movieSearch) return;

    async function renderMovie() {
      try {
        const moviesResult = await searchMovie(movieSearch);
        setMovies(moviesResult);
      } catch (error) {
        console.log(error);
      }
    }
    renderMovie();
  }, [movieSearch]);

  return (
    <MoviesSection>
      <MoviesForm onSubmit={handleSubmit}>
        <MoviesInput type="text" value={query} onChange={handleChange} />
        <Button type="submit">Search</Button>
      </MoviesForm>

      {!!movies.length && <MovieList movies={movies} />}
    </MoviesSection>
  );
};

export default Movies;
