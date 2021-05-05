export enum ChangeItemActionTypes {
  CHANGE_ITEM = 'CHANGE_ITEM',
  CHANGE_ITEM_SUCCESS = 'CHANGE_ITEM_SUCCESS',
  CHANGE_ITEM_ERROR = 'CHANGE_ITEM_ERROR',
}

export interface ChangeItemState {
  changeState: boolean;
  error: null | string;
}

interface ChangeItemAction {
  type: ChangeItemActionTypes.CHANGE_ITEM;
  payload: boolean;
}
interface ChangeItemSuccessAction {
  type: ChangeItemActionTypes.CHANGE_ITEM_SUCCESS;
  payload: boolean;
}
interface ChangeItemErrorAction {
  type: ChangeItemActionTypes.CHANGE_ITEM_ERROR;
  payload: string;
}
export type ChangeItemActions = ChangeItemAction | ChangeItemSuccessAction | ChangeItemErrorAction;
