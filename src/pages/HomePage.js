import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as authActions from '../actions/authAction';

const style = (theme) => {
  return {
    button: {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      // background: props =>
      //   props.color === 'red'
      //     ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      //     : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      // boxShadow: props =>
      //   props.color === 'red'
      //     ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
      //     : '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white',
      // height: 48,
      // padding: '0 30px',
      // margin: 8,
    },
  };
};

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      setPageName: props.setPageName,
      previousPage: props.previousPage,
    }
    this.onClick = this.onClick.bind(this);
  };

  componentWillReceiveProps(nextProps) {
    console.log('HomePage componentWillReceiveProps nextProps: ', nextProps);
    this.setState({setPageName : nextProps.setPageName});
  }

  onClick(e) {
    console.log('event', this.props);
    this.props.setPage('HomePage');
  };

  render() {
  const {button} = style({});
  const {setPageName} = this.props;
  console.log('render setPage: ', setPageName);
    return (
      <div>
        <p>HomePage</p>
        <p>props previous Page: {setPageName}</p>
        <p>state previous Page: {this.state.setPageName}</p>
        <Button style={button} onClick={this.onClick}>
          set page 
        </Button>
      </div>
    );
  }
};

const intoProps = (state) => {
  console.log('HomePage intoProps state: ', state)
  return {...state, setPageName: state.auth.previousPage, };
};

const intoActions = {
    setPage: authActions.setPage,
};

// export default HomePage;
// export default connect(intoProps, {setPage})(HomePage);
export default connect(intoProps, intoActions)(HomePage);
