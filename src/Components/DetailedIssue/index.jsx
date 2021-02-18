import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getJson } from '../../utils/fetchWrapper';
import DetailedIssueHeader from './DetailedIssueHeader';
import DetailedIssueBody from './DetailedIssueBody';
import DetailedIssueComments from './DetailedIssueComments';

const Container = styled.div`
  margin: 0 5vw;
  > hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const DetailedIssue = ({ issues }) => {
  const [currentIssue, setCurrentIssue] = useState({});
  const [commentList, setCommentList] = useState([]);
  const { issueId } = useParams();

  useEffect(() => {
    async function fetchComments(){
      const res = await getJson(issue.comments_url);
      console.log(res);
      setCommentList(res);
    }
    const issue = issues.find(is => is.id.toString() === issueId);
    if(issue){
      setCurrentIssue(issue);
      if(issue.comments > 0){
        fetchComments();
      }
    }
  }, [issues, issueId]);

  const { title, number, state, user, comments, body, created_at } = currentIssue;
  const username = user ? user.login : '';
  
  return (
    <Container>
      <DetailedIssueHeader title={title} issueNumber={number} state={state} username={username} comments={comments} />
      <hr/>
      <DetailedIssueBody username={username} body={body} createdAt={created_at} />
      <DetailedIssueComments commentList={commentList} />
    </Container>
  )
}

export default DetailedIssue;