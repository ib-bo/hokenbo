import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class MinusBtn extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Button variant="fab" color="primary" aria-label="add" className={classes.button} onClick={this.props.onClick }>
        -
      </Button>
    );
  }
}

MinusBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};


export default  withStyles(styles)(MinusBtn);