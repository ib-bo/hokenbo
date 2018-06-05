import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  lists: [1,1,1,1,1],           //入力中の値
  config: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  },
  slides: [{name:'a'},{name:'second'},{name:'third'},{name:'forth'}],
};

const hokenList = (state = initialAppState, action) => {
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
  } else {
    return state;
  }

};

export default hokenList;