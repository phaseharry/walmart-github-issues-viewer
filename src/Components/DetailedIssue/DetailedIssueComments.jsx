import React from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem';

const DetailedIssueBodyContainer = styled.div`
  margin-top: 0.7rem;
`;

const CommentsHeader = styled.div`
  margin-bottom: 0.7rem;
  > span {
    margin-left: 5px;
    font-size: 1rem;
  }
`;

const DetailedIssueBody = ({ commentList }) => {
  console.log(commentList);
  return (
    <DetailedIssueBodyContainer>
      <CommentsHeader>
        <span>
          {commentList.length > 0 ? "Comments" : "No Comments"}
        </span>
      </CommentsHeader>
      {commentList.map((comment, idx) => {
        const { user, body, created_at } = comment;
        return <CommentItem key={idx} user={user} body={body} createdAt={created_at} />;
      })}
    </DetailedIssueBodyContainer>
  )
}

export default DetailedIssueBody;