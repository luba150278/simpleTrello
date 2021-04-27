import { combineReducers } from 'redux';
import { boardsReducer } from './boardsReducer';
import { listsReducer } from './listsReducer';
import { boardReducer } from './boardReducer';

export const rootReducer = combineReducers({
  boards: boardsReducer,
  lists: listsReducer,
  boardAdd: boardReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
