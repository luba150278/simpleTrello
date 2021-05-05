import axios from 'axios';
import { Dispatch } from 'redux';
import { ChangeItemActions, ChangeItemActionTypes } from '../types/changeItem';

type ITitle = {
  title: string;
};

export const addItem = (url: string, newItem: ITitle) => async (
  dispatch: Dispatch<ChangeItemActions>
): Promise<void> => {
  try {
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM, payload: false });
    axios.post(url, newItem, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_ERROR, payload: "Error. Items info don't load" });
  }
};
