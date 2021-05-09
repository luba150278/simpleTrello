/* eslint-disable no-console */
import axios from 'axios';
import { Dispatch } from 'redux';
import { ERROR_ITEM_ADD } from '../../common/constans/messages';
import { ChangeItemActions, ChangeItemActionTypes } from '../types/changeItem';

type Card = {
  title: string;
  list_id: number;
  position: number;
};

type Board = {
  title: string;
};

type List = {
  title: string;
  position: number;
};

export const addItem = (url: string, newItem: Card | Board | List) => async (
  dispatch: Dispatch<ChangeItemActions>
): Promise<void> => {
  try {
    // dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM, payload: false });
    const lll = await axios.post(url, newItem, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    console.log(lll);
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_SUCCESS, payload: true });
    // dispatch({ type: 'ADD_BOARDS', boards });
  } catch (e) {
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_ERROR, payload: ERROR_ITEM_ADD });
  }
};
