import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

import NumBtn from '../conponents/NumBtn';
import DotBtn from '../conponents/DotBtn';
import PlusBtn from '../conponents/PlusBtn';
import MinusBtn from '../conponents/MinusBtn';
import MultipliedBtn from '../conponents/MultipliedBtn';
import DividedBtn from '../conponents/DividedBtn';
import ACBtn from '../conponents/ACBtn';
import EqualBtn from '../conponents/EqualBtn';
import Result from '../conponents/Result';


class CalculatorContainer extends Component {
  render() {
    const { calculator, actions } = this.props;

    return (
      <div class='result-area'>
        <Result result = {calculator.showingResult ? calculator.resultValue : calculator.inputValue} input = {calculator.inputValue}/>
        <div class='btn-area'>
          <ACBtn onClick={actions.onACClick} />
        </div>
        <div class='btn-area'>
          <NumBtn num='1' onClick={() => actions.onNumClick(1)} />
          <NumBtn num='2' onClick={() => actions.onNumClick(2)} />
          <NumBtn num='3' onClick={() => actions.onNumClick(3)} />
          <DividedBtn onClick={actions.onDividedClick} />
        </div>
        <div class='btn-area'>
          <NumBtn num='4' onClick={() => actions.onNumClick(4)} />
          <NumBtn num='5' onClick={() => actions.onNumClick(5)} />
          <NumBtn num='6' onClick={() => actions.onNumClick(6)} />
          <MultipliedBtn onClick={actions.onMultipliedClick} />
        </div>
        <div class='btn-area'>
          <NumBtn num='7' onClick={() => actions.onNumClick(7)} />
          <NumBtn num='8' onClick={() => actions.onNumClick(8)} />
          <NumBtn num='9' onClick={() => actions.onNumClick(9)} />
          <MinusBtn onClick={actions.onMinusClick} />
        </div>
        <div class='btn-area'>
          <NumBtn num='0' onClick={() => actions.onNumClick(0)} />
          <DotBtn onClick={actions.onDotClick} />
          <EqualBtn onClick={actions.onEqualClick} />
          <PlusBtn onClick={actions.onPlusClick} />
        </div>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  calculator: state.calculator,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapState, mapDispatch)(CalculatorContainer);