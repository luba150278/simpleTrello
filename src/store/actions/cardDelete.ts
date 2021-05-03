import axios from 'axios';
import { Dispatch } from 'redux';
import { DeleteCardActions, DeleteCardActionTypes } from '../types/deleteCard';

export const deleteCard = (url: string) => async (dispatch: Dispatch<DeleteCardActions>): Promise<void> => {
  try {
    /* dispatch({ type: DeleteCardActionTypes.Delete_Card, payload: false }); */
    axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: DeleteCardActionTypes.DELETE_CARD_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: DeleteCardActionTypes.DELETE_CARD_ERROR, payload: "Error. Cards didn't delete" });
  }
};
