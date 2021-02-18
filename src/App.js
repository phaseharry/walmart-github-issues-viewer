import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IssueList from './Components/IssueList';
import DetailedIssue from './Components/DetailedIssue';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={IssueList} />
          <Route path="/issue/:issueId" component={DetailedIssue} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
