import { combineReducers } from 'redux';
import { boardsReducer } from './boardsReducer';
import { listsReducer } from './listsReducer';

export const rootReducer = combineReducers({
  boards: boardsReducer,
  lists: listsReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
