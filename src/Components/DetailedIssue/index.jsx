import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getJson } from '../../utils/fetchWrapper';
import DetailedIssueHeader from './DetailedIssueHeader';
import DetailedIssueBody from './DetailedIssueBody';
import DetailedIssueComments from './DetailedIssueComments';
import { LIGHT_GRAY } from '../../constants/colors';

const Container = styled.div`
  margin: 0 5vw;
  > hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const PullRequestLinkContainer = styled.div`
  margin-top: 5px;
  padding-left: 5px;
  > a {
    color: white;
    text-decoration: none;
  }
  > a:hover {
    color: ${LIGHT_GRAY};
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

  const { title, number, state, user, comments, body, created_at, html_url } = currentIssue;
  
  return (
    <Container>
      <DetailedIssueHeader title={title} issueNumber={number} state={state} user={user} comments={comments} />
      <PullRequestLinkContainer>Pull Request: <a href={html_url} target="_blank" rel="noreferrer">{html_url}</a></PullRequestLinkContainer>
      <hr/>
      <DetailedIssueBody user={user} body={body} createdAt={created_at} />
      <DetailedIssueComments commentList={commentList} />
    </Container>
  )
}

export default DetailedIssue;