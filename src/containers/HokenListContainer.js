import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

import List from '../conponents/List';
import AddBtn from '../conponents/AddBtn';


class HokenListContainer extends Component {
  render() {
    const { hokenList, actions } = this.props;

    return (
      <div>
        <AddBtn />
        <List lists={hokenList.lists}/>
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