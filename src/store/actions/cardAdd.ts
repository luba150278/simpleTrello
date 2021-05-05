import axios from 'axios';
import { Dispatch } from 'redux';
import { AddCardActions, AddCardActionTypes } from '../types/addCard';

type ITitle = {
  title: string;
};

export const addCard = (url: string, newCard: ITitle) => async (dispatch: Dispatch<AddCardActions>): Promise<void> => {
  try {
    dispatch({ type: AddCardActionTypes.ADD_CARD, payload: false });
    axios.post(url, newCard, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: AddCardActionTypes.ADD_CARD_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: AddCardActionTypes.ADD_CARD_ERROR, payload: "Error. Card did't add" });
  }
};
