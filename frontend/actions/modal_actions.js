export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = () => {
  // debugger
  return {
    type: OPEN_MODAL,
    // modalOpen: true
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
    // modalOpen: true
  };
};
