/* eslint-disable no-console */
import { Dispatch } from 'redux';
import api from '../../api/request';
import config from '../../common/constans/api';
import { ERROR_ITEM_EDIT } from '../../common/constans/messages';
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
    // dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM, payload: false });
    await api.put(`${config.board}/${urlEdit}`, newData);
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_ERROR, payload: ERROR_ITEM_EDIT });
  }
};
