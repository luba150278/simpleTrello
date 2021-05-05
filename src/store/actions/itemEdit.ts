import axios from 'axios';
import { Dispatch } from 'redux';
import { ChangeItemActions, ChangeItemActionTypes } from '../types/changeItem';

type Card = {
  position: number;
  title: string;
  list_id: number;
};

type Board = {
  title: string;
};

type List = {
  position: number;
  title: string;
};

export const editItem = (newData: Card | Board | List, urlEdit: string) => async (
  dispatch: Dispatch<ChangeItemActions>
): Promise<void> => {
  try {
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM, payload: false });
    axios.put(urlEdit, newData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_ERROR, payload: "Error. Lists title didn't change" });
  }
};
