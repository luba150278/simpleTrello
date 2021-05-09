/* eslint-disable no-console */
import { Dispatch } from 'redux';
import api from '../../api/request';
import config from '../../common/constans/api';
import { ERROR_LISTS_LOAD } from '../../common/constans/messages';
import { ListsAction, ListsActionTypes } from '../types/lists';

export const fetchLists = (id: string) => async (dispatch: Dispatch<ListsAction>): Promise<void> => {
  // const url = `${api.baseURL}/board/${id}`;
  try {
    dispatch({ type: ListsActionTypes.FETCH_LISTS });
    const response = await api.get(`${config.board}/${id}`);
    dispatch({ type: ListsActionTypes.FETCH_LISTS_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: ListsActionTypes.FETCH_LISTS_ERROR, payload: ERROR_LISTS_LOAD });
  }
};
