import { AddCardActions, AddCardActionTypes, AddCardState } from '../types/addCard';

const initialState: AddCardState = {
  added: true,
  error: null,
};

export const cardAddReducer = (state = initialState, action: AddCardActions): AddCardState => {
  switch (action.type) {
    case AddCardActionTypes.ADD_CARD_SUCCESS:
      return { added: true, error: null };
    case AddCardActionTypes.ADD_CARD_ERROR:
      return { added: false, error: action.payload };
    default:
      return state;
  }
};
