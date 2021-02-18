import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';
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

const ITEMS_PER_PAGE = 12;
const DEFAULT_PAGE = 1;

const IssueList = ({ issues }) => {
  const [displayed, setDisplayed] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: DEFAULT_PAGE,
    pageLimit: DEFAULT_PAGE,
  });

  useEffect(() => {
    setPagination({
      currentPage: DEFAULT_PAGE,
      pageLimit: Math.ceil(issues.length / ITEMS_PER_PAGE),
    })
    setDisplayed(issues.slice(0, ITEMS_PER_PAGE));
  }, [issues]);

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

  return (
    <Container>
      <AppTitle>Thorax Github Issues</AppTitle>
      <IssueListItems>
        {displayed.map((issue, idx) => {
          const { title, number, state, user, id } = issue;
          return (
            <IssueItem 
              key={idx} 
              title={title} 
              number={number} 
              state={state} 
              user={user}
              id={id}
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