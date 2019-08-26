import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from './Full/Header';
import MainContainer from './Full/MainContainer';

class FullPage extends React.Component {
  render() {
    return(
      <div>
        <Header {...this.props} />
        <MainContainer  {...this.props}/>
      </div>
    )
  }
}

export default withRouter(FullPage);
