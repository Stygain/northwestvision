import { combineReducers } from 'redux';

import {
  SET_COMPRESSOR_SHOW
} from './actions.js';


function compressorShowReducer(state = false, action) {
  switch (action.type) {
    case SET_COMPRESSOR_SHOW:
      return action.show;

    default:
      return state;
  }
}



const rootReducer = combineReducers({
  compressorShow: compressorShowReducer,
});

export default rootReducer;
