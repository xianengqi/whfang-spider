import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  );
}

export default Routes;
