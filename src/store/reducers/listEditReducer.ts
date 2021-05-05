import { EditListActions, EditListActionTypes, EditListState } from '../types/editList';

const initialState: EditListState = {
  edited: false,
  error: null,
};

export const listEditReducer = (state = initialState, action: EditListActions): EditListState => {
  switch (action.type) {
    case EditListActionTypes.EDIT_LIST_SUCCESS:
      return { edited: true, error: null };
    case EditListActionTypes.EDIT_LIST_ERROR:
      return { edited: false, error: action.payload };
    default:
      return state;
  }
};
