/* eslint-disable no-console */
import axios from 'axios';
import { Dispatch } from 'redux';
import { ERROR_ITEM_DELETE } from '../../common/constans/messages';
import { ChangeItemActions, ChangeItemActionTypes } from '../types/changeItem';

export const deleteItem = (url: string) => async (dispatch: Dispatch<ChangeItemActions>): Promise<void> => {
  try {
    // dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM, payload: false });
    const lll = await axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    console.log(lll);
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: ChangeItemActionTypes.CHANGE_ITEM_ERROR, payload: ERROR_ITEM_DELETE });
  }
};
