import React from 'react';
import styled from 'styled-components';
import { formatDistance, subDays } from 'date-fns'
import MarkdownViewer from './MarkdownViewer';
import ContentHeader from './ContentHeader';

const DetailedIssueContainer = styled.div`
  margin-top: 0.9rem;
`;

const DetailedIssueBody = ({ username, body, createdAt }) => {
  const timePassed = createdAt ? formatDistance(subDays(new Date(createdAt), 3), new Date(), { addSuffix: true }) : '';
  return (
    <DetailedIssueContainer>
      <ContentHeader>
        <span>{username}</span> commented {timePassed}
      </ContentHeader>
      <MarkdownViewer>
        {body}
      </MarkdownViewer>
    </DetailedIssueContainer>
  )
}

export default DetailedIssueBody;