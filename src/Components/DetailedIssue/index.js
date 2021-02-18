import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailedIssue = ({ issues }) => {
  const [currentIssue, setCurrentIssue] = useState({});
  const { issueId } = useParams();

  useEffect(() => {
    const issue = issues.find(is => is.id.toString() === issueId);
    setCurrentIssue(issue);
  }, [issues, issueId]);

  console.log(currentIssue);

  return (
    <div>DETAILED ISSUE</div>
  )
}

export default DetailedIssue;