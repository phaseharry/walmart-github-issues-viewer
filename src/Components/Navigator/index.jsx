import React from 'react';
import styled from 'styled-components';
import { GitHub } from '@material-ui/icons';
import { THORAX_REPO } from '../../constants/Routes';
import { LIGHT_GRAY, SECONDARY } from '../../constants/colors';

const NavContainer = styled.nav`
  padding-top: 1rem;
  > div {
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    align-items: center;
    > a {
      color: ${SECONDARY};
    } 
    > a:hover {
      color: ${LIGHT_GRAY}
    }
  }
`;

const Navigator = (props) => {
  return (
    <NavContainer>
      <div>
        <a href={THORAX_REPO} target="_blank" rel="noreferrer">
          <GitHub fontSize="large"/>
        </a>
      </div>
    </NavContainer>
  )
}

export default Navigator;