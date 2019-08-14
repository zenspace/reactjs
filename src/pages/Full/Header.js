import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {
        anchorEl: null
      }
    }
  }

  render() {
    const {classes } = this.props;
    const { title, isPerformingAuthAction, isSignedIn, user} = this.props;
    const {onSignUpClick, onSignInClick} = this.props;
    const {menu} = this.state;
    return(
      <AppBar color='primary' position='static'>
        <Toolbar variant='regular'>
          <Typography sttyle={{flexGrow: 1}} color='inherit' variant='h6'>{title}</Typography>

          {isSignedIn &&
            <React.Fragment>
              <IconButton color='inherit' disabled={isPerfromingAuthAction} onClick={this.openMenu}>
                {user.photoURL ? <Avatar alt='Avatar' src={user.photoURL} /> : <PersonIcon />}
              </IconButton>

              <Menu anchorEl={menu.anchorEl} open={Boolean(memu.anchorEl)} onClose={this.closeMenu}>
                <MenuItem disableed={isPerformingAuthAction} onClick={this.handleSettingsClick}> 
                Settings
                </MenuItem>
                <MenuItem disabled={isPerformingAuthAction} onClick={this.handleSignOutClick}>
                  Sign Out
                </MenuItem>
              </Menu>
            </React.Fragment>
          }
          {!isSignedIn &&
            <React.Fragment>
              <Button className={classes.signUpButton} color="secondary" disabled={isPerformingAuthAction} variant="contained" onClick={onSignUpClick}>Sign Up</Button>
              <Button color="secondary" disabled={isPerformingAuthAction} variant="contained" onClick={onSignInClick}>Sign In</Button>
            </React.Fragment>
          }
        </Toolbar>
      </AppBar>
    )
  }
};

export default Header;