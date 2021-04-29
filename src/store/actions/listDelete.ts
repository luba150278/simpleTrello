import axios from 'axios';
import { Dispatch } from 'redux';
import { DeleteListActions, DeleteListActionTypes } from '../types/deleteList';

export const deleteList = (url: string) => async (dispatch: Dispatch<DeleteListActions>): Promise<void> => {
  try {
    /* dispatch({ type: DeleteListActionTypes.Delete_List, payload: false }); */
    axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: DeleteListActionTypes.DELETE_LIST_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: DeleteListActionTypes.DELETE_LIST_ERROR, payload: "Error. Lists info don't load" });
  }
};
