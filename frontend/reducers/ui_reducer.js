import { CLOSE_MODAL,
  TEXT_MODAL } from '../actions/modal_actions';
import { merge } from 'lodash';


const defaultState = { modalOpen: false };

const uiReducer = (state = defaultState, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case CLOSE_MODAL:
      return { modalOpen: false };
    case TEXT_MODAL:
      return {
        modalOpen: true,
        postType: 'text'
      };
    default: return state;
  }
};

export default uiReducer;
