import { combineReducers } from 'redux';
import { boardsReducer } from './boardsReducer';
import { listsReducer } from './listsReducer';
import { boardReducer } from './boardReducer';
import { boardEditReducer } from './boardEditReducer';
import { deleteBoardReducer } from './deleteBoardReducer';

export const rootReducer = combineReducers({
  boards: boardsReducer,
  lists: listsReducer,
  boardAdd: boardReducer,
  boardEdit: boardEditReducer,
  boardDelete: deleteBoardReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
