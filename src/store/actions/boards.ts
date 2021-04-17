import axios from 'axios';
import { Dispatch } from 'redux';
import { BoardsAction, BoardsActionTypes } from '../types/boards';

export const fetchBoards = () => async (dispatch: Dispatch<BoardsAction>): Promise<void> => {
  try {
    dispatch({ type: BoardsActionTypes.FETCH_BOARDS });
    const response = await axios.get('https://trello-back.shpp.me/lmyetolkina/api/v1/board', {
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
