import React from 'react';
import { useParams } from 'react-router-dom';

const DetailedIssue = (props) => {
  const { issueId } = useParams();
  console.log(issueId);
  return (
    <div>DETAILED ISSUE</div>
  )
}

export default DetailedIssue;