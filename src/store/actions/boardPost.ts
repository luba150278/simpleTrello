import axios from 'axios';
import { Dispatch } from 'redux';
import api from '../../common/constans/api';
import { AddBoardActions, AddBoardActionTypes } from '../types/addBoard';
// import { fetchBoards } from './boards';

type ITitle = {
  title: string;
};
const url = `${api.baseURL}/board`;
export const addBoard = (newBoard: ITitle) => async (dispatch: Dispatch<AddBoardActions>): Promise<void> => {
  try {
    /* dispatch({ type: AddBoardActionTypes.ADD_BOARD, payload: false }); */
    axios.post(url, newBoard, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
    dispatch({ type: AddBoardActionTypes.ADD_BOARD_SUCCESS, payload: true });
  } catch (e) {
    dispatch({ type: AddBoardActionTypes.ADD_BOARD_ERROR, payload: "Error. Boards info don't load" });
  }
};
