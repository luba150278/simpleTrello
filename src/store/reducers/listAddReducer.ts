import { AddListActions, AddListActionTypes, AddListState } from '../types/addList';

const initialState: AddListState = {
  added: false,
  error: null,
};

export const listAddReducer = (state = initialState, action: AddListActions): AddListState => {
  switch (action.type) {
    case AddListActionTypes.ADD_LIST_SUCCESS:
      return { added: true, error: null };
    case AddListActionTypes.ADD_LIST_ERROR:
      return { added: false, error: action.payload };
    default:
      return state;
  }
};
