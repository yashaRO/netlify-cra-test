import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const A = () => (
  <div>
    A
  </div>
);
const B = () => (
  <div>
    B
  </div>
);
const C = () => (
  <div>
    C
  </div>
);

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/about" component={A} />
      <Route path="/topics" component={B} />
      <Route path="/" component={C} />
    </Switch>
  </Router>
);

export default Routes;