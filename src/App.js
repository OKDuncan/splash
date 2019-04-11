import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Wrapper from './components/Wrapper';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Team from './components/Team';
import Project from './components/Project';
import BasicSplash from './components/BasicSplash';

const App = () => (
  <Router >
    {/* <div className="body"> */}
    <Wrapper>
      <Switch>
        <Route exact path="/" render={props => <Redirect to={{ pathname: 'splash' }} />} />
        <Route path="/login" component={Login} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/team" component={Team} />
        <Route path="/project" component={Project} />
        <Route path="/splash" component={BasicSplash} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Wrapper>
    {/* </div> */}
  </Router>
);

export default App;
