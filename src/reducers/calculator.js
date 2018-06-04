import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  inputValue: '',           //入力中の値
  resultValue: 0,           //現在までの合計値
  authDot: true,            //.の入力を許容するかの判定(.は1度のみ許容)
  mode: 0,                  //0:default, 1:+, 2:-, 3:*, 4:÷ 
  showingResult: true,      //結果を表示するかの判定
};

const calculator = (state = initialAppState, action) => {
  if (action.type === actionTypes.INPUT_NUMBER) {
    /*
    * NumBtnが押された場合
    */
    if (state.mode == 0) {
      state.resultValue = 0;
    }
    return {
      ...state,
      inputValue: String(state.inputValue) + String(action.number),
      showingResult: false,
    };
  } else if (action.type === actionTypes.PLUS) {
    /*
    * PlusBtnが押された場合
    */
    if (String(state.inputValue.slice(-1)) == '.') {
      var ret = Number(state.inputValue.slice(0, -1));
    } else {
      var ret = Number(state.inputValue);
    }
    var result = Calc(ret);
    return {
      ...state,
      inputValue: '',
      authDot: true,
      mode: 1,
      resultValue: result,
      showingResult: true,
    };
  } else if (action.type === actionTypes.MINUS) {
    /*
    * MinusBtnが押された場合
    */
    if (String(state.inputValue.slice(-1)) == '.') {
      var ret = Number(state.inputValue.slice(0, -1));
    } else {
      var ret = Number(state.inputValue);
    }
    var result = Calc(ret);
    return {
      ...state,
      inputValue: '',
      authDot: true,
      mode: 2,
      resultValue: result,
      showingResult: true,
    };
  } else if (action.type === actionTypes.MULTI) {
    /*
    * MultipliedBtnが押された場合
    */
    if (String(state.inputValue.slice(-1)) == '.') {
      var ret = Number(state.inputValue.slice(0, -1));
    } else {
      var ret = Number(state.inputValue);
    }
    var result = Calc(ret);
    return {
      ...state,
      inputValue: '',
      authDot: true,
      mode: 3,
      resultValue: result,
      showingResult: true,
    };
  } else if (action.type === actionTypes.DIVIDE) {
    /*
    * DividedBtnが押された場合
    */
    if (String(state.inputValue.slice(-1)) == '.') {
      var ret = Number(state.inputValue.slice(0, -1));
    } else {
      var ret = Number(state.inputValue);
    }
    var result = Calc(ret);
    return {
      ...state,
      inputValue: '',
      authDot: true,
      mode: 4,
      resultValue: result,
      showingResult: true,
    };
  } else if (action.type === actionTypes.AC) {
    /*
    * ACBtnが押された場合
    */
    return {
      ...state,
      inputValue: '',
      authDot: true,
      mode: 0,
      resultValue: 0,
      showingResult: true,
    };
  } else if (action.type === actionTypes.DOT) {
    /*
    * DotBtnが押された場合
    */
    if (state.authDot) {
      var ret = String(state.inputValue) + '.';
    } else {
      var ret = state.inputValue;
    }
    return {
      ...state,
      inputValue: ret,
      authDot: false,
      showingResult: false,
    };
  } else if (action.type === actionTypes.EQUIL) {
    /*
    * EqualBtnが押された場合
    */
    if (String(state.inputValue.slice(-1)) == '.') {
      var ret = Number(state.inputValue.slice(0, -1));
    } else {
      var ret = Number(state.inputValue);
    }
    var result = Calc(ret);
    return {
      ...state,
      inputValue: '',
      authDot: true,
      mode: 0,
      resultValue: result,
      showingResult: true,
    };
  } else {
    return state;
  }

  /*
  * modeによって、計算結果を返す
  * parm: val  入力中の値
  */
  function Calc(val){
    if (state.mode == 0){
      var result = val;
    } else if (state.mode == 1) {
      var result = state.resultValue + val;
    } else if (state.mode == 2) {
      var result = state.resultValue - val;
    } else if (state.mode == 3) {
      var result = state.resultValue * val;
    } else if (state.mode == 4) {
      var result = state.resultValue / val;
    } 

    return result;
  }
};

export default calculator;