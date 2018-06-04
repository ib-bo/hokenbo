import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});

class Result extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>{this.props.result}</h1>
      </div>
    );
  }
}

export default  withStyles(styles)(Result);