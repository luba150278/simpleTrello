import { combineReducers } from 'redux';
import { boardsReducer } from './boardsReducer';
import { listsReducer } from './listsReducer';
import { boardReducer } from './boardReducer';
import { boardEditReducer } from './boardEditReducer';
import { deleteBoardReducer } from './deleteBoardReducer';
import { listAddReducer } from './listAddReducer';
import { deleteListReducer } from './deleteListReducer';
import { cardAddReducer } from './cardAddReducer';
import { listEditReducer } from './listEditReducer';

export const rootReducer = combineReducers({
  boards: boardsReducer,
  lists: listsReducer,
  boardAdd: boardReducer,
  boardEdit: boardEditReducer,
  boardDelete: deleteBoardReducer,
  listAdd: listAddReducer,
  listDelete: deleteListReducer,
  addCard: cardAddReducer,
  editList: listEditReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
