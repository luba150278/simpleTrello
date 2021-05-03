export enum EditCardActionTypes {
  /* ADD_Card = 'ADD_Card', */
  EDIT_CARD_SUCCESS = 'EDIT_Card_SUCCESS',
  EDIT_CARD_ERROR = 'EDIT_Card_ERROR',
}

export interface EditCardState {
  edited: boolean;
  error: null | string;
}
interface EditCardSuccessAction {
  type: EditCardActionTypes.EDIT_CARD_SUCCESS;
  payload: boolean;
}
interface EditCardErrorAction {
  type: EditCardActionTypes.EDIT_CARD_ERROR;
  payload: string;
}
export type EditCardActions = EditCardSuccessAction | EditCardErrorAction;
