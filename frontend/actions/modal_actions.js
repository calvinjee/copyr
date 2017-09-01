export const CLOSE_MODAL = 'CLOSE_MODAL';
export const POST_FORM_MODAL = 'POST_FORM_MODAL';
export const DROPDOWN_MODAL = 'DROPDOWN_MODAL';
export const SHOW_LOADER = 'SHOW_LOADER';
export const REMOVE_LOADER = 'REMOVE_LOADER';

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const postFormModal = (postType, editPostId) => {
  return {
    type: POST_FORM_MODAL,
    postType: postType,
    editPostId: editPostId,
  };
};

export const dropdownModal = (dropdown, editPostId) => {
  return {
    type: DROPDOWN_MODAL,
    dropdown: dropdown,
    editPostId: editPostId,
  };
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const removeLoader = () => {
  return {
    type: REMOVE_LOADER,
  };
};
