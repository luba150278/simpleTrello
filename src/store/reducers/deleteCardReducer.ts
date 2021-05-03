import { DeleteCardActions, DeleteCardActionTypes, DeleteCardState } from '../types/deleteCard';

const initialState: DeleteCardState = {
  deleted: false,
  error: null,
};

export const deleteCardReducer = (state = initialState, action: DeleteCardActions): DeleteCardState => {
  switch (action.type) {
    case DeleteCardActionTypes.DELETE_CARD_SUCCESS:
      return { deleted: true, error: null };
    case DeleteCardActionTypes.DELETE_CARD_ERROR:
      return { deleted: false, error: action.payload };
    default:
      return state;
  }
};
