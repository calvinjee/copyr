export const CLOSE_MODAL = 'CLOSE_MODAL';
export const POST_FORM_MODAL = 'POST_FORM_MODAL';
export const DROPDOWN_MODAL = 'DROPDOWN_MODAL';

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const postFormModal = (postType) => {
  return {
    type: POST_FORM_MODAL,
    postType: postType,
  };
};

export const dropdownModal = (dropdown, editPostId, editForm) => {
  return {
    type: DROPDOWN_MODAL,
    dropdown: dropdown,
    editPostId: editPostId,
    editForm: editForm,
  };
};
