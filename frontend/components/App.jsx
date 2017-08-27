import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomeContainer from './home_container';
import DashboardContainer from './dashboard_container';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from '../util/route_util';

const App = (props) => {
  return (
    <div>
      <AuthRoute exact path ="/" component={HomeContainer} />
      <Route path ="/dashboard" component={DashboardContainer} />
      <Route path="/edit/:id" component={DashboardContainer} />
    </div>
  );
};

export default App;


// <AuthRoute path="/login" component={SessionFormContainer} />
// <AuthRoute path="/signup" component={SessionFormContainer} />
