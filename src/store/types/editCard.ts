export enum EditCardActionTypes {
  EDIT_CARD = 'EDIT_CARD',
  EDIT_CARD_SUCCESS = 'EDIT_CARD_SUCCESS',
  EDIT_CARD_ERROR = 'EDIT_CARD_ERROR',
}

export interface EditCardState {
  edited: boolean;
  error: null | string;
}

interface EditCardAction {
  type: EditCardActionTypes.EDIT_CARD;
  payload: boolean;
}
interface EditCardSuccessAction {
  type: EditCardActionTypes.EDIT_CARD_SUCCESS;
  payload: boolean;
}
interface EditCardErrorAction {
  type: EditCardActionTypes.EDIT_CARD_ERROR;
  payload: string;
}
export type EditCardActions = EditCardAction | EditCardSuccessAction | EditCardErrorAction;
