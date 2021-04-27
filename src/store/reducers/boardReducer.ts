import { AddBoardActions, AddBoardActionTypes, AddBoardState } from '../types/addBoard';

const initialState: AddBoardState = {
  added: true,
  error: null,
};

export const boardReducer = (state = initialState, action: AddBoardActions): AddBoardState => {
  switch (action.type) {
    case AddBoardActionTypes.ADD_BOARD_SUCCESS:
      return { added: true, error: null };
    case AddBoardActionTypes.ADD_BOARD_ERROR:
      return { added: false, error: action.payload };
    default:
      return state;
  }
};
