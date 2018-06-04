import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class ACBtn extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Button variant="fab" color="#d3d3d3" aria-label="add" className={classes.button} onClick={this.props.onClick }>
        AC
      </Button>
    );
  }
}

ACBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};


export default  withStyles(styles)(ACBtn);