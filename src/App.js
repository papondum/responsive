import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TopMenu from './containers/TopMenu'
import LeftMenu from './containers/LeftMenu'
export default function App() {
  return (
    <div id="root">
      <Router>
        <Switch>
          <Route exact path="/">
            <TopMenu />
          </Route>
          <Route exact path="/left">
            <LeftMenu />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
