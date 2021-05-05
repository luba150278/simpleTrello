import axios from 'axios';
import { Dispatch } from 'redux';
import { EditCardActions, EditCardActionTypes } from '../types/editCard';

type Data = {
  title: string;
  list_id: number;
};

export const editCard = (newData: Data, urlEdit: string) => async (
  dispatch: Dispatch<EditCardActions>
): Promise<void> => {
  try {
    dispatch({ type: EditCardActionTypes.EDIT_CARD, payload: false });
    axios.put(urlEdit, newData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: EditCardActionTypes.EDIT_CARD_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: EditCardActionTypes.EDIT_CARD_ERROR, payload: "Error. Card title didn't change" });
  }
};
