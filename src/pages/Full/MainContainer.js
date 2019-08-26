import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import routes from '../../routes';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={route.name}
              path={route.path}
              exact={route.exact}
              name={route.name}
              component={route.component}
            />
          );
        })}
      </Switch>
    );
  }
}

export default withRouter(MainContainer);