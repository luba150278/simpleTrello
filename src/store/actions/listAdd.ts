import axios from 'axios';
import { Dispatch } from 'redux';
import { AddListActions, AddListActionTypes } from '../types/addList';

type ITitle = {
  title: string;
};

export const addList = (url: string, newList: ITitle) => async (dispatch: Dispatch<AddListActions>): Promise<void> => {
  try {
    dispatch({ type: AddListActionTypes.ADD_LIST, payload: false });
    axios.post(url, newList, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: AddListActionTypes.ADD_LIST_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: AddListActionTypes.ADD_LIST_ERROR, payload: "Error. Lists info don't load" });
  }
};
