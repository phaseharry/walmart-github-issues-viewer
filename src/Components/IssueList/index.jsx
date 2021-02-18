import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';
import { getJson } from '../../utils/fetchWrapper';
import { THORAX_ISSUES } from '../../constants/APIRoutes';
import IssueItem from './IssueItem';

const Container = styled.div`
  color: white;
`;

const IssueListItems= styled.div`
  margin: 0 auto;
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
  margin: 2rem auto 0 auto;
  width: 500px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
`;

const ITEMS_PER_PAGE = 14;

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [isLoading, setLoading] = useState(true);
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
        pageLimit: Math.ceil(data.length / ITEMS_PER_PAGE),
      })
      setDisplayed(data.slice(0, ITEMS_PER_PAGE));
      setLoading(false);
    }
    fetchIssues();
  }, []);

  // listens for changes in page number
  useEffect(() => {
    const startIdx = ((pagination.currentPage - 1) * ITEMS_PER_PAGE);
    const displayedPages = issues.slice(startIdx, startIdx + ITEMS_PER_PAGE);
    setDisplayed(displayedPages);
  }, [pagination.currentPage, issues])

  const changePage = (event, value) => {
    setPagination({
      ...pagination,
      currentPage: value,
    })
  };

  if(isLoading) return <h4>Loading...</h4>;

  return (
    <Container>
    <AppTitle>Thorax Github Issues</AppTitle>
    <IssueListItems>
      {displayed.map((issue, idx) => {
        const { title, number, state, user } = issue;
        return (
          <IssueItem 
            key={idx} 
            title={title} 
            number={number} 
            state={state} 
            user={user}
            style={idx === 0 ? { borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }
              : idx === displayed.length - 1 ? { borderBottomRightRadius: "6px", borderBottomLeftRadius: "6px" } 
              : {}
            } 
          />
        )
      })}
    </IssueListItems>
    <PaginationContainer>
      <Pagination count={pagination.pageLimit} page={pagination.currentPage} onChange={changePage} shape="rounded"/>
    </PaginationContainer>
    </Container>
  );
}

export default IssueList;