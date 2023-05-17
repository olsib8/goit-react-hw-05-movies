import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesSection = styled.div`
  padding: 28px 32px;
`;

export const MoviesForm = styled.form`
  display: inline-flex;
  margin-bottom: 28px;
`;
export const MoviesInput = styled.input`
  padding: 8px;
  width: 200px;
  font-size: 18px;
  outline: transparent;
  border: 1px solid #e1d3c1;
  :hover,
  :focus {
    border-color: #b4a89a;
  }
`;
export const Button = styled.button`
  width: 70px;
  height: 40px;
  font-size: 16px;
  background-color: #7e7bc2;
  border: 1px solid #e1d3c1;
  :hover {
    background-color: blue;
    color: #ffffff;
  }
`;

export const MoviesListContainer = styled.ul`
  padding-left: 16px;
`;

export const LinkTitle = styled(Link)`
  text-decoration: underline;
  color: black;
  font-weight: 500;
  font-size: 20px;
  color: black;
  :hover {
    color: #c27ba0;
  }
`;

export const MoviesItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
