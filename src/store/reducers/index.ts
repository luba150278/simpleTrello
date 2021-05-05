import { combineReducers } from 'redux';
import { boardsReducer } from './boardsReducer';
import { listsReducer } from './listsReducer';
import { itemChangeReducer } from './itemChangeReducer';

export const rootReducer = combineReducers({
  boards: boardsReducer,
  lists: listsReducer,
  changeItem: itemChangeReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
