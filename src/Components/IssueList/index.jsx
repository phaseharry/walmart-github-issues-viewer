import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getJson } from '../../utils/fetchWrapper';
import { THORAX_ISSUES } from '../../constants/APIRoutes';
import IssueItem from './IssueItem';

const Container = styled.div`
  color: white;
`;

const IssueListItems= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
`;

const AppTitle = styled.h1`
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const PaginationContainer = styled.div`
  font-size: 1rem;
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
      setPagination({
        currentPage: 1,
        pageLimit: Math.floor(data.length / 10),
      })
      setDisplayed(data.slice(0, 10));
    }
    fetchIssues();
  }, []);

  // listens for changes in page number
  useEffect(() => {
    const startIdx = ((pagination.currentPage - 1) * 10);
    const displayedPages = issues.slice(startIdx, startIdx + 10);
    setDisplayed(displayedPages);
  }, [pagination.currentPage, issues])

  const changePage = (pageNumber) => {
    setPagination({
      ...pagination,
      currentPage: pageNumber,
    })
  } 

  const generatePagination = () => {
    return [...Array(pagination.pageLimit)].map((e, i) => {
      return <span key={i} onClick={() => changePage(i + 1)}>{i + 1}</span>
    })
  }

  return (
    <Container>
    <AppTitle>Thorax Github Issues</AppTitle>
    <IssueListItems>
      {displayed.map((issue, idx) => {
        const { title, number, state } = issue;
        return <IssueItem key={idx} title={title} number={number} state={state} />
      })}
    </IssueListItems>
    <PaginationContainer>
      {generatePagination()}
    </PaginationContainer>
    </Container>
  )
}

export default IssueList;