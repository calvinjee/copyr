export const CLOSE_MODAL = 'CLOSE_MODAL';
export const POST_FORM_MODAL = 'POST_FORM_MODAL';

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const postFormModal = (postType) => {
  return {
    type: POST_FORM_MODAL,
    postType: postType
  };
};
