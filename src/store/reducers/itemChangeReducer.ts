import { ChangeItemActions, ChangeItemActionTypes, ChangeItemState } from '../types/changeItem';

const initialState: ChangeItemState = {
  changeState: false,
  error: null,
};

export const itemChangeReducer = (state = initialState, action: ChangeItemActions): ChangeItemState => {
  switch (action.type) {
    case ChangeItemActionTypes.CHANGE_ITEM_SUCCESS:
      return { changeState: true, error: null };
    case ChangeItemActionTypes.CHANGE_ITEM_ERROR:
      return { changeState: false, error: action.payload };
    default:
      return state;
  }
};
