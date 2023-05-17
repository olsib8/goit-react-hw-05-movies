import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/api';
import { CastItem, CastInfo } from './Cast.styled';
import noImage from '../image/no-image.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const baseURL = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    getMovieCast(movieId)
      .then(setCast)
      .catch(error => console.log(error));
  }, [movieId]);

  if (cast.length === 0) {
    return "We don't have any cast information on this movie.";
  }
  return (
    <>
      <ul>
        {cast.map(({ profile_path, name, character, id }) => {
          return (
            <CastItem key={id}>
              <img
                src={profile_path ? `${baseURL}${profile_path}` : noImage}
                alt=""
                width="200"
              />
              <CastInfo>{name}</CastInfo>
              <CastInfo>Character: {character}</CastInfo>
            </CastItem>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
