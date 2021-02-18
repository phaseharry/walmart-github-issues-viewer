import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import Tooltip from '@material-ui/core/Tooltip';
import { GREEN, SECONDARY } from '../../constants/colors';
import { DETAILED_ISSUE } from '../../constants/Routes'

const DetailedIssueLinks = styled(Link)`
  color: white;
  text-decoration: none;
`;

const IssueItemContainer = styled.div`
  border: 1px solid ${SECONDARY};
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

const IssueItem = ({ title, number, state, user, id, createdAt, style }) => {
  const dateIssueOpened = format(new Date(createdAt), "MMMM d, y");
  return (
    <IssueItemContainer style={style}>
      <ItemContent>
        <ContentRowOne>
          {state === "open" ? 
            <Tooltip title="Open issue" placement="top">
              <OpenIssueIcon fontSize="small" />
            </Tooltip>
          : null}
          <DetailedIssueLinks to={`${DETAILED_ISSUE}/${id}`}>
            <span>{title}</span>
          </DetailedIssueLinks>
        </ContentRowOne>
        <ContentRowTwo>
          <span>#{number} opened on {dateIssueOpened} by </span>
          <a href={user.html_url} rel="noreferrer" target="_blank">{user.login}</a>
        </ContentRowTwo>
      </ItemContent>
    </IssueItemContainer>
  )
}

export default IssueItem;