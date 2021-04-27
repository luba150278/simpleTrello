import { EditBoardActions, EditBoardActionTypes, EditBoardState } from '../types/editBoard';

const initialState: EditBoardState = {
  edited: true,
  error: null,
};

export const boardEditReducer = (state = initialState, action: EditBoardActions): EditBoardState => {
  switch (action.type) {
    case EditBoardActionTypes.EDIT_BOARD_SUCCESS:
      return { edited: true, error: null };
    case EditBoardActionTypes.EDIT_BOARD_ERROR:
      return { edited: false, error: action.payload };
    default:
      return state;
  }
};
