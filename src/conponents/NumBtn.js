import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class NumBtn extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Button variant="fab" color="#696969" aria-label="" className={classes.button} onClick={this.props.onClick}>
        {this.props.num}
      </Button>
    );
  }
}

NumBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default  withStyles(styles)(NumBtn);