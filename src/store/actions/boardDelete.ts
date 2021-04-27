import axios from 'axios';
import { Dispatch } from 'redux';
import { DeleteBoardActions, DeleteBoardActionTypes } from '../types/deleteBoard';

export const deleteBoard = (url: string) => async (dispatch: Dispatch<DeleteBoardActions>): Promise<void> => {
  try {
    /* dispatch({ type: DeleteBoardActionTypes.Delete_BOARD, payload: false }); */
    axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: DeleteBoardActionTypes.DELETE_BOARD_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: DeleteBoardActionTypes.DELETE_BOARD_ERROR, payload: "Error. Boards info don't load" });
  }
};
