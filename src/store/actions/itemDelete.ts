import axios from 'axios';
import { Dispatch } from 'redux';
import { ChangeItemActions, ChangeItemActionTypes } from '../types/changeItem';

export const deleteItem = (url: string) => async (dispatch: Dispatch<ChangeItemActions>): Promise<void> => {
  try {
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM, payload: false });
    axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_ERROR, payload: "Error. Boards info don't load" });
  }
};
