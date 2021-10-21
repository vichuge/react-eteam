import { ALL_ELEMENTS } from '../actionTypes';

const initialState = {
  elements: [],
  status: false,
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case ALL_ELEMENTS:
      return {
        elements: action.payload,
        status: true,
      };
    default:
      return state;
  }
};

export default list;