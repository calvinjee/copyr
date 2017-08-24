export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TEXT_MODAL = 'OPEN_MODAL';

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const textModal = () => {
  return {
    type: TEXT_MODAL,
  };
};
