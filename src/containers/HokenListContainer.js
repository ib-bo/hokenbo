import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

import List from '../conponents/List';
import Slick from '../conponents/Slick';
import Header from '../conponents/Header';

import '../HokenList.css';

class HokenListContainer extends Component {
  render() {
    const { hokenList, actions } = this.props;

    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="hokenList">
          <Slick config={hokenList.config} slides={hokenList.slides} list={<List />}/>
        </div>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  hokenList: state.hokenList,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapState, mapDispatch)(HokenListContainer);