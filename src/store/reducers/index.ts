import { combineReducers } from 'redux';
import { boardsReducer } from './boardsReducer';
import { listsReducer } from './listsReducer';
import { boardReducer } from './boardReducer';
import { boardEditReducer } from './boardEditReducer';
import { deleteBoardReducer } from './deleteBoardReducer';
import { listAddReducer } from './listAddReducer';
import { deleteListReducer } from './deleteListReducer';

export const rootReducer = combineReducers({
  boards: boardsReducer,
  lists: listsReducer,
  boardAdd: boardReducer,
  boardEdit: boardEditReducer,
  boardDelete: deleteBoardReducer,
  listAdd: listAddReducer,
  listDelete: deleteListReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
