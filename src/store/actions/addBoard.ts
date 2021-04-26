import axios from 'axios';
import { Dispatch } from 'redux';
import { AddBoardActions, AddBoardActionTypes } from '../types/addBoard';

type IBoard = {
  title: string;
};

export const addTodo = (url: string, newList: IBoard) => (dispatch: Dispatch<AddBoardActions>): void => {
  dispatch(addListStarted());

  axios
    .post(url, newList, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    })
    .then((res) => {
      dispatch(addListSuccess(res.data));
    })
    .catch((err) => {
      dispatch(addListError(err.message));
    });
};

const addListSuccess = (board: IBoard) => ({
  type: AddBoardActionTypes.ADD_BOARD_SUCCESS,
  payload: {
    ...board,
  },
});

const addListStarted = () => ({
  type: AddBoardActionTypes.ADD_BOARD,
});

const addListError = (error: string) => ({
  type: AddBoardActionTypes.ADD_BOARD_ERROR,
  payload: {
    error,
  },
});
