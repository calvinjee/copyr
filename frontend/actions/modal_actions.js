export const CLOSE_MODAL = 'CLOSE_MODAL';
export const POST_FORM_MODAL = 'POST_FORM_MODAL';
export const DROPDOWN_MODAL = 'DROPDOWN_MODAL';

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const postFormModal = (postType, editForm) => {
  return {
    type: POST_FORM_MODAL,
    postType: postType,
    editForm: editForm,
  };
};

export const dropdownModal = (dropdown, editPostId) => {
  return {
    type: DROPDOWN_MODAL,
    dropdown: dropdown,
    editPostId: editPostId,
  };
};
