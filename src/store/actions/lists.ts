/* eslint-disable no-console */
import axios from 'axios';
import { Dispatch } from 'redux';
import api from '../../common/constans/api';
import { ERROR_LISTS_LOAD } from '../../common/constans/messages';
import { ListsAction, ListsActionTypes } from '../types/lists';

export const fetchLists = (id: string) => async (dispatch: Dispatch<ListsAction>): Promise<void> => {
  const url = `${api.baseURL}/board/${id}`;
  try {
    dispatch({ type: ListsActionTypes.FETCH_LISTS });
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: ListsActionTypes.FETCH_LISTS_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: ListsActionTypes.FETCH_LISTS_ERROR, payload: ERROR_LISTS_LOAD });
  }
};
