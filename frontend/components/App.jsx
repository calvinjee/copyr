import React from 'react';
import { Route, Link } from 'react-router-dom';
import DashboardContainer from './dashboard_container';
import SessionFormContainer from './session_form_container';

const App = (props) => {
  return (
    <div>
      <h1>copyr</h1>
      <Route exact path ="/" component={DashboardContainer} />
      <Route exact path ="/dashboard" component={DashboardContainer} />

      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;
