import { Dispatch } from 'redux';
import api from '../../api/request';
import config from '../../common/constans/api';
import { ERROR_BOARDS_LOAD } from '../../common/constans/messages';
import { BoardsAction, BoardsActionTypes } from '../types/boards';

// const url = `${api.baseURL}/board`;
export const fetchBoards = () => async (dispatch: Dispatch<BoardsAction>): Promise<void> => {
  try {
    dispatch({ type: BoardsActionTypes.FETCH_BOARDS });

    const response = await api.get(config.board);
    dispatch({ type: BoardsActionTypes.FETCH_BOARDS_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: BoardsActionTypes.FETCH_BOARDS_ERROR, payload: ERROR_BOARDS_LOAD });
  }
};
