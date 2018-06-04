import * as actionTypes from '../utils/actionTypes';

export const onNumClick = (number) => ({
  type: actionTypes.INPUT_NUMBER,
  number,
});

export const onPlusClick = () => ({
  type: actionTypes.PLUS,
});

export const onMinusClick = () => ({
  type: actionTypes.MINUS,
});

export const onMultipliedClick = () => ({
  type: actionTypes.MULTI,
});

export const onDividedClick = () => ({
  type: actionTypes.DIVIDE,
});

export const onACClick = () => ({
  type: actionTypes.AC,
});

export const onDotClick = () => ({
  type: actionTypes.DOT,
});

export const onEqualClick = () => ({
  type: actionTypes.EQUIL,
});