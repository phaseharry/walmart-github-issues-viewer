import IssueList from "."
import React from 'react';

const IssueItem = ({ title, number, state }) => {
  return (
    <div>{title} {number} {state}</div>
  )

}

export default IssueItem;