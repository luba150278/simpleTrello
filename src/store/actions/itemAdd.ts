/* eslint-disable no-console */
import { Dispatch } from 'redux';
import api from '../../api/request';
import config from '../../common/constans/api';
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
): Promise<string> => {
  try {
    const res = await api.post(`${config.board}/${url}`, newItem);
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_SUCCESS, payload: true });
    return res.data.result;
  } catch (e) {
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_ERROR, payload: ERROR_ITEM_ADD });
    return ERROR_ITEM_ADD;
  }
};
