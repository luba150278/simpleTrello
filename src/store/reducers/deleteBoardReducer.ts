import { DeleteBoardActions, DeleteBoardActionTypes, DeleteBoardState } from '../types/deleteBoard';

const initialState: DeleteBoardState = {
  deleted: true,
  error: null,
};

export const deleteBoardReducer = (state = initialState, action: DeleteBoardActions): DeleteBoardState => {
  switch (action.type) {
    case DeleteBoardActionTypes.DELETE_BOARD_SUCCESS:
      return { deleted: true, error: null };
    case DeleteBoardActionTypes.DELETE_BOARD_ERROR:
      return { deleted: false, error: action.payload };
    default:
      return state;
  }
};
