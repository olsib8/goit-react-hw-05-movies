import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  padding: 16px 28px;
`;

export const LinkBtn = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 20px;
  color: black;
  :hover {
    color: blue;
  }
`;

export const AddInfo = styled.div`
  margin-top: 16px;
`;

export const AddInfoTitle = styled.p`
  font-size: 16px;
`;

export const AddInfoItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const AddInfoWrapper = styled.div`
  padding: 16px;
`;

export const AddInfoItemLink = styled(Link)`
  color: green;
  :hover {
    color: blue;
  }
`;
