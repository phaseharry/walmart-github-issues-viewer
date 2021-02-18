import React from 'react';
import styled from 'styled-components';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import { GREEN, LIGHT_GRAY } from '../../constants/colors';

const IssueTitle = styled.span`
  display: block; 
  font-size: 2em; 
  padding-top: 0.67em; 
  > span {
    color: ${LIGHT_GRAY};
    font-weight: 300;
  }
`;

const OpenIssueTag = styled.div`
  width: 75px;
  height: 100%;
  color: ${GREEN};
  background-color: #3fb9501a;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3fb95066;
  border-radius: 2rem;
  padding: 2.5px 0;
  > span {
    margin-left: 2px;
    font-size: 1rem;
  }
`;

const IssueSubHeader = styled.div`
  display: flex;
  align-items: center;
  > span {
    margin-left: 7px;
    color: ${LIGHT_GRAY};
  }
`;

const DetailedIssueHeader = ({ title, issueNumber, username, comments, state }) => {
  return (
    <>
      <IssueTitle>{title} <span>#{issueNumber}</span></IssueTitle>
      <IssueSubHeader>
        {state === "open" ?   
        <OpenIssueTag>
          <ErrorOutline fontSize="small"/> <span>Open</span>
        </OpenIssueTag> : null}
        <span>{username} opened this issue · {comments} comments</span>
      </IssueSubHeader>
    </>
  )
}

export default DetailedIssueHeader;