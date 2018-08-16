import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import Menu from './Menu';

const styles = theme => ({
  root: theme.mixins.gutters({
    background: 'linear-gradient(-135deg, #E4A972, #EA6264)',
    height: 50
  }),
});

class Header extends Component {
  constructor(props) {
    super(props)
    this.classes = props.classes
    this.state = {
    }
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Grid container>
            <Menu />
          </Grid>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Header)