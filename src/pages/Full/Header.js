import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import Avatar from '@material-ui/core/Avatar';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { settings, navItems } from '../../settings';

const useStyles = makeStyles({
  routeButton: {
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
});

const NavButton = props => {
  const classes = useStyles(props);
  console.log('props', props);
  // const [value, setValue] = React.useState(props);

  const onClick = () => {
    const {to} = props;
    props.history.push(to);
  };

  // return <Button className={classes.routeButton} onClick={onClick} {...other} />;
  return <Button className={classes.routeButton} onClick={onClick} >
    {props.children}
  </Button>
};

const Nav = (props) => {
  // const [value, setValue] = React.useState(0);
  // const classes = useStyles();

  return (
    <React.Fragment>
      {
        navItems.map((item, index) => {
          return(
            <NavButton key={item.key} color='red' to={item.to} {...props} >{item.text}</NavButton>
          )
        })
      }   
    </React.Fragment>
  );
};

class Header extends React.Component {
  render() {
    return (
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography style={{ marginRight: 20 }} color="inherit" variant="h6">
            {settings.title}
          </Typography>
          <Nav {...this.props}/>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
