import { ALL_ELEMENTS } from '../actionTypes';
import data from '../../list/data.json';

const initialState = {
  elements: data,
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case ALL_ELEMENTS:
      return {
        elements: action.payload,
      };
    default:
      return state;
  }
};

export default list;