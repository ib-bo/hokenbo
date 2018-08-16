import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { SwipeableDrawer, List, Divider, IconButton,  Avatar } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    margin: 0
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
    })
  }

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
        {/* アイコン */}
        <IconButton className={classes.menuButton} onClick={this.toggleDrawer('left', true)}>
          {/* <MenuIcon /> */}
          {/* <Avatar src="http://www.shoshinsha-design.com/wp-content/uploads/2018/06/%E4%BA%BA%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png" /> */}
          <Avatar>優斗</Avatar>
        </IconButton>

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