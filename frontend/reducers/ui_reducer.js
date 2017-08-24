import { CLOSE_MODAL,
  POST_FORM_MODAL } from '../actions/modal_actions';
import { merge } from 'lodash';


const defaultState = { modalOpen: false };

const uiReducer = (state = defaultState, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case CLOSE_MODAL:
      return { modalOpen: false };
    case POST_FORM_MODAL:
      return {
        modalOpen: true,
        postType: action.postType
      };
    default: return state;
  }
};

export default uiReducer;
