import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { merge } from 'lodash';


const uiReducer = (state = { modalOpen: false }, action ) => {
  Object.freeze(state);
  // debugger
  switch(action.type) {
    case OPEN_MODAL:
      return { modalOpen: true };
    case CLOSE_MODAL:
      return { modalOpen: false };
    default: return state;
  }
};

export default uiReducer;
