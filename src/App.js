import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IssueList from './Components/IssueList';
import DetailedIssue from './Components/DetailedIssue';
import Navigator from './Components/Navigator';
import Loading from './Components/Loading';
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
      setLoading(false);
    }
    fetchIssues();
  }, []);

  return (
    <div className="App">
      {
      isLoading ? <Loading />: 
      <Router>
        <Navigator />
        <Switch>
          <Route path="/issue/:issueId" component={(props) => <DetailedIssue issues={issues} {...props}/>} />
          <Route path="/" component={(props) => <IssueList issues={issues} {...props} />} />
        </Switch>
      </Router>
      }
    </div>
  );
}

export default App;
