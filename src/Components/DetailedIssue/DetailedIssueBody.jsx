import React from 'react';
import styled from 'styled-components';
import MarkdownViewer from '../MarkdownViewer';
import ContentHeader from './ContentHeader';

const DetailedIssueContainer = styled.div`
  margin-top: 0.9rem;
`;

const DetailedIssueBody = ({ username, body }) => {
  return (
    <DetailedIssueContainer>
      <ContentHeader>
        <span>{username}</span> commented 5 days ago
      </ContentHeader>
      <MarkdownViewer>
        {body}
      </MarkdownViewer>
    </DetailedIssueContainer>
  )
}

export default DetailedIssueBody;