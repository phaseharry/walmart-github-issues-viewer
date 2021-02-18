import React from 'react';
import styled from 'styled-components';
import { formatDistance, subDays } from 'date-fns'
import ContentHeader from './ContentHeader';
import MarkdownViewer from './MarkdownViewer';

const ItemContainer = styled.div`
  margin-bottom: 0.6rem;
`;

const CommentItem = ({ user, body, createdAt }) => {
  const timePassed = createdAt ? formatDistance(subDays(new Date(createdAt), 3), new Date(), { addSuffix: true }) : '';
  return (
    <ItemContainer>
       <ContentHeader>
       <a href={user.html_url} rel="noreferrer" target="_blank">{user.login} </a>
        commented {timePassed}
      </ContentHeader>
      <MarkdownViewer>
        {body}
      </MarkdownViewer>
    </ItemContainer>
  )
}

export default CommentItem;