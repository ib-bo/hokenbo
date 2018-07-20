import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {SwipeableDrawer, Button, List, Divider, IconButton,  Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Menu extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List></List>
        <Divider />
        <List></List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List></List>
        <Divider />
        <List></List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* <MenuIcon /> */}
            <Avatar src="data:image/jpeg;base64,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" />
          </IconButton>
        </Button>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);