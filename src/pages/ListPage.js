import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../actions/authAction';

import Button from '@material-ui/core/Button';

const style = (theme) => {
  return {
    button: {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      color: 'white',
    },
  };
};

class ListPage extends React.Component {
  constructor(props){
    super(props)
    console.log('ListPage props', props);
    this.state = {
      setPageName: props.setPageName,
      previousPage: props.previousPage,
    }
    this.onClick = this.onClick.bind(this);
  };

  onClick(e) {
    console.log('event', this.props);
    this.props.setPage('ListPage');
  };

  render() {
    const {button} = style({});
    return (
      <div>
        <p>ListPage</p>
        <p>props setPage {this.props.setPageName}</p>
        <p>state setPage {this.state.setPageName}</p>
        <Button style={button} onClick={this.onClick}>
          set page 
        </Button>
      </div>
    );
  }
};

const intoProps = state => {
  console.log('ListPage intoProps state:', state);
  return { ...state, setPageName: state.auth.previousPage };
};

const intoActions = {
  setPage: authActions.setPage,
};

export default connect(intoProps, intoActions)(ListPage);
