import { EditCardActions, EditCardActionTypes, EditCardState } from '../types/editCard';

const initialState: EditCardState = {
  edited: false,
  error: null,
};

export const cardEditReducer = (state = initialState, action: EditCardActions): EditCardState => {
  switch (action.type) {
    case EditCardActionTypes.EDIT_CARD_SUCCESS:
      return { edited: true, error: null };
    case EditCardActionTypes.EDIT_CARD_ERROR:
      return { edited: false, error: action.payload };
    default:
      return state;
  }
};
