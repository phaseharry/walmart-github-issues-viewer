import React from 'react';
import styled from 'styled-components';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import Tooltip from '@material-ui/core/Tooltip';
import { GREEN } from '../../constants/colors';

const IssueItemContainer = styled.div`
  border: 1px solid white;
  font-size: 1rem;
  width: 100%;
  height: 3.5rem;
  @media only screen and (min-width: 800px) {
    width: 70%;  
  }
`;

const OpenIssueIcon = styled(ErrorOutline)`
  margin-right: 5px;
  color: ${GREEN};
`;

const ContentRowOne = styled.div`
  display: flex;
  font-weight: 550;
`;

const ContentRowTwo = styled.div`
  margin-left: 10px;
  padding-top: 3px;
  font-size: 0.75rem;
  > a {
    color: white;
    text-decoration: none;
  }
  > a:hover {
    font-style: italic;
  }
`;

const ItemContent = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const IssueItem = ({ title, number, state, user, style }) => {
  return (
    <IssueItemContainer style={style}>
      <ItemContent>
        <ContentRowOne>
          {state === "open" ? 
            <Tooltip title="Open issue" placement="top">
              <OpenIssueIcon fontSize="small" />
            </Tooltip>
          : null}
          <span>{title}</span>
        </ContentRowOne>
        <ContentRowTwo>
          <span>#{number} opened by </span>
          <a href={user.html_url} rel="noreferrer" target="_blank">{user.login}</a>
        </ContentRowTwo>
      </ItemContent>
    </IssueItemContainer>
  )
}

export default IssueItem;