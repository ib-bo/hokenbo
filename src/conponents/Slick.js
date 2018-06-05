import React from 'react';
import { render } from 'react-dom';
import Slider from 'react-slick';
import List from './List';
import AddBtn from './AddBtn';

class Slick extends React.Component {
  render () {
    const { classes } = this.props;
    return (
      <Slider {...this.props.config}>
        {this.props.slides.map(slide => {
          return (
            <List />
          );
        })}
        <AddBtn />        
      </Slider>
    );
  }
}

export default Slick;