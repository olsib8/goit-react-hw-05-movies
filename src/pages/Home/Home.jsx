import { useEffect, useState } from 'react';
import { getTrandingMovies } from 'services/api';

import { Container, Title } from './Home.styled';
import { MovieList } from '../../components/MovieList/MovieList';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    const renderTrandingMovies = async () => {
      try {
        const trandingMovies = await getTrandingMovies();
        setTrandingMovies(trandingMovies);
      } catch (error) {
        console.log(error);
      }
    };
    renderTrandingMovies();
  }, []);
  return (
    <Container>
      <Title>Trending today</Title>
      <MovieList movies={trandingMovies} />
    </Container>
  );
};
//
export default Home;
