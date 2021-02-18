import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getJson } from '../../utils/fetchWrapper';
import { THORAX_ISSUES } from '../../constants/APIRoutes';

const IssueListContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppTitle = styled.h1`
  margin: 0 auto;
  padding: 20px;
  color: white;
  text-align: center;
`;

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageLimit: 1,
  });

  useEffect(() => {
    async function fetchIssues(){
      const data = await getJson(THORAX_ISSUES);
      setIssues(data);
      setDisplayed(data.slice(0, 10));
      setPagination({
        currentPage: 1,
        pageLimit: Math.floor(data.length / 10),
      })
    }
    fetchIssues();
  }, []);

  const generatePagination = () => {
    return [...Array(pagination.pageLimit)].map((e, i) => {
      return <span key={i}>{i + 1}</span>
    })
  }

  console.log(pagination);
  return (
    <>
    <AppTitle>Thorax Github Issues</AppTitle>
    <IssueListContainer>
      {displayed.map((issue, idx) => {
        return (
        <div key={idx}>
          {issue.url}
        </div>);
      })}
      <div>
        {generatePagination()}
      </div>
    </IssueListContainer>
    </>
  )
}

export default IssueList;