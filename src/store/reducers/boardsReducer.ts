import { BoardsAction, BoardsActionTypes, BoardsState } from '../types/boards';

const initialState: BoardsState = {
  getBoards: { boards: [] },
  loading: false,
  error: null,
};

export const boardsReducer = (state = initialState, action: BoardsAction): BoardsState => {
  switch (action.type) {
    case BoardsActionTypes.FETCH_BOARDS:
      return { loading: true, error: null, getBoards: { boards: [] } };
    case BoardsActionTypes.FETCH_BOARDS_SUCCESS:
      return { loading: false, error: null, getBoards: action.payload };
    case BoardsActionTypes.FETCH_BOARDS_ERROR:
      return { loading: false, error: action.payload, getBoards: { boards: [] } };
    default:
      return state;
  }
};
