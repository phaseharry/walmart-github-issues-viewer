import React from 'react';
import styled from 'styled-components';
import { formatDistance, subDays } from 'date-fns'
import MarkdownViewer from './MarkdownViewer';
import ContentHeader from './ContentHeader';

const DetailedIssueContainer = styled.div`
  margin-top: 0.9rem;
`;

const DetailedIssueBody = ({ user, body, createdAt }) => {
  const timePassed = createdAt ? formatDistance(subDays(new Date(createdAt), 3), new Date(), { addSuffix: true }) : '';
  const username = user ? user.login : '';
  const htmlUrl = user ? user.html_url : '';
  return (
    <DetailedIssueContainer>
      <ContentHeader>
        <a href={htmlUrl} rel="noreferrer" target="_blank">{username} </a> commented {timePassed}
      </ContentHeader>
      <MarkdownViewer>
        {body}
      </MarkdownViewer>
    </DetailedIssueContainer>
  )
}

export default DetailedIssueBody;