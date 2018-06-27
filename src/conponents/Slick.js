import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { render } from 'react-dom';
import Slider from 'react-slick';
import List from './List';
import Button from '@material-ui/core/Button';

const styles = {
  btn: {
    marginTop: 16,
    marginLeft: 8,
    marginRight: 8,
    marginBottom:'100vh',
    flexWrap: 'nowrap',
    flex: 1,
  },
  slider: {
    height: '78vh'
  },
  dots: {
    height: '78vh'
  },

};

class Slick extends React.Component {
  render () {
    const { classes } = this.props;
    return (
      <Slider
        {...this.props.config}
        infinite={false}
        adaptiveHeight
        draggable
        dots={false}
        className={classes.slider}
      >
        {this.props.slides.map(slide => {
          return (
            <List />
          );
        })}
        <Button
          variant="outlined"
          className={classes.btn}
        >
          リストを追加する
        </Button>       
      </Slider>
    );
  }
}

Slick.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Slick);