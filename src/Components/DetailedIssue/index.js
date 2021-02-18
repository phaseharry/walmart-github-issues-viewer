import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailedIssueHeader from './DetailedIssueHeader';

const Container = styled.div`
  margin: 0 5vw;
`;

const DetailedIssue = ({ issues }) => {
  const [currentIssue, setCurrentIssue] = useState({});
  const { issueId } = useParams();

  useEffect(() => {
    const issue = issues.find(is => is.id.toString() === issueId);
    setCurrentIssue(issue);
  }, [issues, issueId]);

  const { title, number, state, user, comments } = currentIssue;
  
  return (
    <Container>
      <DetailedIssueHeader title={title} issueNumber={number} state={state} username={user.login} comments={comments} />
    </Container>
  )
}

export default DetailedIssue;