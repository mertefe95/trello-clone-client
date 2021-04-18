import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';
import LoggedOut from './components/LoggedOut';
import Boards from './components/Boards';

const App: FunctionComponent = function () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logged-out" component={LoggedOut} />
          <Route exact path="/boards" component={Boards} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
