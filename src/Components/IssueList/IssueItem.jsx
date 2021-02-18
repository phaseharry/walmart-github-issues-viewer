import React from 'react';
import styled from 'styled-components';

const IssueItemContainer = styled.div`

`;

const IssueItem = ({ title, number, state }) => {
  return (
    <IssueItemContainer>
      <div>{title} {number} {state}</div>
    </IssueItemContainer>
  )

}

export default IssueItem;