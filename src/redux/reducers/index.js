import { combineReducers } from 'redux';

import listReducer from './list';

const rootReducer = combineReducers({
  list: listReducer,
});

export default rootReducer;
