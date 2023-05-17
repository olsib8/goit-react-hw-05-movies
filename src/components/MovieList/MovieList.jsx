import { useLocation } from 'react-router-dom';
import { MovieListContainer, MovieItem, LinkTitle } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieListContainer>
      {movies.map(({ id, original_title }) => (
        <MovieItem key={id}>
          <LinkTitle to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </LinkTitle>
        </MovieItem>
      ))}
    </MovieListContainer>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
