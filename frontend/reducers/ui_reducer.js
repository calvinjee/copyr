import { CLEAR_ON_LOGOUT } from '../actions/session_actions';
import {
  CLOSE_MODAL,
  POST_FORM_MODAL,
  DROPDOWN_MODAL } from '../actions/modal_actions';
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
        postType: action.postType,
        editPostId: action.editPostId,
      };
    case DROPDOWN_MODAL:
      return {
        modalOpen: true,
        dropdown: action.dropdown,
        editPostId: action.editPostId,
      };
    case CLEAR_ON_LOGOUT: return defaultState;
    default: return state;
  }
};

export default uiReducer;
