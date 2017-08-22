import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomeContainer from './home_container';
import DashboardContainer from './dashboard_container';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from '../util/route_util';

const App = (props) => {
  return (
    <div>
      <h1>copyr</h1>
      <AuthRoute exact path ="/" component={HomeContainer} />
      <Route path ="/dashboard" component={DashboardContainer} />
    </div>
  );
};

export default App;


// <AuthRoute path="/login" component={SessionFormContainer} />
// <AuthRoute path="/signup" component={SessionFormContainer} />
