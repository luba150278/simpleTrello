import { DeleteListActions, DeleteListActionTypes, DeleteListState } from '../types/deleteList';

const initialState: DeleteListState = {
  deleted: true,
  error: null,
};

export const deleteListReducer = (state = initialState, action: DeleteListActions): DeleteListState => {
  switch (action.type) {
    case DeleteListActionTypes.DELETE_LIST_SUCCESS:
      return { deleted: true, error: null };
    case DeleteListActionTypes.DELETE_LIST_ERROR:
      return { deleted: false, error: action.payload };
    default:
      return state;
  }
};
