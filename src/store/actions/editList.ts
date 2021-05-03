import axios from 'axios';
import { Dispatch } from 'redux';
import { EditListActions, EditListActionTypes } from '../types/editList';

type Data = {
  position: number;
  title: string;
};

export const editList = (newData: Data, urlEdit: string) => async (
  dispatch: Dispatch<EditListActions>
): Promise<void> => {
  try {
    /* dispatch({ type: AddListActionTypes.ADD_List, payload: false }); */
    axios.put(urlEdit, newData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: EditListActionTypes.EDIT_LIST_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: EditListActionTypes.EDIT_LIST_ERROR, payload: "Error. Lists title didn't change" });
  }
};
