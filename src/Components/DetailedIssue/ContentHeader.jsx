import styled from 'styled-components';
import { SECONDARY, LIGHT_GRAY } from '../../constants/colors';

const ContentHeader = styled.div`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 0.5px solid ${SECONDARY};
  padding: 0.5rem 1rem;
  color: ${LIGHT_GRAY};
  > a {
    color: white;
    text-decoration: none;
  }
  > span {
    font-weight: 500;
    font-size: 0.9rem;
    color: ${SECONDARY};
  }
`;

export default ContentHeader;