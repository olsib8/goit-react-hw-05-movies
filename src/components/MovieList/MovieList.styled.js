import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListContainer = styled.ul`
  padding-left: 16px;
`;

export const LinkTitle = styled(Link)`
  text-decoration: underline;
  color: black;
  font-weight: 500;
  font-size: 20px;
  color: black;
  :hover {
    color: blue;
  }
`;

export const MovieItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
