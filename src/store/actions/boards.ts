import axios from 'axios';
import { Dispatch } from 'redux';
import api from '../../common/constans/api';
import { BoardsAction, BoardsActionTypes } from '../types/boards';

const url = `${api.baseURL}/board`;
export const fetchBoards = () => async (dispatch: Dispatch<BoardsAction>): Promise<void> => {
  try {
    dispatch({ type: BoardsActionTypes.FETCH_BOARDS });

    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: BoardsActionTypes.FETCH_BOARDS_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: BoardsActionTypes.FETCH_BOARDS_ERROR, payload: "Error. Boards info don't load" });
  }
};
