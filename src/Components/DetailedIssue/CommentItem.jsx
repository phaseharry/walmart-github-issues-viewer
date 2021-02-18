import React from 'react';
import styled from 'styled-components';
import ContentHeader from './ContentHeader';
import MarkdownViewer from '../MarkdownViewer';

const ItemContainer = styled.div`
  margin-bottom: 0.6rem;
`;


const CommentItem = ({ user, body, created_at }) => {
  return (
    <ItemContainer>
       <ContentHeader>
        <span>{user.login}</span> commented 5 days ago
      </ContentHeader>
      <MarkdownViewer>
        {body}
      </MarkdownViewer>
    </ItemContainer>
  )
}

export default CommentItem;