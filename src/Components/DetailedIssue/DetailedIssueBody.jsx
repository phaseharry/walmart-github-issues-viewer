import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { SECONDARY, LIGHT_GRAY } from '../../constants/colors';

const Container = styled.div`
  margin-top: 0.9rem;
`;

const MarkdownViewer = styled(ReactMarkdown)`
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 0 1rem;
  border: 0.5px solid ${SECONDARY};
  overflow: auto;
`;

const ContentHeader = styled.div`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 0.5px solid ${SECONDARY};
  padding: 0.5rem 1rem;
  color: ${LIGHT_GRAY};
  > span {
    font-weight: 500;
    font-size: 0.9rem;
    color: ${SECONDARY};
  }
`;

const DetailedIssueBody = ({ username, body }) => {
  return (
    <Container>
      <ContentHeader>
        <span>{username}</span> commented 5 days ago
      </ContentHeader>
      <MarkdownViewer>
        {body}
      </MarkdownViewer>
    </Container>
  )
}

export default DetailedIssueBody;