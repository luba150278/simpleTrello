import axios from 'axios';
import { Dispatch } from 'redux';
import { EditBoardActions, EditBoardActionTypes } from '../types/editBoard';

type ITitle = {
  title: string;
};

export const editBoard = (newBoard: ITitle, urlEdit: string) => async (
  dispatch: Dispatch<EditBoardActions>
): Promise<void> => {
  try {
    /* dispatch({ type: AddBoardActionTypes.ADD_BOARD, payload: false }); */
    axios.put(urlEdit, newBoard, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: EditBoardActionTypes.EDIT_BOARD_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: EditBoardActionTypes.EDIT_BOARD_ERROR, payload: "Error. Boards info don't load" });
  }
};
