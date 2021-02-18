import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IssueList from './Components/IssueList';
import DetailedIssue from './Components/DetailedIssue';
import { getJson } from './utils/fetchWrapper';
import { THORAX_ISSUES } from './constants/APIRoutes';
import './App.css';

function App() {
  const [issues, setIssues] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIssues(){
      setLoading(true);
      const data = await getJson(THORAX_ISSUES);
      setIssues(data);
      console.log(data);
      setLoading(false);
    }
    fetchIssues();
  }, []);

  return (
    <div className="App">
      {
      isLoading ? <h1>Loading...</h1> : 
      <Router>
        <Switch>
          <Route path="/issue/:issueId" component={() => <DetailedIssue issues={issues} />} />
          <Route path="/" component={() => <IssueList issues={issues} />} />
        </Switch>
      </Router>
      }
    </div>
  );
}

export default App;
