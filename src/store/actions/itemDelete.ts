/* eslint-disable no-console */
import { Dispatch } from 'redux';
import api from '../../api/request';
import config from '../../common/constans/api';
import { ERROR_ITEM_DELETE } from '../../common/constans/messages';
import { ChangeItemActions, ChangeItemActionTypes } from '../types/changeItem';

export const deleteItem = (url: string) => async (dispatch: Dispatch<ChangeItemActions>): Promise<void> => {
  try {
    // dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM, payload: false });
    const lll = await api.delete(`${config.board}/${url}`);
    console.log(lll);
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_ERROR, payload: ERROR_ITEM_DELETE });
  }
};
